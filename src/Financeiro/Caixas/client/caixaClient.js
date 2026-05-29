import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class CaixaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
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