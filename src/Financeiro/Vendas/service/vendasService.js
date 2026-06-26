export class VendasServices {
    constructor(client) {
        this.client = client;
    }

    async updateVendaPixStatusConferido(
        STCONFERIDO,
        DATA_COMPENSACAO,
        IDVENDA,

    ) {
        if (!STCONFERIDO) {
            throw new Error("STCONFERIDO is required, services");
        }
        if (!DATA_COMPENSACAO) {
            throw new Error("DATA_COMPENSACAO is required, services");
        }
        if (!IDVENDA) {
            throw new Error("IDVENDA is required, services");
        }
        const result = await this.client.atualizarVendaPixStatusConferido(
            STCONFERIDO,
            DATA_COMPENSACAO,
            IDVENDA,
        )
        return result;
    }

}