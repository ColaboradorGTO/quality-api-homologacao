export class DetalhesService {
    constructor(client) {
        this.client = client;
    }
    async nomeService (
        ID
    ) {
        if (!ID) {
            throw new Error("ID is required, services");
        }
        const result = await this.client.atualizarFecharCaixaZerado(
            ID
        )
        console.log(ID, "ID no service")
        return result;
    }
}