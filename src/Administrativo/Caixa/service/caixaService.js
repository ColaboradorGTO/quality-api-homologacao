export class CaixaService {
    constructor(client) {
        this.client = client;
    }

    async nomeService(
        DADOS
    ) {
        if (!DADOS) {
            throw new Error("DADOS is required, services");
        }

        const result = await this.client.nomeClient(
            DADOS
        )
        return result;
    }
}   