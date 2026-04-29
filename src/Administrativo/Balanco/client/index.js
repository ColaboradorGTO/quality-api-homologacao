import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class BalancoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarListaDetalhesBalanco(
        IDDETALHEBALANCO,
        TOTALCONTAGEMGERAL
    ) {
        const response = await this.api.put(`${url}/api/administrativo/detalhe-balanco.xsjs`, [{
            IDDETALHEBALANCO,
            TOTALCONTAGEMGERAL
        }]);

        return response.data;
    }

    async atualizarPrepararLojaPrimeiroBalanco(
        IDEMPRESA
    ) {
        const response = await this.api.put(`${url}/api/administrativo/prepara-primeiro-balanco-loja.xsjs`, [{
            IDEMPRESA
        }]);

        return response.data;
    }

    async atualizarConsolidarBalanco(
        IDRESUMOBALANCO,
        IDEMPRESA
    ) {
        const response = await this.api.put(`${url}/api/administrativo/consolidar-balanco.xsjs`, {
            IDRESUMOBALANCO,
            IDEMPRESA
        });

        return response.data;
    }

    async confirmarConsolidarBalanco(
        IDRESUMOBALANCO,
        OBSCONTAGEM,
        OBSDIVERGENCIACONTAGEM,
        OBSDIVERGENCIAGERENTE
    ) {
        const response = await this.api.put(`${url}/api/administrativo/confirmar-consolidar-balanco.xsjs`, [{
            IDRESUMOBALANCO,
            OBSCONTAGEM,
            OBSDIVERGENCIACONTAGEM,
            OBSDIVERGENCIAGERENTE
        }]);

        return response.data;
    }

    async atualizarDetalheBalancoAvulso(
        IDEMPRESA,
        NUMEROCOLETOR,
        DSCOLETOR,
        IDPRODUTO,
        TOTALCONTAGEMGERAL

    ) {
        const response = await this.api.put(`${url}/api/administrativo/detalhe-balanco-avulso.xsjs`, {
            IDEMPRESA,
            NUMEROCOLETOR,
            DSCOLETOR,
            IDPRODUTO,
            TOTALCONTAGEMGERAL
        });

        return response.data;
    }

    async criarConfirmarBalanco(
        IDEMPRESA,
        DSRESUMOBALANCO,
        DTABERTURA,
        DTFECHAMENTO,
        QTDTOTALITENS,
        QTDTOTALSOBRA,
        QTDTOTALFALTA,
        TXTOBSERVACAO,
        STATIVO,
        INSBALANCO,

    ) {
        const response = await this.api.post(`${url}/api/administrativo/detalhe-balanco-avulso.xsjs`, {
            DSRESUMOBALANCO,
            DTABERTURA,
            DTFECHAMENTO,
            IDEMPRESA,
            INSBALANCO,
            QTDTOTALFALTA,
            QTDTOTALITENS,
            QTDTOTALSOBRA,
            STATIVO,
            TXTOBSERVACAO,
        });
        return response.data;
    }

    async atualizarColetorBalanco(
        IDRESUMOBALANCO,
        NUMEROCOLETOR
    ) {
        const response = await this.api.put(`${url}/api/administrativo/coletor-balanco.xsjs`, {
            IDRESUMOBALANCO,
            NUMEROCOLETOR
        });
        return response.data;
    }

    async atualizarConfirmarPrestacaoContas(
        IDRESUMOBALANCO,

    ) {
        const response = await this.api.put(`${url}/api/administrativo/prestacao-contas-balanco.xsjs`, {
            IDRESUMOBALANCO,

        });
        return response.data;
    }

    async criarDetalheBalancoAvulso(
        IDEMPRESA,
        DSRESUMOBALANCO,
        DTABERTURA,
        DTFECHAMENTO,
        QTDTOTALITENS,
        QTDTOTALSOBRA,
        QTDTOTALFALTA,
        TXTOBSERVACAO,
        STATIVO,
        det,
        INSBALANCO,
    ) {
        const response = await this.api.post(`${url}/api/administrativo/detalhe-balanco-avulso.xsjs`, {
            IDEMPRESA,
            DSRESUMOBALANCO,
            DTABERTURA,
            DTFECHAMENTO,
            QTDTOTALITENS,
            QTDTOTALSOBRA,
            QTDTOTALFALTA,
            TXTOBSERVACAO,
            STATIVO,
            det,
            INSBALANCO,
        }
        );

        return response.data;
    }

    async criarDetalheBalancoAvulso(
        INSBALANCO,
        IDEMPRESA,
        NUMEROCOLETOR,
        DSCOLETOR,
        IDPRODUTO,
        DSPRODUTO,
        CODIGODEBARRAS,
        PRECOCUSTO,
        TOTALCONTAGEMGERAL,
        PRECOVENDA,
    ) {
        const response = await this.api.post(
            `${url}/api/administrativo/detalhe-balanco-avulso.xsjs`, [{
                INSBALANCO: 0,
                IDEMPRESA,
                NUMEROCOLETOR,
                DSCOLETOR,
                IDPRODUTO,
                DSPRODUTO,
                CODIGODEBARRAS,
                PRECOCUSTO,
                TOTALCONTAGEMGERAL,
                PRECOVENDA,
            }]
        );
        return response.data;
    }

    async criarOrUpdateResumoBalanco(
        INSBALANCO,
        IDEMPRESA,
        DSRESUMOBALANCO,
        DTABERTURA,
        DTFECHAMENTO,
        QTDTOTALITENS,
        QTDTOTALSOBRA,
        QTDTOTALFALTA,
        TXTOBSERVACAO,
        STATIVO,
        det
    ) {
        const response = await this.api.post(
            `${url}/api/administrativo/detalhe-balanco-avulso.xsjs`,
            [{
                INSBALANCO,
                IDEMPRESA,
                DSRESUMOBALANCO,
                DTABERTURA,
                DTFECHAMENTO,
                QTDTOTALITENS,
                QTDTOTALSOBRA,
                QTDTOTALFALTA,
                TXTOBSERVACAO,
                STATIVO,
                det
            }]
        );
        return response.data;
    }
}  