export class AdiantamentoService {
    constructor(client) {
        this.client = client;
    }

    async updateAdiantamentoStatus(
        IDADIANTAMENTOSALARIO,
        STATIVO
    ) {
        console.log(IDADIANTAMENTOSALARIO, 'IDADIANTAMENTOSALARIO');
        if (!IDADIANTAMENTOSALARIO) {
            throw new Error("IDADIANTAMENTOSALARIO is required, services");
        }

        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }

        const result = await this.client.atualizarAdiantamentoStatus(
            IDADIANTAMENTOSALARIO,
            STATIVO
        )
        return result;
    }

    async updateFecharCaixaZerado(
        ID
    ) {
        if (!ID) {
            throw new Error("ID is required, services");
        }

        const result = await this.client.atualizarFecharCaixaZerado(
            ID
        )
        return result;
    }
}