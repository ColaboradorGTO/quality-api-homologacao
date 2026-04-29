export class EstoqueService {
    constructor(client) {
        this.client = client;
    }

    async createOT(
        DADOS
    ) {
        const result = await this.client.nomeClient(
            DADOS
        )
        return result;
    }
}