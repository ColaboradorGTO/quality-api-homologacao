export class ListaPrecoServices {
    constructor(client) {
        this.client = client;
    }

    async updateListaPreco(
        IDRESUMOLISTAPRECO, 
        IDUSERALTERACAO,
        IDUSERCRIACAO,
        NOMELISTA,
        STATIVO,
        lojas
    ) {
        if (!IDUSERALTERACAO) {
            throw new Error("IDUSERALTERACAO is required, services");
        }

        const result = await this.client.atualizarListaPreco(
            IDRESUMOLISTAPRECO, 
            IDUSERALTERACAO,
            IDUSERCRIACAO,
            NOMELISTA,
            STATIVO,
            lojas
        )
        return result;
    }
    
    async createListaPreco(
        IDRESUMOLISTAPRECO, 
        IDUSERALTERACAO,
        IDUSERCRIACAO,
        NOMELISTA,
        STATIVO,
        lojas
    ) {
        if (!IDUSERCRIACAO) {
            throw new Error("IDUSERCRIACAO is required, services");
        }

        const result = await this.client.criarListaPreco(
            IDRESUMOLISTAPRECO, 
            IDUSERALTERACAO,
            IDUSERCRIACAO,
            NOMELISTA,
            STATIVO,
            lojas
        )
        return result;
    }

}