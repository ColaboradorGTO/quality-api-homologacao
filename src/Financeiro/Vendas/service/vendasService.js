export class VendasServices {
    constructor(client) {
        this.client = client;
    }

    async updateAjusteExtrato(
        DSHISTORIO,
        VRDEBITO,
        VRCREDITO,
        IDOPERADOR,
        DATACADASTRO,
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
            DATACADASTRO,
            STATIVO,
            STCANCELADO,
            IDAJUSTEEXTRATO,
        )
        return result;
    }

}