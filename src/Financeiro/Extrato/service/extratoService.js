export class ExtratoService {
    constructor(client) {
        this.client = client;
    }

    async createAjusteExtrato(
        IDEMPRESA,
        HISTORICO,
        VRDEBITO,
        VRCREDITO,
        STATIVO,
        STCANCELADO,
        IDOPERADOR,
        DATACADASTRO
    ) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }
        if (!IDOPERADOR) {
            throw new Error("IDOPERADOR is required, services");
        }
        const result = await this.client.criarAjusteExtrato(
            IDEMPRESA,
            HISTORICO,
            VRDEBITO,
            VRCREDITO,
            STATIVO,
            STCANCELADO,
            IDOPERADOR,
            DATACADASTRO
        )
        return result;
    }

    async updateAjusteExtrato(
        DSHISTORIO,
        VRDEBITO,
        VRCREDITO,
        IDOPERADOR,
        STATIVO,
        STCANCELADO,
        IDAJUSTEEXTRATO,
    ) {
        if (!IDAJUSTEEXTRATO) {
            throw new Error("IDAJUSTEEXTRATO is required, services");
        }
        if (!IDOPERADOR) {
            throw new Error("IDOPERADOR is required, services");
        }
        const result = await this.client.atualizarAjusteExtrato(
            DSHISTORIO,
            VRDEBITO,
            VRCREDITO,
            IDOPERADOR,
            STATIVO,
            STCANCELADO,
            IDAJUSTEEXTRATO,
        )
        return result;
    }

}