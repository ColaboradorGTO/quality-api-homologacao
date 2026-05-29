export class NomeService {
    constructor(client) {
        this.client = client;
    }

    async createNomeService(
        DADOS
    ) {
        if (!DADOS) {
            throw new Error("DADOS is required, services");
        }

        const result = await this.client.criarOT(
            DADOS
        )
        return result;
    }
}