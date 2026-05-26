/* import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class DepositoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url
        });
    }
    async cancelarDeposito(IDDEPOSITOLOJA) {
        
        const response = await this.api.put('/api/financeiro/atualizar-deposito-loja.xsjs', IDDEPOSITOLOJA);
        return response.data;
    }
} */

import axios from 'axios';
import 'dotenv/config';
//const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';
export class DepositoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url
        });
    }
    async updateDepositoLoja(IDDEPOSITOLOJA) {

        const response = await this.api.put('/api/financeiro/atualizar-deposito-loja.xsjs', {
            IDDEPOSITOLOJA
        }
        );

        return response.data;
    }
}