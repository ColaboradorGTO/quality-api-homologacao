import axios from 'axios';
import 'dotenv/config';

const url = 'http://164.152.245.77:8000/quality/concentrador_node';
//const url = process.env.API_URL;

export class NomeClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async criarNomeClient(
        DADOS
    ) {

        const response = await this.api.get(`rota`, {
            DADOS
        });
        return response.data;
    }

}