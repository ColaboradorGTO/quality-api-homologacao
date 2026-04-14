export class MaloteService {
    constructor(client) {
        this.client = client;
    }
    
    async createMalotesPorLoja(
        IDEMPRESA,
        DATAMOVIMENTOCAIXA,
        VRDINHEIRO,
        VRCARTAO,
        VRPOS,
        VRPIX,
        VRCONVENIO,
        VRVOUCHER,
        VRFATURA,
        VRFATURAPIX,
        VRDESPESA,
        VRTOTALRECEBIDO,
        VRDISPONIVEL,
        OBSERVACAOLOJA,
        IDUSERCRIACAO,
        IDUSERULTIMAALTERACAO,
        IDUSERENVIO

    ) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }
        if (!IDUSERCRIACAO) {
            throw new Error("IDUSERCRIACAO is required, services");
        }
        const result = await this.client.criarMalotesPorLoja(
            IDEMPRESA,
            DATAMOVIMENTOCAIXA,
            VRDINHEIRO,
            VRCARTAO,
            VRPOS,
            VRPIX,
            VRCONVENIO,
            VRVOUCHER,
            VRFATURA,
            VRFATURAPIX,
            VRDESPESA,
            VRTOTALRECEBIDO,
            VRDISPONIVEL,
            OBSERVACAOLOJA,
            IDUSERCRIACAO,
            IDUSERULTIMAALTERACAO,
            IDUSERENVIO
        )
        return result;
    }

    async updateMalotesPorLoja(
        IDMALOTE,
        IDUSERULTIMAALTERACAO,
        STATUS

    ) {
        if (!IDMALOTE) {
            throw new Error("IDMALOTE is required, services");
        }

        const result = await this.client.atualizarMalotesPorLoja(
            IDMALOTE,
            IDUSERULTIMAALTERACAO,
            STATUS
        )
        return result;
    }
}