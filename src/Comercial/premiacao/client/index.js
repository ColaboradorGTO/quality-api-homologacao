import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class PremiacaoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarCadastroPremiacoes(
        DTPREMIOINICIO,
        DTPREMIOFIM,
        IDSUBGRUPOEMPRESARIAL,
        NOFUNCAO,
        NOINDICADOR,
        TPAPURACAO,
        VRBONUSSENIOR,
        VRBONUSPLENO,
        VRBONUSJUNIOR,
        VRBONUSTODOS,
        STATIVO

    ) {

        const response = await this.api.post(`${url}/api/comercial/cadastrar-premiacoes.xsjs`, [{
            DTPREMIOINICIO,
            DTPREMIOFIM,
            IDSUBGRUPOEMPRESARIAL,
            NOFUNCAO,
            NOINDICADOR,
            TPAPURACAO,
            VRBONUSSENIOR,
            VRBONUSPLENO,
            VRBONUSJUNIOR,
            VRBONUSTODOS,
            STATIVO
        }])
        return response.data;
    }
}