export class MetasServices {
    constructor(client) {
        this.client = client;
    }
    async nomeService({
        DADOS,
    }) {
        if (!DADOS) {
            throw new Error("DADOS é Obrigatorio.")
        }

        const result = await this.client.nomeClient(
            DADOS,
        );
        return result;
    }
}


