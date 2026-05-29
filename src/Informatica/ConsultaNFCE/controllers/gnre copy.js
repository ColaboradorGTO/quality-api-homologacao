import fs from 'fs';
import path from 'path';
import https from 'https';
import axios from 'axios';
import xml2js from 'xml2js';
import { PDFGNRE } from './geradorGnre.js';

export async function getCertOptions(senha, fallbackPfxPath = './GTO COMERCIO 2026-2027.pfx') {

    if (process.env.CERT_PFX_BASE64) {
        try {
            const buf = Buffer.from(process.env.CERT_PFX_BASE64, "base64");
            if (buf.length > 0) {
                return { pfx: buf, senha };
            }
        } catch (e) {
            console.error("ERRO: CERT_PFX_BASE64 inválido:", e.message);
        }
    }

    if (fallbackPfxPath && fs.existsSync(fallbackPfxPath)) {
        try {
            const buf = fs.readFileSync(path.resolve(fallbackPfxPath));
            if (buf.length > 0) {
                return { pfx: buf, senha };
            }
        } catch (e) {
            console.error("ERRO ao ler arquivo PFX local:", e.message);
        }
    }

    if (process.env.CERT_PEM_CERT_BASE64 && process.env.CERT_PEM_KEY_BASE64) {
        try {
            const cert = Buffer.from(process.env.CERT_PEM_CERT_BASE64, "base64");
            const key = Buffer.from(process.env.CERT_PEM_KEY_BASE64, "base64");
            return { cert, key };
        } catch (e) {
            console.error("ERRO: CERT_PEM_*_BASE64 inválido:", e.message);
        }
    }

    return null;
}

export default class GNRE {

    constructor() {
        /** HOMOLOGAÇÃO */
        this.URL_ENVIO = 'https://www.testegnre.pe.gov.br/gnreWS/services/GnreLoteRecepcao';
        this.URL_CONSULTA = 'https://www.testegnre.pe.gov.br/gnreWS/services/GnreResultadoLote';

        /** CERTIFICADO */
        this.certificado = fs.readFileSync('./GTO COMERCIO 2026-2027.pfx');
        this.senhaCertificado = '#GTO@2026#';

        /** HTTPS AGENT */
        this.httpsAgent = new https.Agent({
            pfx: this.certificado,
            passphrase: this.senhaCertificado,
            rejectUnauthorized: false
        });
    }

    removerMascara(valor = '') {
        return String(valor).replace(/\D/g, '');
    }

    salvarRetornoXmlSefaz(tipo, xml, id = '') {
        if (!xml || typeof xml !== 'string') {
            return null;
        }

        try {
            const pastaXml = path.resolve(process.cwd(), 'xml-gnre');
            if (!fs.existsSync(pastaXml)) {
                fs.mkdirSync(pastaXml, { recursive: true });
            }

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const sufixo = id ? `_${String(id).replace(/[^a-zA-Z0-9_-]/g, '')}` : '';
            const nomeArquivo = `${tipo}${sufixo}_${timestamp}.xml`;
            const caminhoArquivo = path.join(pastaXml, nomeArquivo);

            fs.writeFileSync(caminhoArquivo, xml, 'utf8');
            return caminhoArquivo;
        } catch (e) {
            console.error('Erro ao salvar XML da SEFAZ:', e.message);
            return null;
        }
    }

    async gerarXML(payload) {
        const emitCnpj = this.removerMascara(payload.emitente.CNPJ);
        const destCnpj = this.removerMascara(payload.destinatario.CNPJ);
        const valor = Number(payload.valorNota).toFixed(2);
        const payloadReceita = payload.receita || '100120';
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');

        return `
            <TLote_GNRE versao="2.00" xmlns="http://www.gnre.pe.gov.br">
                <guias>
                    <TDadosGNRE versao="2.00">
                        <ufFavorecida>${payload.emitente.state}</ufFavorecida>
                        <tipoGnre>0</tipoGnre>
                        <contribuinteEmitente>
                        <identificacao>
                        <CNPJ>${emitCnpj}</CNPJ>
                        </identificacao>
                        <razaoSocial>${payload.emitente.xNome}</razaoSocial>
                        <endereco>${payload.emitente.xLgr}</endereco>
                        <municipio>${payload.emitente.municipioEmitente}</municipio>
                        <uf>${payload.emitente.state}</uf>
                        <cep>${this.removerMascara(payload.emitente.CEP)}</cep>
                        </contribuinteEmitente>
                        <itensGNRE>
                            <item>
                                <receita>${payloadReceita}</receita>
                                <documentoOrigem tipo="10">${payload.nnf}</documentoOrigem>
                                <referencia>
                                    <periodo>0</periodo>
                                    <mes>${mes}</mes>
                                    <ano>${ano}</ano>
                                </referencia>
                                <dataVencimento>${payload.dataVencimento}</dataVencimento>
                                <valor tipo="11">${valor}</valor>
                                <valor tipo="21">${valor}</valor>
                                <contribuinteDestinatario>
                                    <identificacao>
                                        <CNPJ>${destCnpj}</CNPJ>
                                    </identificacao>
                                    <razaoSocial>${payload.destinatario.xNomeDestinatario}</razaoSocial>
                                    <municipio>${payload.destinatario.municipioDestinatario}</municipio>
                                </contribuinteDestinatario>
                            </item>
                        </itensGNRE>
                        <valorGNRE>${valor}</valorGNRE>
                        <dataPagamento>${payload.dataPagamento}</dataPagamento>
                        <identificadorGuia>1</identificadorGuia>
                    </TDadosGNRE>
                </guias>
            </TLote_GNRE>`.trim();

    }

