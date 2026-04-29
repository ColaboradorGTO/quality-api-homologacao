export class BalancoServices {
    constructor(client) {
        this.client = client;
    }

    async updateColetorBalanco(
        IDRESUMOBALANCO,
        NUMEROCOLETOR
    ) {

        if (!IDRESUMOBALANCO) {
            throw new Error("IDRESUMOBALANCO is required, services")
        }

        const result = await this.client.atualizarColetorBalanco(
            IDRESUMOBALANCO,
            NUMEROCOLETOR
        );

        return result;
    }

    async updateListaDetalhesBalanco(
        IDDETALHEBALANCO,
        TOTALCONTAGEMGERAL
    ) {

        if (!IDDETALHEBALANCO) {
            throw new Error("IDDETALHEBALANCO is required, services")
        }

        const result = await this.client.atualizarListaDetalhesBalanco(
            IDDETALHEBALANCO,
            TOTALCONTAGEMGERAL
        );

        return result;
    }

    async updatePrepararLojaPrimeiroBalanco(
        IDEMPRESA
    ) {

        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services")
        }

        const result = await this.client.atualizarPrepararLojaPrimeiroBalanco(
            IDEMPRESA
        );

        return result;
    }

    async updateConsolidarBalanco(
        IDRESUMOBALANCO,
        IDEMPRESA
    ) {

        if (!IDRESUMOBALANCO) {
            throw new Error("IDRESUMOBALANCO is required, services")
        }
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services")
        }

        const result = await this.client.atualizarConsolidarBalanco(
            IDRESUMOBALANCO,
            IDEMPRESA
        );

        return result;
    }

    async updateConfirmarBalancoConsolidado(
        IDRESUMOBALANCO,
        OBSCONTAGEM,
        OBSDIVERGENCIACONTAGEM,
        OBSDIVERGENCIAGERENTE
    ) {

        const result = await this.client.confirmarConsolidarBalanco(
            IDRESUMOBALANCO,
            OBSCONTAGEM,
            OBSDIVERGENCIACONTAGEM,
            OBSDIVERGENCIAGERENTE
        );

        return result;
    }

    async updateDetalheBalancoAvulso(
        IDEMPRESA,
        NUMEROCOLETOR,
        DSCOLETOR,
        IDPRODUTO,
        CODIGODEBARRAS,
        DSPRODUTO,
        TOTALCONTAGEMGERAL,
        PRECOCUSTO,
        PRECOVENDA,
        STCANCELADO,
        INSBALANCO
    ) {

        const result = await this.client.atualizarDetalheBalancoAvulso(
            IDEMPRESA,
            NUMEROCOLETOR,
            DSCOLETOR,
            IDPRODUTO,
            CODIGODEBARRAS,
            DSPRODUTO,
            TOTALCONTAGEMGERAL,
            PRECOCUSTO,
            PRECOVENDA,
            STCANCELADO,
            INSBALANCO
        );

        return result;
    }

    async createConfirmarBalanco(
        DSRESUMOBALANCO,
        DTABERTURA,
        DTFECHAMENTO,
        IDEMPRESA,
        INSBALANCO,
        QTDTOTALFALTA,
        QTDTOTALITENS,
        QTDTOTALSOBRA,
        STATIVO,
        TXTOBSERVACAO,
        det
    ) {
        const result = await this.client.criarConfirmarBalanco(
            DSRESUMOBALANCO,
            DTABERTURA,
            DTFECHAMENTO,
            IDEMPRESA,
            INSBALANCO,
            QTDTOTALFALTA,
            QTDTOTALITENS,
            QTDTOTALSOBRA,
            STATIVO,
            TXTOBSERVACAO,
            det
        );
        return result;
    }

    async createDetalheBalancoAvulso(
        INSBALANCO,
        IDEMPRESA,
        NUMEROCOLETOR,
        DSCOLETOR,
        IDPRODUTO,
        DSPRODUTO,
        CODIGODEBARRAS,
        PRECOCUSTO,
        TOTALCONTAGEMGERAL,
        PRECOVENDA,
    ) {
        const result = await this.client.criarDetalheBalancoAvulso(
            INSBALANCO,
            IDEMPRESA,
            NUMEROCOLETOR,
            DSCOLETOR,
            IDPRODUTO,
            DSPRODUTO,
            CODIGODEBARRAS,
            PRECOCUSTO,
            TOTALCONTAGEMGERAL,
            PRECOVENDA,
        );
        return result;
    }

    async createOrUpdateResumoBalanco(
        INSBALANCO,
        IDEMPRESA,
        DSRESUMOBALANCO,
        DTABERTURA,
        DTFECHAMENTO,
        QTDTOTALITENS,
        QTDTOTALSOBRA,
        QTDTOTALFALTA,
        TXTOBSERVACAO,
        STATIVO,
        det
    ) {
        const result = await this.client.criarOrUpdateResumoBalanco(
            INSBALANCO,
            IDEMPRESA,
            DSRESUMOBALANCO,
            DTABERTURA,
            DTFECHAMENTO,
            QTDTOTALITENS,
            QTDTOTALSOBRA,
            QTDTOTALFALTA,
            TXTOBSERVACAO,
            STATIVO,
            det
        );
        return result;
    }

    async updateConfirmarPrestacaoContas(
        IDRESUMOBALANCO
    ) {
        const result = await this.client.atualizarConfirmarPrestacaoContas(
            IDRESUMOBALANCO
        );
        return result;
    }

}