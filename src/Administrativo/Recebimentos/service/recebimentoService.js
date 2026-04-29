export class RecebimentosService {
    constructor(client) {
        this.client = client;
    }

    async nomeService(
        DADOS
    ) {

        const result = await this.client.nomeClient(
            DADOS
        )
        return result;
    }
}