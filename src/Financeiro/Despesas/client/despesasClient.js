import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class DespesasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarDespesas(
        IDCATEGORIARECEITADESPESA,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO,
        IDDESPESASLOJA

    ) {

        const response = await this.api.put(`${url}/api/despesa-loja/editar-despesa.xsjs`, {
            IDCATEGORIARECEITADESPESA,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO,
            IDDESPESASLOJA

        });
        return response.data;
    }

    async atualizarStatusDespesasLoja(
        STCANCELADO,
        IDDESPESASLOJA
    ) {
        const response = await this.api.put(`${url}/api/despesa-loja/atualizacao-status.xsjs`, {
            STCANCELADO,
            IDDESPESASLOJA

        });
        return response.data;
    }
}