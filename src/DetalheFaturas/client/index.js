import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class DetalheFaturasClient {
    constructor(baseURL) {
        this.api = axios.create({ baseURL: baseURL || url, timeout: 80000 });
    }

    async atualizarFatura(faturas) {
        const response = await this.api.put(`${url}/api/financeiro/atualizar-fatura.xsjs`, faturas);
        return response.data;
    }

    async criarDetalheFatura(
        IDEMPRESA, IDFUNCIONARIO, IDDETALHEFATURALOCAL, IDCAIXAWEB, IDCAIXALOCAL,
        NUESTABELECIMENTO, NUCARTAO, DTPROCESSAMENTO, HRPROCESSAMENTO, NUNSU,
        NUNSUHOST, IDMOVIMENTOCAIXAWEB, NUCODAUTORIZACAO, VRRECEBIDO,
        DTHRMIGRACAO, STCANCELADO, IDUSRCACELAMENTO
    ) {
        const response = await this.api.post(`${url}/api/detalhe-fatura.xsjs`, [{
            IDEMPRESA, IDFUNCIONARIO, IDDETALHEFATURALOCAL, IDCAIXAWEB, IDCAIXALOCAL,
            NUESTABELECIMENTO, NUCARTAO, DTPROCESSAMENTO, HRPROCESSAMENTO, NUNSU,
            NUNSUHOST, IDMOVIMENTOCAIXAWEB, NUCODAUTORIZACAO, VRRECEBIDO,
            DTHRMIGRACAO, STCANCELADO, IDUSRCACELAMENTO
        }]);
        return response.data;
    }

    async atualizarDetalheFatura(
        IDDETALHEFATURA, TXTMOTIVOCANCELAMENTO, STCANCELADO, IDUSRCACELAMENTO
    ) {
        const response = await this.api.put(`${url}/api/fatura-loja/detalhe-fatura.xsjs`, {
            IDDETALHEFATURA, TXTMOTIVOCANCELAMENTO, STCANCELADO, IDUSRCACELAMENTO
        });
        return response.data;
    }
}
