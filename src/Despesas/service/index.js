export class DespesasLojaServices {
    constructor(client) {
        this.client = client;
    }

    async updateDespesasLoja({ despesas }) {
        if (!Array.isArray(despesas) || despesas.length === 0) {
            throw new Error("Despesas é Obrigatorio.")
        }

        const result = await this.client.atualizarDespesasLoja(despesas);
        return result;
    }

    async createDespesaLoja({
        IDEMPRESA,
        IDUSR,
        DTDESPESA,
        IDCATEGORIARECEITADESPESA,
        DSHISTORIO,
        DSPAGOA,
        IDFUNCIONARIO,
        TPNOTA,
        NUNOTAFISCAL,
        VRDESPESA,
        STATIVO,
        STCANCELADO
    }) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA é Obrigatorio.")
        }

        if (!IDUSR) {
            throw new Error("IDUSR é Obrigatorio.")
        }

        if (!DTDESPESA) {
            throw new Error("DTDESPESA é Obrigatorio.")
        }

        if (!IDCATEGORIARECEITADESPESA) {
            throw new Error("IDCATEGORIARECEITADESPESA é Obrigatorio.")
        }

        if (!DSHISTORIO) {
            throw new Error("DSHISTORIO é Obrigatorio.")
        }

        const result = await this.client.criarDespesaLoja(
            IDEMPRESA,
            IDUSR,
            DTDESPESA,
            IDCATEGORIARECEITADESPESA,
            DSHISTORIO,
            DSPAGOA,
            IDFUNCIONARIO,
            TPNOTA,
            NUNOTAFISCAL,
            VRDESPESA,
            STATIVO,
            STCANCELADO
        );
        return result;
    }
}
