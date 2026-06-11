export class ComprasService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

        if(!IDRESPCANCELAMENTO) {
            throw new Error('ID do responsável pelo cancelamento é obrigatório.');
        }

        const response = await this.client.atualizarStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO);
        return response.data;
    }

    async updateDetalhePedido(  
        idDetPedido,
        IDCOR,
        IDSUBGRUPOESTRUTURA,
        IDCATEGORIAPEDIDO,
        IDTIPOTECIDO,
        IDESTILO,
        IDFABRICANTE,
        IDLOCALEXPOSICAO,
        NUREF,
        DSPRODUTO,
        QTDTOTAL,
        NUCAIXA,
        UND,
        VRUNITBRUTO,
        DESC01,
        DESC02,
        DESC03,
        VRUNITLIQUIDO,
        VRVENDA,
        VRTOTAL,
        STECOMMERCE,
        STREDESOCIAL,
        VRCUSTOPRODATUAL,
        VRVENDAPRODATUAL,
        OBSPRODUTO,
        IDCATEGORIAS,
        STREPOSICAO,
        NUCODBARRAS,
        IDPRODUTO,
        IDRESPATUALIZACAO,
        GRADE,
        STPEDIDOPORINTEMEDIARIO    
    ) {
        if(!idDetPedido) {
            throw new Error('ID do detalhe do pedido é obrigatório.');
        }

        if(!IDRESPATUALIZACAO) {
            throw new Error('ID do responsável pela atualização é obrigatório.');
        }

        const response = await this.client.atualizarDetalhePedido(
            idDetPedido,
            IDCOR,
            IDSUBGRUPOESTRUTURA,
            IDCATEGORIAPEDIDO,
            IDTIPOTECIDO,
            IDESTILO,
            IDFABRICANTE,
            IDLOCALEXPOSICAO,
            NUREF,
            DSPRODUTO,
            QTDTOTAL,
            NUCAIXA,
            UND,
            VRUNITBRUTO,
            DESC01,
            DESC02,
            DESC03,
            VRUNITLIQUIDO,
            VRVENDA,
            VRTOTAL,
            STECOMMERCE,
            STREDESOCIAL,
            VRCUSTOPRODATUAL,
            VRVENDAPRODATUAL,
            OBSPRODUTO,
            IDCATEGORIAS,
            STREPOSICAO,
            NUCODBARRAS,
            IDPRODUTO,
            IDRESPATUALIZACAO,
            GRADE,
            STPEDIDOPORINTEMEDIARIO
        );
        return response.data;
    }
}