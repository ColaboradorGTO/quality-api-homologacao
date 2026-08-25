import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class DespesasLojaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarDespesasLoja(despesas) {
        const response = await this.api.post(`${url}/api/despesa-loja/todos.xsjs`, despesas);
        return response.data;
    }

    async criarDespesaLoja(
        IDEMPRESA,
        IDUSR,
        DTDESPESA,
        IDCATEGORIARECEITADESPESA,
        DSHISTORIO,
        DSPAGOA,
        IDFUNCIONARIO,
        TPNOTA,
        NUNOTAFISCAL,
        VRDESPESA,
        STATIVO,
        STCANCELADO
    ) {
        const response = await this.api.post(`${url}/api/despesa-loja/todos.xsjs`, [{
            IDEMPRESA,
            IDUSR,
            DTDESPESA,
            IDCATEGORIARECEITADESPESA,
            DSHISTORIO,
            DSPAGOA,
            IDFUNCIONARIO,
            TPNOTA,
            NUNOTAFISCAL,
            VRDESPESA,
            STATIVO,
            STCANCELADO
        }]);
        return response.data;
    }
}
