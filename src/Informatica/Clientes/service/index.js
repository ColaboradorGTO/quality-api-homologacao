export class ClientesInformaticaServices {

    constructor(client) {
        this.client = client;
    }
    async createCaixa({
      DADOS
    }) {
        if (!DADOS) {
            throw new Error('DADOS obrigatorio');
        }

        const result = await this.client.nomeClient(
            DADOS

        );
        return result
    }
}
