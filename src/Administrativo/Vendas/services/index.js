export class VendasServices {
    constructor(client) {
        this.client = client;
    }

    async updateVendaPagamento(
        STCANCELADO,
        DTULTIMAALTERACAO,
        IDFUNCIONARIOCANCELA,
        TXTMOTIVOCANCELA,
        IDVENDA
    ) {
        if (!IDVENDA) {
            throw new Error('ID da venda é obrigatório.');
        }

        const result = await this.client.atualizarVendaPagamento(
            STCANCELADO,
            DTULTIMAALTERACAO,
            IDFUNCIONARIOCANCELA,
            TXTMOTIVOCANCELA,
            IDVENDA
        );

        return result;
    }


    async updateVendaRecebimento(
        VRRECDINHEIRO,
        VRRECCONVENIO,
        VRRECCHEQUE,
        VRRECCARTAO,
        VRRECPOS,
        VRRECVOUCHER,
        IDVENDA
    ) {
        if (!IDVENDA) {
            throw new Error('ID da venda é obrigatório.');
        }

        const result = await this.client.atualizarVendaRecebimento(
            VRRECDINHEIRO,
            VRRECCONVENIO,
            VRRECCHEQUE,
            VRRECCARTAO,
            VRRECPOS,
            VRRECVOUCHER,
            IDVENDA
        );

        return result;
    }

    async updateVendaVendedor(
        IDVENDADETALHE,
        IDVENDEDOR
    ) {

        const result = await this.client.atualizarVendaVendedor(
            IDVENDADETALHE,
            IDVENDEDOR
        );

        return result;
    }

    async createAlterarVendasPagamento(

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

        const result = await this.client.criarAlterarVendasPagamento(

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
        );

        return result;
    }
}


