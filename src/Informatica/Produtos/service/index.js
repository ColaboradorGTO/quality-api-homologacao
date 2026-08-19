export class ProdutosInformaticaServices {

    constructor(client) {
        this.client = client;
    }
    async createNome({
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
