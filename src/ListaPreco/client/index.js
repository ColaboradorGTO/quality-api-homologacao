import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ListaPrecoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarListaPreco(
        IDRESUMOLISTAPRECO, 
        IDUSERALTERACAO,
        IDUSERCRIACAO,
        NOMELISTA,
        STATIVO,
        lojas
    ) {
        const response = await this.api.put(`/api/listas-de-precos.xsjs`, [{
            IDRESUMOLISTAPRECO, 
            IDUSERALTERACAO,
            IDUSERCRIACAO,
            NOMELISTA,
            STATIVO,
            lojas
        }]);
        return response.data;
    }
 
    async criarListaPreco(
        IDRESUMOLISTAPRECO, 
        IDUSERALTERACAO,
        IDUSERCRIACAO,
        NOMELISTA,
        STATIVO,
        lojas
    ) {
        const response = await this.api.post(`/api/listas-de-precos.xsjs`, [{
            IDRESUMOLISTAPRECO, 
            IDUSERALTERACAO,
            IDUSERCRIACAO,
            NOMELISTA,
            STATIVO,
            lojas
        }]);
        return response.data;
    }
}

