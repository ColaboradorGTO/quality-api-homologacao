export class SaldoService {
    constructor(client) {
        this.client = client;
    }

    async nomeService(
        DADO
    ) {
        if (!DADO) {
            throw new Error("DADO is required");
        }

        const result = await this.client.criarMovimentoSaldoBonificacao(
            DADO,
        );

        return result;
    }
}