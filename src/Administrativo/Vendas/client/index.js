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

    async atualizarVendaPagamento(
        STCANCELADO,
        DTULTIMAALTERACAO,
        IDFUNCIONARIOCANCELA,
        TXTMOTIVOCANCELA,
        IDVENDA
    ) {
        const response = await this.api.put(`http://164.152.245.77:8000/quality/concentrador_node/api/administrativo/altera-venda-pagamento.xsjs`, [{
            STCANCELADO,
            DTULTIMAALTERACAO,
            IDFUNCIONARIOCANCELA,
            TXTMOTIVOCANCELA,
            IDVENDA
        }]);
        return response.data;
    }

    async atualizarVendaRecebimento(
        VRRECDINHEIRO,
        VRRECCONVENIO,
        VRRECCHEQUE,
        VRRECCARTAO,
        VRRECPOS,
        VRRECVOUCHER,
        IDVENDA
    ) {
        const response = await this.api.put(`${url}/api/administrativo/atualiza-recebimento-venda.xsjs`, [{
            VRRECDINHEIRO,
            VRRECCONVENIO,
            VRRECCHEQUE,
            VRRECCARTAO,
            VRRECPOS,
            VRRECVOUCHER,
            IDVENDA
        }]);
        return response.data;
    }

    async atualizarVendaVendedor(
        IDVENDADETALHE,
        IDVENDEDOR
    ) {
        const response = await this.api.put(`${url}/api/administrativo/venda-vendedor.xsjs`, [{
            IDVENDADETALHE,
            IDVENDEDOR
        }]);
        return response.data;
    }

    async atualizarVendaCancelamento(
        IDVENDA,
        IDUSUARIOCANCELAMENTO,
        TXTMOTIVOCANCELAMENTO
    ) {
        const response = await this.api.put(`${url}/api/venda/venda-cancelamento.xsjs`, [{
            IDVENDA,
            IDUSUARIOCANCELAMENTO,
            TXTMOTIVOCANCELAMENTO
        }]);
        return response.data;
    }

    async criarAlterarVendasPagamento(
        IDVENDAPAGAMENTO,
        IDVENDA,
        NITEM,
        TPAG,
        DSTIPOPAGAMENTO,
        VALORRECEBIDO,
        VALORDEDUZIDO,
        VALORLIQUIDO,
        DTPROCESSAMENTO,
        DTVENCIMENTO,
        NPARCELAS,
        NOTEF,
        NOAUTORIZADOR,
        NOCARTAO,
        NUOPERACAO,
        NSUTEF,
        NSUAUTORIZADORA,
        NUAUTORIZACAO,
        STCANCELADO,
        IDFUNCIONARIO
    ) {
        const response = await this.api.post(`${url}/api/venda/venda-cancelamento.xsjs`, [{
            IDVENDAPAGAMENTO,
            IDVENDA,
            NITEM,
            TPAG,
            DSTIPOPAGAMENTO,
            VALORRECEBIDO,
            VALORDEDUZIDO,
            VALORLIQUIDO,
            DTPROCESSAMENTO,
            DTVENCIMENTO,
            NPARCELAS,
            NOTEF,
            NOAUTORIZADOR,
            NOCARTAO,
            NUOPERACAO,
            NSUTEF,
            NSUAUTORIZADORA,
            NUAUTORIZACAO,
            STCANCELADO,
            IDFUNCIONARIO
        }]);
        return response.data;
    }

}
