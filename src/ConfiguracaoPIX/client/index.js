import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class ConfiguracaoPixPDVClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarStatusDivergencia(
        IDPSPPIX,
        IDPSPPIXFATURA,

    ) {
        const response = await this.api.post(`${url}/api/configuracao_pix_pdv.xsjs`, [{
            IDPSPPIX,
            IDPSPPIXFATURA,
        }])
        return response.data;
    }
}
