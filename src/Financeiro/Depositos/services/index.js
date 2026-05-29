
export class DepositoService {
    constructor(client) {
        this.client = client;
    }

    async atualizarDepositoLoja(IDDEPOSITOLOJA) {
        if (!IDDEPOSITOLOJA) {
            throw new Error('ID do depósito é obrigatório.');
        }

        const response = await this.client.updateDepositoLoja(IDDEPOSITOLOJA);
        return response.data;
    }
}