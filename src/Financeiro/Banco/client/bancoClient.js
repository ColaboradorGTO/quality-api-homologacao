import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;


export class BancoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarContaBanco(
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        TPCONTA,
        NUCONTASAP
    ) {
        const response = await this.api.post(`${url}/api/financeiro/conta-banco.xsjs`, [{
            IDBANCO,
            DSCONTABANCO,
            NUAGENCIA,
            NUDIGITOAGENCIA,
            NUCONTA,
            NUDIGITOCONTA,
            TPPESSOA,
            TPCONTA,
            NUCONTASAP
        }]);
        return response.data;
    }

    async atualizarContaBanco(
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        STPADRAO,
        STATIVO,
        NUCONTASAP,
        TPCONTA
    ) {
        const response = await this.api.put(`${url}/api/financeiro/conta-banco.xsjs`, [{
            IDCONTABANCO,
            IDBANCO,
            DSCONTABANCO,
            NUAGENCIA,
            NUDIGITOAGENCIA,
            NUCONTA,
            NUDIGITOCONTA,
            TPPESSOA,
            STPADRAO,
            STATIVO,
            NUCONTASAP,
            TPCONTA
        }]);
        return response.data;
    }

}



