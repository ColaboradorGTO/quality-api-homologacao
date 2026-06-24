import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class AdiantamentoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarAdiantamentoStatus(
        STATIVO,
        IDADIANTAMENTOSALARIO

    ) {

        const response = await this.api.put(`${url}/api/financeiro/atualizacao-adiantamento-status.xsjs`, {
            STATIVO,
            IDADIANTAMENTOSALARIO
        })
        return response.data;
    }

    async atualizarAdiantamentoSalarial(
        IDEMPRESA,
        IDFUNCIONARIO,
        TXTMOTIVO,
        VRVALORDESCONTO,
        DTLANCAMENTO,
        STATIVO,
        IDUSR,
        IDADIANTAMENTOSALARIO

    ) {

        const response = await this.api.put(`${url}/api/adiantamento-salarial.xsjs`, [{
            IDEMPRESA,
            IDFUNCIONARIO,
            TXTMOTIVO,
            VRVALORDESCONTO,
            DTLANCAMENTO,
            STATIVO,
            IDUSR,
            IDADIANTAMENTOSALARIO
        }])
        return response.data;
    }

    async criarAdiantamentoSalarial(
        IDEMPRESA,
        IDFUNCIONARIO,
        TXTMOTIVO,
        VRVALORDESCONTO,
        DTLANCAMENTO,
        STATIVO,
        IDUSR

    ) {

        const response = await this.api.post(`${url}/api/adiantamento-salarial.xsjs`, [{
            IDEMPRESA,
            IDFUNCIONARIO,
            TXTMOTIVO,
            VRVALORDESCONTO,
            DTLANCAMENTO,
            STATIVO,
            IDUSR
        }]
        )
        return response.data;
    }
}

