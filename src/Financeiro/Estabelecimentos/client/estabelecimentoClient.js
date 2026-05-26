import axios from 'axios';
import 'dotenv/config';
//const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';

export class NomeClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async nomeClient(
        DADOS
    ) {

        const response = await this.api.post(`rota`, {
            DADOS
        });
        return response.data;
    }

}