export class NomeServices {
    constructor(client) {
        this.client = client;
    }

    async nomeServices(
        DADOS
    ) {
        if (!DAOS) {
            throw new Error("DADOS is required, services");
        }

        const result = await this.client.nomeClient(
            DADOS
        )
        return result;
    }
}