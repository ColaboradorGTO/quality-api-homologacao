export class FaturaService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusFatura(
        STCONFERIDO,
        DATA_COMPENSACAO,
        IDDETALHEFATURA
    ) {
        if (!STCONFERIDO) {
            throw new Error("STCONFERIDO is required, services");
        }

        if (!DATA_COMPENSACAO) {
            throw new Error("DATA_COMPENSACAO is required, services");
        }


        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }

        const result = await this.client.atualizarStatusFatura(
            STCONFERIDO,
            DATA_COMPENSACAO,
            IDDETALHEFATURA
        )
        return result;
    }


    async updateListaRecompra(
        IDDETALHEFATURA,
        STRECOMPRA
    ) {
        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }

        if (!STRECOMPRA) {
            throw new Error("STRECOMPRA is required, services");
        }
        const result = await this.client.atualizarListaRecompra(
            IDDETALHEFATURA,
            STRECOMPRA
        )
        return result;
    }

    async updateListaFatura(
        IDDETALHEFATURA,
        NUCODAUTORIZACAO,
        VRRECEBIDO
    ) {
        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }

        if (!NUCODAUTORIZACAO) {
            throw new Error("NUCODAUTORIZACAO is required, services");
        }
        if (!VRRECEBIDO) {
            throw new Error("VRRECEBIDO is required, services");
        }

        const result = await this.client.atualizarListaFatura(
            IDDETALHEFATURA,
            NUCODAUTORIZACAO,
            VRRECEBIDO
        )
        return result;
    }

    async updateFaturaFinanceiro(
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA
    ) {

        const result = await this.client.atualizarFaturaFinanceiro(
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            STCANCELADO,
            STPIX,
            NUAUTORIZACAO,
            IDDETALHEFATURA
        )
        return result;
    }



    async updateFaturaFinanceiro(
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA
    ) {
        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }

        if (!NUCODAUTORIZACAO) {
            throw new Error("NUCODAUTORIZACAO is required, services");
        }
        if (!VRRECEBIDO) {
            throw new Error("VRRECEBIDO is required, services");
        }

        const result = await this.client.atualizarFaturaFinanceiro(
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            STCANCELADO,
            STPIX,
            NUAUTORIZACAO,
            IDDETALHEFATURA
        )
        return result;
    }

    async updateConsolidacaoFatura(
        IDFUNCIONARIO,
        STCANCELADO,
        TXTMOTIVOCANCELAMENTO,
        IDCONSOLIDACAOFATURA

    ) {
        if (!IDCONSOLIDACAOFATURA) {
            throw new Error("IDCONSOLIDACAOFATURA is required, services");
        }

        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }

        const result = await this.client.atualizarConsolidacaoFatura(
            IDFUNCIONARIO,
            STCANCELADO,
            TXTMOTIVOCANCELAMENTO,
            IDCONSOLIDACAOFATURA
        )
        return result;
    }

    async createConsolidacaoFatura(
        IDEMPRESA,
        DTPROCESSAMENTO,
        QTDTOTALFATURAS,
        VRTOTALRECEBIDO,
        IDFUNCIONARIO
    ) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }

        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }

        const result = await this.client.criarConsolidacaoFatura(
            IDEMPRESA,
            DTPROCESSAMENTO,
            QTDTOTALFATURAS,
            VRTOTALRECEBIDO,
            IDFUNCIONARIO
        )
        return result;
    }

    async createConsolidacaoFaturaSAP(
        IDS_CONSOLIDACOES,
        IDFUNCIONARIO
    ) {
        if (!IDS_CONSOLIDACOES) {
            throw new Error("IDS_CONSOLIDACOES is required, services");
        }

        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }

        const result = await this.client.criarConsolidacaoFaturaSAP(
            IDS_CONSOLIDACOES,
            IDFUNCIONARIO
        )
        return result;
    }
}    