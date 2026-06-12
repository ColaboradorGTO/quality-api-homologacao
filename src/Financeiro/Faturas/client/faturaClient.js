import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class FaturaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarStatusFatura(
        STCONFERIDO,
        DATA_COMPENSACAO,
        IDDETALHEFATURA
    ) {

        const response = await this.api.put(`${url}/api/financeiro/fatura-pix-periodo-status-conferido.xsjs`, {
            STCONFERIDO,
            DATA_COMPENSACAO,
            IDDETALHEFATURA
        });
        return response.data;
    }

    async atualizarListaRecompra(
        IDDETALHEFATURA,
        STRECOMPRA
    ) {

        const response = await this.api.put(`${url}/api/fatura-loja/atualizar-recompra.xsjs`, {
            IDDETALHEFATURA,
            STRECOMPRA
        });
        return response.data;
    }

    async atualizarListaFatura(
        IDDETALHEFATURA,
        NUCODAUTORIZACAO,
        VRRECEBIDO,
    ) {

        const response = await this.api.put(`${url}/api/fatura-loja/atualizar.xsjs`, {
            IDDETALHEFATURA,
            NUCODAUTORIZACAO,
            VRRECEBIDO,
        });
        return response.data;
    }

    async atualizarFaturaFinanceiro(
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA
    ) {

        const response = await this.api.put(`${url}/api/financeiro/atualizar-fatura.xsjs`, {
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            STCANCELADO,
            STPIX,
            NUAUTORIZACAO,
            IDDETALHEFATURA
        });
        return response.data;
    }

    async atualizarConsolidacaoFatura(
        IDFUNCIONARIO,
        STCANCELADO,
        TXTMOTIVOCANCELAMENTO,
        IDCONSOLIDACAOFATURA
    ) {

        const response = await this.api.put(`${url}/api/financeiro/consolidacao-faturas.xsjs`, [{
            IDFUNCIONARIO,
            STCANCELADO,
            TXTMOTIVOCANCELAMENTO,
            IDCONSOLIDACAOFATURA
        }]);
        return response.data;
    }

    async criarConsolidacaoFatura(
        IDEMPRESA,
        DTPROCESSAMENTO,
        QTDTOTALFATURAS,
        VRTOTALRECEBIDO,
        IDFUNCIONARIO
    ) {

        const response = await this.api.post(`${url}/api/financeiro/consolidacao-faturas.xsjs`, [{
            IDEMPRESA,
            DTPROCESSAMENTO,
            QTDTOTALFATURAS,
            VRTOTALRECEBIDO,
            IDFUNCIONARIO
        }]);
        return response.data;
    }

    async criarConsolidacaoFaturaSAP(
        IDS_CONSOLIDACOES,
        IDFUNCIONARIO
    ) {

        const response = await this.api.post(`${url}/api/service-layer/fatura/jobs/consolidacao-faturas-integracao.xsjs`, [{
            IDS_CONSOLIDACOES,
            IDFUNCIONARIO
        }]);
        return response.data;
    }


}