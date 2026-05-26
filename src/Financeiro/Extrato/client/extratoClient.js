import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;
//const url = 'http://164.152.245.77:8000/quality/concentrador_node';

export class ExtratoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarAjusteExtrato(
        IDEMPRESA,
        HISTORICO,
        VRDEBITO,
        VRCREDITO,
        STATIVO,
        STCANCELADO,
        IDOPERADOR,
        DATACADASTRO
    ) {
        const response = await this.api.post(`${url}/api/financeiro/ajuste-extrato.xsjs`, [{
            IDEMPRESA,
            HISTORICO,
            VRDEBITO,
            VRCREDITO,
            STATIVO,
            STCANCELADO,
            IDOPERADOR,
            DATACADASTRO
        }]);
        return response.data;
    }

    async atualizarAjusteExtrato(
        DSHISTORIO,
        VRDEBITO,
        VRCREDITO,
        IDOPERADOR,
        DATACADASTRO,
        STATIVO,
        STCANCELADO,
        IDAJUSTEEXTRATO,

    ) {
        const response = await this.api.put(`${url}/api/financeiro/ajuste-extrato.xsjs`, [{
            DSHISTORIO,
            VRDEBITO,
            VRCREDITO,
            IDOPERADOR,
            DATACADASTRO,
            STATIVO,
            STCANCELADO,
            IDAJUSTEEXTRATO,
        }]);
        return response.data;
    }
}

