import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class CategoriaReceitaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async nomeClient(
        DADOS,

    ) {
        const response = await this.api.put(`${url}rota-api`, [{
            
            DADOS,
        }])
        return response.data;
    }
}