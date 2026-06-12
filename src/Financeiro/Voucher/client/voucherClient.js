import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

export class VoucherClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async nomeClient(
        DADO,
    ) {
        const response = await this.api.post(`rota-da-api`, {
            DADO,
        });
        return response.data;
    }
}
