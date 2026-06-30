export class DespesasServices {
    constructor(client) {
        this.client = client;
    }

    async updateDespesasLoja(
        IDCATEGORIARECEITADESPESA,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO,
        IDDESPESASLOJA

    ) {

        if (!IDDESPESASLOJA) {
            throw new Error("IDDESPESASLOJA is required, services");
        }

        if (!IDCATEGORIARECEITADESPESA) {
            throw new Error("IDCATEGORIARECEITADESPESA is required, services");
        }

        const result = await this.client.atualizarDespesas(
            IDCATEGORIARECEITADESPESA,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO,
            IDDESPESASLOJA

        )
        return result;
    }

    async updateStatusDespesasLoja(
        STCANCELADO,
        IDDESPESASLOJA

    ) {

        if (!STCANCELADO) {
            throw new Error("STCANCELADO is required, services");
        }
        if (!IDDESPESASLOJA) {
            throw new Error("IDDESPESASLOJA is required, services");
        }

        const result = await this.client.atualizarStatusDespesasLoja(
            STCANCELADO,
            IDDESPESASLOJA
        )
        return result;
    }

    async createIntegracaoDespesa(
        IDDESPESASLOJA,
        IDFUNCIONARIO

    ) {

        if (!IDDESPESASLOJA) {
            throw new Error("IDDESPESASLOJA is required, services");
        }
        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }

        const result = await this.client.criarIntegracaoDespesa(
            IDDESPESASLOJA,
            IDFUNCIONARIO
        )
        return result;
    }
}