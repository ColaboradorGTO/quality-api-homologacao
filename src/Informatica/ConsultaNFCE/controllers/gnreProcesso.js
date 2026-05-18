import path from 'path';
import { GeradorGNRE, PDFGNRE, ValidacaoGNRE } from './geradorGnre.js';

class GnreProcessoController {
  constructor() {
    this.processar = this.processar.bind(this);
    this.gerarPdf = this.gerarPdf.bind(this);
  }

  validarFluxo(fluxo = {}) {
    const {
      modeloOrigem = '65',
      houveDevolucao65 = false,
      modeloDestino = '55'
    } = fluxo;

    if (String(modeloOrigem) !== '65') {
      const error = new Error('Fluxo inválido: o processo GNRE esperado inicia em venda modelo 65.');
      error.statusCode = 400;
      throw error;
    }

    if (!houveDevolucao65) {
      const error = new Error('Fluxo inválido: é necessário confirmar a devolução da venda modelo 65.');
      error.statusCode = 400;
      throw error;
    }

    if (String(modeloDestino) !== '55') {
      const error = new Error('Fluxo inválido: a venda precisa ser recriada no modelo 55 antes da GNRE.');
      error.statusCode = 400;
      throw error;
    }
  }

  avaliarCenario(nfe) {
    ValidacaoGNRE.validarNFe(nfe);

    const precisaGNRE = ValidacaoGNRE.precisaGNRE(nfe);

    return {
      precisaGNRE,
      dados: {
        ufOrigem: nfe?.emit?.UF || null,
        ufDestino: nfe?.dest?.UF || null,
        interestadual: (nfe?.emit?.UF || '') !== (nfe?.dest?.UF || ''),
        consumidorFinal: nfe?.ide?.indFinal === '1',
        naoContribuinte: nfe?.dest?.indIEDest === '9'
      }
    };
  }

  async gerarResultado(reqBody = {}) {
    const {
      fluxo = {},
      nfe = null,
      opcoes = {}
    } = reqBody;

    this.validarFluxo(fluxo);

    const avaliacao = this.avaliarCenario(nfe);

    if (!avaliacao.precisaGNRE) {
      return {
        dispensada: true,
        avaliacao
      };
    }

    const gerador = new GeradorGNRE();
    const resultado = await gerador.gerar(nfe, {
      salvarArquivo: opcoes?.salvarArquivo ?? true,
      pastaSaida: opcoes?.pastaSaida ?? './gnre'
    });

    return {
      dispensada: false,
      avaliacao,
      resultado,
      nfe,
      opcoes
    };
  }

  async processar(req, res) {
    try {
      const { dispensada, avaliacao, resultado, nfe, opcoes } = await this.gerarResultado(req.body || {});

      if (dispensada) {
        return res.status(200).json({
          success: true,
          etapa: 'avaliacao_gnre',
          status: 'dispensada',
          message: 'Operação não exige GNRE para este cenário fiscal.',
          dados: avaliacao.dados
        });
      }

      let caminhoPdf = null;
      let arquivoPdf = null;

      if (opcoes?.salvarPdf) {
        const pdfBuffer = await PDFGNRE.gerarBuffer({
          nfe,
          calculo: resultado.calculo,
          estrutura: resultado.estrutura
        });

        arquivoPdf = `GNRE_${nfe?.ide?.nNF || 'sem_numero'}.pdf`;
        caminhoPdf = PDFGNRE.salvar(
          pdfBuffer,
          path.join(opcoes?.pastaSaida ?? './gnre', arquivoPdf)
        );
      }

      return res.status(200).json({
        success: true,
        etapa: 'gnre_emitida',
        status: 'emitida',
        message: 'GNRE processada com sucesso.',
        gnre: {
          receita: resultado?.calculo?.receita || null,
          valorGNRE: resultado?.calculo?.valorGNRE || null,
          valorDifal: resultado?.calculo?.valorDifal || null,
          valorFCP: resultado?.calculo?.valorFCP || null,
          arquivo: resultado?.arquivo || null,
          caminhoArquivo: resultado?.caminhoArquivo || null,
          arquivoPdf,
          caminhoPdf,
          xml: resultado?.xml || null
        }
      });
    } catch (error) {
      return res.status(error?.statusCode || 500).json({
        success: false,
        etapa: 'erro_tecnico',
        message: error?.message || 'Falha ao processar GNRE.',
      });
    }
  }

  async gerarPdf(req, res) {
    try {
      const { dispensada, avaliacao, resultado, nfe, opcoes } = await this.gerarResultado(req.body || {});

      if (dispensada) {
        return res.status(200).json({
          success: true,
          etapa: 'avaliacao_gnre',
          status: 'dispensada',
          message: 'Operação não exige GNRE para este cenário fiscal.',
          dados: avaliacao.dados
        });
      }

      const pdfBuffer = await PDFGNRE.gerarBuffer({
        nfe,
        calculo: resultado.calculo,
        estrutura: resultado.estrutura
      });

      if (opcoes?.salvarPdf) {
        const nomeArquivoPdf = `GNRE_${nfe?.ide?.nNF || 'sem_numero'}.pdf`;
        PDFGNRE.salvar(pdfBuffer, path.join(opcoes?.pastaSaida ?? './gnre', nomeArquivoPdf));
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="GNRE_${nfe?.ide?.nNF || 'sem_numero'}.pdf"`);
      return res.end(pdfBuffer);
    } catch (error) {
      return res.status(error?.statusCode || 500).json({
        success: false,
        etapa: 'erro_tecnico',
        message: error?.message || 'Falha ao gerar PDF da GNRE.',
      });
    }
  }
}

export default new GnreProcessoController();
