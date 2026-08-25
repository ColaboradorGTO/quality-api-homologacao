import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;
//const url = process.env.API_URL_HML;

export class OTClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async criarOT(
        IDRESUMOOT,
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
        CONFEREITENS,
        IDROTINA,
        DATAENTREGA,
        dadosdetalheot,
    ) {
        const response = await this.api.post(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs`, {
            IDRESUMOOT,
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
            CONFEREITENS,
            IDROTINA,
            DATAENTREGA,
            dadosdetalheot,
        });
        return response.data;
    }


    async atualizarOT(

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

        const response = await this.api.put(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs`, {
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
        });
        return response.data;
    }

    async atualizarOrdemTransferencia(
        IDPRODUTO,
        QTDEXPEDICAO,
        QTDRECEPCAO,
        QTDDIFERENCA,
        QTDAJUSTE,
        VLRUNITVENDA,
        VLRUNITCUSTO,
        STFALTA,
        STSOBRA,
        IDSTATUSOT,
        IDRESUMOOT
    ) {
        const response = await this.api.put(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs`, {
            IDPRODUTO,
            QTDEXPEDICAO,
            QTDRECEPCAO,
            QTDDIFERENCA,
            QTDAJUSTE,
            VLRUNITVENDA,
            VLRUNITCUSTO,
            STFALTA,
            STSOBRA,
            IDSTATUSOT,
            IDRESUMOOT
        });
        return response.data;
    }

    async atualizarStatusDivergencia(
        IDSTATUSDIVERGENCIA,
        DESCRICAODIVERGENCIA,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/expedicao/status-divergencia.xsjs`, {
            IDSTATUSDIVERGENCIA,
            DESCRICAODIVERGENCIA,
            STATIVO
        });
        return response.data;
    }

    async criarStatusDivergencia(
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/expedicao/status-divergencia.xsjs`, {
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO
        });
        return response.data;
    }


    async consultaNFESaida(
        IDSAPORIGEM
    ) {

        const response = await this.api.post(`${url}/api/service-layer/notas-transferencia/consulta-nfe-saida-tranferencia-varias.xsjs`, [{
            IDSAPORIGEM
        }]);
        return response.data;
    }
}
