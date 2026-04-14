import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;
//const url = 'http://164.152.245.77:8000/quality/concentrador_node';

export class MaloteClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async criarMalotesPorLoja(
        IDEMPRESA,
        DATAMOVIMENTOCAIXA,
        VRDINHEIRO,
        VRCARTAO,
        VRPOS,
        VRPIX,
        VRCONVENIO,
        VRVOUCHER,
        VRFATURA,
        VRFATURAPIX,
        VRDESPESA,
        VRTOTALRECEBIDO,
        VRDISPONIVEL,
        OBSERVACAOLOJA,
        IDUSERCRIACAO,
        IDUSERULTIMAALTERACAO,
        IDUSERENVIO
    ) {
        const response = await this.api.post(`${url}/api/gerencia/malotes-por-loja.xsjs`, {
            IDEMPRESA,
            DATAMOVIMENTOCAIXA,
            VRDINHEIRO,
            VRCARTAO,
            VRPOS,
            VRPIX,
            VRCONVENIO,
            VRVOUCHER,
            VRFATURA,
            VRFATURAPIX,
            VRDESPESA,
            VRTOTALRECEBIDO,
            VRDISPONIVEL,
            OBSERVACAOLOJA,
            IDUSERCRIACAO,
            IDUSERULTIMAALTERACAO,
            IDUSERENVIO
        });
        return response.data;
    }

    async atualizarMalotesPorLoja(
        IDMALOTE,
        IDUSERULTIMAALTERACAO,
        STATUS
    ) {
        const response = await this.api.put(`/api/gerencia/malotes-por-loja.xsjs`, [{
            IDMALOTE,
            IDUSERULTIMAALTERACAO,
            STATUS
        }]);
        return response.data;
    }
}

