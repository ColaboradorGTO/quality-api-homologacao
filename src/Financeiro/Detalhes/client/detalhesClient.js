import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class DetalhesClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async nomeClient(
        ID
    ) {
        const response = await this.api.put(`rota-da-api`, {
            ID
        });
        return response.data;
    }

}