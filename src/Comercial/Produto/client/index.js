import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class ProdutosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarFuncionarioLoja(
        ID,
        IDFUNCIONARIO,
        IDEMPRESA,
        IDSUBGRUPOEMPRESARIAL,
        IDFUNCIONARIOULTALTERACAO,
        NOLOGIN,
        PWSENHA

    ) {

        const response = await this.api.put(`${url}/api/comercial/funcionario-loja.xsjs`, [{
            ID,
            IDFUNCIONARIO,
            IDEMPRESA,
            IDSUBGRUPOEMPRESARIAL,
            IDFUNCIONARIOULTALTERACAO,
            NOLOGIN,
            PWSENHA
        }])
        return response.data;
    }
}