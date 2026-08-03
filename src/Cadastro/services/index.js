export class CadastroService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusProdultoAvulso(
        IDDETALHEPRODUTOPEDIDO,
        IDRESPCANCELAMENTO,
        DSMOTIVOCANCELAMENTO,
        DTCANCELAMENTO,
        STCANCELADO
    ) {
        if (!IDDETALHEPRODUTOPEDIDO) {
            throw new Error('ID do detalhe do pedido é obrigatório.');
        }

        if (!IDRESPCANCELAMENTO) {
            throw new Error('ID do responsável pela atualização é obrigatório.');
        }

        const response = await this.client.atualizarStatusProdutoAvulso(
            IDDETALHEPRODUTOPEDIDO,
            IDRESPCANCELAMENTO,
            DSMOTIVOCANCELAMENTO,
            DTCANCELAMENTO,
            STCANCELADO
        );
        return response.data;
    }

}

