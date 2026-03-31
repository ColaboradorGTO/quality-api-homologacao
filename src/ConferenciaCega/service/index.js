export class CoferenciaCegaServices {
    constructor(client) {
        this.client = client;
    }

    async updateOT({
        IDRESUMOOT,
        IDPRODUTO,
        IDEMPRESAORIGEM,
        IDEMPRESADESTINO,
        IDOPERADOREXPEDICAO,
        NUTOTALITENS,
        QTDTOTALITENS,
        QTDTOTALITENSRECEPCIONADO,
        QTDTOTALITENSDIVERGENCIA,
        NUTOTALVOLUMES,
        TPVOLUME,
        VRTOTALCUSTO,
        VRTOTALVENDA,
        DTRECEPCAO,
        IDOPERADORRECEPTOR,
        DSOBSERVACAO,
        IDUSRCANCELAMENTO,
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        STEMISSAONFE,
        NUMERONFE,
        STENTRADAINVENTARIO,
        QTDCONFERENCIA,
        IDSTATUSOT,
        IDUSRAJUSTE,
        DTAJUSTE,
        QTDTOTALITENSAJUSTE,
        dadosdetalheot

    }) {
        if (!IDRESUMOOT) {
            throw new Error("ID da Ordem de Transferência é Obrigatorio.")
        }

        const result = await this.client.atualizarOT(
            IDRESUMOOT,
            IDPRODUTO,
            IDEMPRESAORIGEM,
            IDEMPRESADESTINO,
            IDOPERADOREXPEDICAO,
            NUTOTALITENS,
            QTDTOTALITENS,
            QTDTOTALITENSRECEPCIONADO,
            QTDTOTALITENSDIVERGENCIA,
            NUTOTALVOLUMES,
            TPVOLUME,
            VRTOTALCUSTO,
            VRTOTALVENDA,
            DTRECEPCAO,
            IDOPERADORRECEPTOR,
            DSOBSERVACAO,
            IDUSRCANCELAMENTO,
            IDSTDIVERGENCIA,
            OBSDIVERGENCIA,
            STEMISSAONFE,
            NUMERONFE,
            STENTRADAINVENTARIO,
            QTDCONFERENCIA,
            IDSTATUSOT,
            IDUSRAJUSTE,
            DTAJUSTE,
            QTDTOTALITENSAJUSTE,
            dadosdetalheot
        );
        return result;
    }

    async updateStatusDivergencia({
        DESCRICAODIVERGENCIA,
        STATIVO,
        IDSTATUSDIVERGENCIA,

    }) {
        if (!IDSTATUSDIVERGENCIA) {
            throw new Error("IDSTATUSDIVERGENCIA é Obrigatorio.")
        }

        if (!STATIVO) {
            throw new Error("STATIVO é Obrigatorio.")
        }

        if (!IDSTATUSDIVERGENCIA) {
            throw new Error("IDSTATUSDIVERGENCIA é Obrigatorio.")
        }


        const result = await this.client.atualizarStatusDivergencia(
            DESCRICAODIVERGENCIA,
            STATIVO,
            IDSTATUSDIVERGENCIA,
        );
        return result;
    }

    async createStatusDivergencia({
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO,

    }) {
        if (!DESCRICAODIVERGENCIA) {
            throw new Error("DESCRICAODIVERGENCIA é Obrigatorio.")
        }

        if (!IDUSRCRIACAO) {
            throw new Error("IDUSRCRIACAO é Obrigatorio.")
        }

        if (!STATIVO) {
            throw new Error("STATIVO é Obrigatorio.")
        }


        const result = await this.client.criarStatusDivergencia(
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO,
        );
        return result;
    }

}