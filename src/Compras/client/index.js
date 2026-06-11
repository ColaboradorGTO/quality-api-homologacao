import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ComprasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO) {
        
        const response = await this.api.put(`${url}/api/compras/atualizacao-status-pedido.xsjs`, {
            IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO
        });
        return response.data;
    }
}