    async montarSOAP(xmlGNRE) {

        return `<?xml version="1.0" encoding="utf-8"?>
            <soapenv:Envelope
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">

                    <soapenv:Header>
                        <gnreCabecMsg xmlns="http://www.gnre.pe.gov.br/webservice/GnreLoteRecepcao">
                            <versaoDados>2.00</versaoDados>
                        </gnreCabecMsg>
                    </soapenv:Header>

                    <soapenv:Body>
                        <gnreDadosMsg xmlns="http://www.gnre.pe.gov.br/webservice/GnreLoteRecepcao">
                            ${xmlGNRE}
                        </gnreDadosMsg>
                    </soapenv:Body>
            </soapenv:Envelope>`;
    }

    async enviarParaSefaz(payload) {
        try {
            const xmlGNRE = await this.gerarXML(payload);
            const soapXML = await this.montarSOAP(xmlGNRE);
            const response = await axios.post(
                this.URL_ENVIO,
                soapXML,
                {
                    headers: {
                        'Content-Type': 'text/xml; charset=utf-8',
                        SOAPAction: 'processar'
                    },
                    httpsAgent: this.httpsAgent,
                    timeout: 60000
                }
            );

            const xmlResposta = response.data;
            const caminhoXmlResposta = this.salvarRetornoXmlSefaz('retorno_envio_gnre', xmlResposta, payload?.chave);
            const jsonResposta = await xml2js.parseStringPromise(xmlResposta, { explicitArray: false });
            const retorno = jsonResposta?.['soapenv:Envelope']?.['soapenv:Body']?.processarResponse?.['ns1:TRetLote_GNRE'];
            const situacao = retorno?.['ns1:situacaoRecepcao'];
            const recibo = retorno?.['ns1:recibo'];

            return {
                success: true,
                ambiente: retorno?.['ns1:ambiente'],
                codigo: situacao?.['ns1:codigo'],
                descricao: situacao?.['ns1:descricao'],
                recibo,
                xmlEnviado: xmlGNRE,
                soapEnviado: soapXML,
                xmlResposta,
                caminhoXmlResposta,
                jsonResposta
            };

        } catch (error) {
            const xmlErro = error?.response?.data;
            console.log(xmlErro);
            const caminhoXmlErro = this.salvarRetornoXmlSefaz('retorno_erro_envio_gnre', xmlErro, payload?.chave);
            let jsonErro = null;

            if (xmlErro) {
                try {
                    jsonErro = await xml2js.parseStringPromise(xmlErro, { explicitArray: false });
                } catch (e) {
                    jsonErro = xmlErro;
                }
            }

            return {
                success: false,
                statusCode: error?.response?.status,
                message: error.message,
                xmlErro,
                caminhoXmlErro,
                jsonErro
            };

        }

    }

    async consultarLote(numeroRecibo) {

        try {

            numeroRecibo = String(numeroRecibo)
                .replace(/\D/g, '')
                .padStart(14, '0');

            const xmlConsulta = `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
 xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">

    <soapenv:Header>

        <gnreCabecMsg
         xmlns="http://www.gnre.pe.gov.br/webservice/GnreResultadoLote">

            <versaoDados>2.00</versaoDados>

        </gnreCabecMsg>

    </soapenv:Header>

    <soapenv:Body>

        <gnreDadosMsg
         xmlns="http://www.gnre.pe.gov.br/webservice/GnreResultadoLote">

            <TConsLote_GNRE xmlns="http://www.gnre.pe.gov.br">

                <ambiente>2</ambiente>

                <numeroRecibo>${numeroRecibo}</numeroRecibo>

            </TConsLote_GNRE>

        </gnreDadosMsg>

    </soapenv:Body>

</soapenv:Envelope>`;

            const response = await axios.post(
                this.URL_CONSULTA,
                xmlConsulta,
                {
                    headers: {
                        'Content-Type': 'text/xml; charset=utf-8',
                        SOAPAction: 'consultar'
                    },
                    httpsAgent: this.httpsAgent,
                    timeout: 60000
                }
            );
            const xmlResposta = response.data;

            const jsonResposta = await xml2js.parseStringPromise(
                xmlResposta,
                {
                    explicitArray: false
                }
            );

            return {
                success: true,
                xmlConsulta,
                xmlResposta,
                jsonResposta
            };

        } catch (error) {

            return {
                success: false,
                erro: error?.response?.data || error.message
            };

        }

    }

