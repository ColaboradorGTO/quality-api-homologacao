export class VendasService {
    constructor(client) {
        this.client = client;
    }

    async createAlterarVendasPrazoExcedido({
        DIASAPOSCOMPRAR,
        IDPRODUTO,
        IDVENDA,
        IDVENDADETALHE,
        MOTIVOEXCECAO,
        QTD,
        TIPOTROCA,
        USERAUTORIZADOR,
        VRPRODUTO,
        VRTOTALLIQUIDO
    }) {
        if (DIASAPOSCOMPRAR === undefined || DIASAPOSCOMPRAR === null) {
            throw new Error('DIASAPOSCOMPRAR é obrigatório.');
        }

        if (!IDPRODUTO) {
            throw new Error('IDPRODUTO é obrigatório.');
        }

        if (!IDVENDA) {
            throw new Error('IDVENDA é obrigatório.');
        }

        if (!IDVENDADETALHE) {
            throw new Error('IDVENDADETALHE é obrigatório.');
        }

        if (!MOTIVOEXCECAO) {
            throw new Error('MOTIVOEXCECAO é obrigatório.');
        }

        if (QTD === undefined || QTD === null) {
            throw new Error('QTD é obrigatório.');
        }

        if (!TIPOTROCA) {
            throw new Error('TIPOTROCA é obrigatório.');
        }

        if (!USERAUTORIZADOR) {
            throw new Error('USERAUTORIZADOR é obrigatório.');
        }

        if (VRPRODUTO === undefined || VRPRODUTO === null) {
            throw new Error('VRPRODUTO é obrigatório.');
        }

        if (VRTOTALLIQUIDO === undefined || VRTOTALLIQUIDO === null) {
            throw new Error('VRTOTALLIQUIDO é obrigatório.');
        }

        const result = await this.client.alterarVendasPrazoExcedido(
            DIASAPOSCOMPRAR,
            IDPRODUTO,
            IDVENDA,
            IDVENDADETALHE,
            MOTIVOEXCECAO,
            QTD,
            TIPOTROCA,
            USERAUTORIZADOR,
            VRPRODUTO,
            VRTOTALLIQUIDO
        );
        return result;
    }
}
