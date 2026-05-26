import axios from 'axios';
import 'dotenv/config';
const url = 'http://164.152.245.77:8000/quality/concentrador_node';
//const url = process.env.API_URL;
//let url = `http://164.152.245.77:8000/quality/concentrador_homologacao`;

export class AdiantamentosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarAdiantamentoStatus(
        IDADIANTAMENTOSALARIO,
        STATIVO
    ) {

        const response = await this.api.put(`/api/financeiro/atualizacao-adiantamento-status.xsjs`, {
            IDADIANTAMENTOSALARIO,
            STATIVO
        });
        return response.data;
    }

    async atualizarFecharCaixaZerado(
        ID
    ) {
        const response = await this.api.put(`/api/financeiro/fecha-caixas-zerados.xsjs`, {
            ID
        });
        return response.data;
    }


}

