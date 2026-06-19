import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class QuebraCaixaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarStatusQuebraCaixa(
        STATIVO,
        IDQUEBRACAIXA
    ) {

        const response = await this.api.put(`${url}/api/dashboard/quebra-caixa/atualizacao-status.xsjs`, {
            STATIVO,
            IDQUEBRACAIXA
        })
        return response.data;
    }

    async atualizarQuebraCaixa(
        IDCAIXAWEB,
        IDMOVIMENTOCAIXA,
        IDGERENTE,
        IDFUNCIONARIO,
        DTLANCAMENTO,
        VRQUEBRASISTEMA,
        VRQUEBRAEFETIVADO,
        TXTHISTORICO,
        STATIVO,
        IDQUEBRACAIXA
    ) {

        const response = await this.api.put(`${url}/api/dashboard/quebra-caixa/todos.xsjs`, [{
            IDCAIXAWEB,
            IDMOVIMENTOCAIXA,
            IDGERENTE,
            IDFUNCIONARIO,
            DTLANCAMENTO,
            VRQUEBRASISTEMA,
            VRQUEBRAEFETIVADO,
            TXTHISTORICO,
            STATIVO,
            IDQUEBRACAIXA
        }])
        return response.data;
    }

    async atualizarConferirQuebraCaixa(
        IDFUNCIONARIO,
        STCONFERIDO,
        IDQUEBRACAIXA
    ) {

        const response = await this.api.put(`${url}/api/financeiro/quebra-caixa-conferencia.xsjs`, [{
            IDFUNCIONARIO,
            STCONFERIDO,
            IDQUEBRACAIXA
        }])
        return response.data;
    }

    async criarQuebraCaixa(
        IDCAIXAWEB,
        IDMOVIMENTOCAIXA,
        IDGERENTE,
        IDFUNCIONARIO,
        DTLANCAMENTO,
        VRQUEBRASISTEMA,
        VRQUEBRAEFETIVADO,
        TXTHISTORICO,
        STATIVO
    ) {

        const response = await this.api.post(`${url}/api/dashboard/quebra-caixa/todos.xsjs`, [{
            IDCAIXAWEB,
            IDMOVIMENTOCAIXA,
            IDGERENTE,
            IDFUNCIONARIO,
            DTLANCAMENTO,
            VRQUEBRASISTEMA,
            VRQUEBRAEFETIVADO,
            TXTHISTORICO,
            STATIVO
        }])
        return response.data;
    }

}