    async gerarPdfGnre(payload, numeroControle16, dadosCodigo = {}) {
        try {
            const valorNota = Number(payload?.valorNota || 0);
            const numeroControleOficial = String(numeroControle16 || '')
                .replace(/\D/g, '')
                .slice(-16)
                .padStart(16, '0');

            if (!numeroControle16 || numeroControleOficial.length !== 16) {
                return {
                    success: false,
                    aguardandoProcessamento: true,
                    message: 'Lote ainda em processamento na GNRE. O PDF oficial exige número de controle (16 dígitos) retornado na consulta final.'
                };
            }

            const linhaDigitavel = String(dadosCodigo?.linhaDigitavel || '')
                .replace(/[^\d\s.-]/g, '')
                .trim();

            const codigoBarras = String(dadosCodigo?.codigoBarras || '')
                .replace(/\D/g, '')
                .trim();

            if (!linhaDigitavel && !codigoBarras) {
                return {
                    success: false,
                    aguardandoProcessamento: true,
                    message: 'Lote ainda sem linha digitável/código de barras oficial. Consulte novamente o recibo após o processamento.'
                };
            }

            const numeroDocumento = String(
                numeroControleOficial ||
                payload?.numeroControle ||
                payload?.chave ||
                payload?.ide?.nNF ||
                'sem_numero'
            ).replace(/\D/g, '').slice(-16) || 'sem_numero';

            const nfe = {
                chave: payload?.chave || '',
                ide: {
                    nNF: numeroDocumento
                },
                emit: {
                    CNPJ: payload?.emitente?.CNPJ || '',
                    xNome: payload?.emitente?.xNome || '',
                    UF: payload?.emitente?.state || payload?.emitente?.UF || '',
                    enderEmit: {
                        xLgr: payload?.emitente?.xLgr || '',
                        xMun: payload?.emitente?.municipioEmitente || '',
                        UF: payload?.emitente?.state || payload?.emitente?.UF || '',
                        CEP: payload?.emitente?.CEP || '',
                        fone: payload?.emitente?.fone || ''
                    }
                },
                dest: {
                    CPF: payload?.destinatario?.CPF || '',
                    CNPJ: payload?.destinatario?.CNPJ || '',
                    UF: payload?.destinatario?.UF || payload?.emitente?.state || payload?.emitente?.UF || '',
                    indIEDest: payload?.destinatario?.indIEDest || '9',
                    enderDest: {
                        xMun: payload?.destinatario?.municipioDestinatario || ''
                    }
                },
                total: {
                    ICMSTot: {
                        vNF: valorNota
                    }
                }
            };

            const calculo = {
                baseCalculo: valorNota,
                valorDifal: 0,
                valorFCP: 0,
                valorGNRE: valorNota,
                receita: payload?.receita || '100120'
            };

            const estrutura = {
                TLote_GNRE: {
                    guias: {
                        TDadosGNRE: {
                            ufFavorecida: payload?.emitente?.state || payload?.emitente?.UF || '',
                            receita: calculo.receita,
                            docOrigem: payload?.chave || numeroDocumento,
                            numeroControle: numeroControleOficial,
                            linhaDigitavel,
                            codigoBarras,
                            referencia: payload?.referencia || new Date().toISOString().slice(0, 7),
                            dataVencimento: payload?.dataVencimento || new Date().toISOString().slice(0, 10),
                            dataPagamento: payload?.dataPagamento || new Date().toISOString().slice(0, 10),
                            valorPrincipal: valorNota,
                            valorTotal: valorNota,
                            convenio: '0',
                            produto: payload?.produto || '',
                            municipioDestinatario: payload?.destinatario?.municipioDestinatario || ''
                        }
                    }
                }
            };

            const pdfBuffer = await PDFGNRE.gerarBuffer({ nfe, calculo, estrutura });
            const nomeArquivo = `GNRE_${numeroDocumento}.pdf`;
            const caminhoPdf = PDFGNRE.salvar(
                pdfBuffer,
                path.resolve(process.cwd(), 'gnre', nomeArquivo)
            );

            return {
                success: true,
                arquivoPdf: nomeArquivo,
                caminhoPdf,
                tamanhoBytes: pdfBuffer.length
            };
        } catch (error) {
            return {
                success: false,
                message: error?.message || 'Falha ao gerar PDF da GNRE.'
            };
        }
    }

}