import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class VendasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarVendaPixStatusConferido(
        STCONFERIDO,
        DATA_COMPENSACAO,
        IDVENDA,

    ) {

        const response = await this.api.put(`${url}/api/financeiro/venda-pix-periodo-status-conferido.xsjs`, [{
            STCONFERIDO,
            DATA_COMPENSACAO,
            IDVENDA,
        }]);
        return response.data;
    }
}

