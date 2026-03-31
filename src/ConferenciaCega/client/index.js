import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class CoferenciaCegaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarOT(
        /* IDEMPRESAORIGEM,
        IDPRODUTO,
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        IDUSRAJUSTE,
        IDSTATUSOT,
        IDRESUMOOT,
        IDUSRCANCELAMENTO,
        dadosdetalheot */

        IDRESUMOOT,
        IDPRODUTO,
        IDEMPRESAORIGEM,
        IDEMPRESADESTINO,
        IDOPERADOREXPEDICAO,
        NUTOTALITENS,
        QTDTOTALITENS,
        QTDTOTALITENSRECEPCIONADO,
        QTDTOTALITENSDIVERGENCIA,
        NUTOTALVOLUMES,
        TPVOLUME,
        VRTOTALCUSTO,
        VRTOTALVENDA,
        DTRECEPCAO,
        IDOPERADORRECEPTOR,
        DSOBSERVACAO,
        IDUSRCANCELAMENTO,
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        STEMISSAONFE,
        NUMERONFE,
        STENTRADAINVENTARIO,
        QTDCONFERENCIA,
        IDSTATUSOT,
        IDUSRAJUSTE,
        DTAJUSTE,
        QTDTOTALITENSAJUSTE,
        dadosdetalheot
    ) {

        const response = await this.api.put(`${url}/api/conferencia-cega/resumo-ordem-transferencia.xsjs`, [{
            IDRESUMOOT,
            IDPRODUTO,
            IDEMPRESAORIGEM,
            IDEMPRESADESTINO,
            IDOPERADOREXPEDICAO,
            NUTOTALITENS,
            QTDTOTALITENS,
            QTDTOTALITENSRECEPCIONADO,
            QTDTOTALITENSDIVERGENCIA,
            NUTOTALVOLUMES,
            TPVOLUME,
            VRTOTALCUSTO,
            VRTOTALVENDA,
            DTRECEPCAO,
            IDOPERADORRECEPTOR,
            DSOBSERVACAO,
            IDUSRCANCELAMENTO,
            IDSTDIVERGENCIA,
            OBSDIVERGENCIA,
            STEMISSAONFE,
            NUMERONFE,
            STENTRADAINVENTARIO,
            QTDCONFERENCIA,
            IDSTATUSOT,
            IDUSRAJUSTE,
            DTAJUSTE,
            QTDTOTALITENSAJUSTE,
            dadosdetalheot
        }]);
        return response.data;
    }

    async criarOT(
        IDEMPRESAORIGEM,
        IDEMPRESADESTINO,
        IDOPERADOREXPEDICAO,
        NUTOTALITENS,
        QTDTOTALITENS,
        QTDTOTALITENSRECEPCIONADO,
        QTDTOTALITENSDIVERGENCIA,
        NUTOTALVOLUMES,
        TPVOLUME,
        VRTOTALCUSTO,
        VRTOTALVENDA,
        DTRECEPCAO,
        IDOPERADORRECEPTOR,
        DSOBSERVACAO,
        IDUSRCANCELAMENTO,
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        STEMISSAONFE,
        NUMERONFE,
        STENTRADAINVENTARIO,
        QTDCONFERENCIA,
        IDSTATUSOT,
        IDUSRAJUSTE,
        DTAJUSTE,
        QTDTOTALITENSAJUSTE,
    ) {

        const response = await this.api.post(`${url}/api/conferencia-cega/status-divergencia.xsjs`, [{
            IDEMPRESAORIGEM,
            IDEMPRESADESTINO,
            IDOPERADOREXPEDICAO,
            NUTOTALITENS,
            QTDTOTALITENS,
            QTDTOTALITENSRECEPCIONADO,
            QTDTOTALITENSDIVERGENCIA,
            NUTOTALVOLUMES,
            TPVOLUME,
            VRTOTALCUSTO,
            VRTOTALVENDA,
            DTRECEPCAO,
            IDOPERADORRECEPTOR,
            DSOBSERVACAO,
            IDSTDIVERGENCIA,
            OBSDIVERGENCIA,
            STEMISSAONFE,
            NUMERONFE,
            STENTRADAINVENTARIO,
            QTDCONFERENCIA,
            IDSTATUSOT,
            IDUSRCANCELAMENTO,
            IDUSRAJUSTE,
            DTAJUSTE,
            QTDTOTALITENSAJUSTE,
        }])
        return response.data;
    }

    async atualizarStatusDivergencia(
        DESCRICAODIVERGENCIA,
        STATIVO,
        IDSTATUSDIVERGENCIA,

    ) {
        const response = await this.api.put(`${url}/api/conferencia-cega/status-divergencia.xsjs`, [{
            DESCRICAODIVERGENCIA,
            STATIVO,
            IDSTATUSDIVERGENCIA,
        }])
        return response.data;
    }

    async criarStatusDivergencia(
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO,
    ) {
        const response = await this.api.post(`${url}/api/conferencia-cega/status-divergencia.xsjs`, [{
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO,
        }])
        return response.data;
    }
}
