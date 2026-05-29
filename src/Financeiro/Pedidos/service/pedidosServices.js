export class PedidosServices {
    constructor(client) {
        this.client = client;
    }

    async updateMalote(DADOS) {
        if (!DADOS) {
            throw new Error('DADOS é obrigatório.');
        }

        if (!DADOS) {
            throw new Error('DADOS é obrigatório.');
        }


        const result = await this.client.nomeClient(
           DADOS
        );

        return result;
    }

}
