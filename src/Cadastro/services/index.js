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
  
    async updateDesvincularNFPedido(
        IDRESUMOPEDIDO,
        IDRESUMOENTRADA,
        STATIVO
    ) {
        if (!IDRESUMOPEDIDO) {
            throw new Error('ID do Resumo do pedido é obrigatório.');
        }


        const response = await this.client.atualizarDesvincularNFPedido(
            IDRESUMOPEDIDO,
            IDRESUMOENTRADA,
            STATIVO
        );
        return response.data;
    }

    async createVinculoNFPedido(
        IDRESUMOPEDIDO,
        IDRESUMOENTRADA,
        STATIVO
    ) {
        if (!IDRESUMOPEDIDO) {
            throw new Error('ID do Resumo do pedido é obrigatório.');
        }


        const response = await this.client.criarVinculoNFPedido(
            IDRESUMOPEDIDO,
            IDRESUMOENTRADA,
            STATIVO
        );
        return response.data;
    }

}

