export class ProdutoServices {
    constructor(client) {
        this.client = client;
    }
    async updateFuncionarioLoja({
        ID,
        IDFUNCIONARIO,
        IDEMPRESA,
        IDSUBGRUPOEMPRESARIAL,
        IDFUNCIONARIOULTALTERACAO,
        NOLOGIN,
        PWSENHA
    }) {
        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO é Obrigatorio.")
        }
        if (!ID) {
            throw new Error("ID é Obrigatorio.")
        }

        const result = await this.client.atualizarFuncionarioLoja(
            ID,
            IDFUNCIONARIO,
            IDEMPRESA,
            IDSUBGRUPOEMPRESARIAL,
            IDFUNCIONARIOULTALTERACAO,
            NOLOGIN,
            PWSENHA
        );
        return result;
    }
}


