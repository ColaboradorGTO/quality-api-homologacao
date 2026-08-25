export class OTService {
    constructor(client) {
        this.client = client;
    }

    async createOT({
        IDRESUMOOT,
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
        CONFEREITENS,
        IDROTINA,
        DATAENTREGA,
        dadosdetalheot,
    }) {

        if (!IDEMPRESAORIGEM) {
            throw new Error("IDEMPRESAORIGEM é Obrigatorio.")
        }

        if (!IDEMPRESADESTINO) {
            throw new Error("IDEMPRESADESTINO é Obrigatorio.")
        }

        const result = await this.client.criarOT(
            IDRESUMOOT,
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
            CONFEREITENS,
            IDROTINA,
            DATAENTREGA,
            dadosdetalheot,
        )
        return result;
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

    async updateOrdemTransferencia({
        IDPRODUTO,
        QTDEXPEDICAO,
        QTDRECEPCAO,
        QTDDIFERENCA,
        QTDAJUSTE,
        VLRUNITVENDA,
        VLRUNITCUSTO,
        STFALTA,
        STSOBRA,
        IDSTATUSOT,
        IDRESUMOOT
    }) {
        if (!IDPRODUTO) {
            throw new Error("IDPRODUTO é Obrigatorio.")
        }

        if (!IDRESUMOOT) {
            throw new Error("IDRESUMOOT é Obrigatorio.")
        }

        return this.client.atualizarOrdemTransferencia(
            IDPRODUTO,
            QTDEXPEDICAO,
            QTDRECEPCAO,
            QTDDIFERENCA,
            QTDAJUSTE,
            VLRUNITVENDA,
            VLRUNITCUSTO,
            STFALTA,
            STSOBRA,
            IDSTATUSOT,
            IDRESUMOOT
        );
    }

    async updateStatusDivergencia({
        IDSTATUSDIVERGENCIA,
        DESCRICAODIVERGENCIA,
        STATIVO
    }) {
        if (!IDSTATUSDIVERGENCIA) {
            throw new Error("IDSTATUSDIVERGENCIA é Obrigatorio.")
        }

        return this.client.atualizarStatusDivergencia(
            IDSTATUSDIVERGENCIA,
            DESCRICAODIVERGENCIA,
            STATIVO
        );
    }

    async createStatusDivergencia({
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO
    }) {
        if (!DESCRICAODIVERGENCIA) {
            throw new Error("DESCRICAODIVERGENCIA é Obrigatorio.")
        }

        if (!IDUSRCRIACAO) {
            throw new Error("IDUSRCRIACAO é Obrigatorio.")
        }

        return this.client.criarStatusDivergencia(
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO
        );
    }

    async consultaNFESaidaService({
        IDSAPORIGEM

    }) {
        if (!IDSAPORIGEM) {
            throw new Error("ID SAP Origem é Obrigatorio.")
        }

        const result = await this.client.consultaNFESaida(
            IDSAPORIGEM
        );
        return result;
    }

}
