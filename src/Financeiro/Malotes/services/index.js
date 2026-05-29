export class MaloteService {
    constructor(client) {
        this.client = client;
    }

    async updateMalote(IDMALOTE, STATUS, OBSERVACAOADMINISTRATIVO, PENDENCIAS, IDUSERULTIMAALTERACAO) {
        if (!IDMALOTE) {
            throw new Error('ID do malote é obrigatório.');
        }

        if (!IDUSERULTIMAALTERACAO) {
            throw new Error('ID do usuário da última alteração é obrigatório.');
        }


        const result = await this.client.atualizarMalote(IDMALOTE,
            STATUS,
            OBSERVACAOADMINISTRATIVO,
            PENDENCIAS,
            IDUSERULTIMAALTERACAO
        );

        return result;
    }


    async createMalotePorLoja(
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
        IDUSERCRIACAO,
        OBSERVACAOLOJA,
        
    ) {
  
        if (!IDEMPRESA) {
            throw new Error('IDEMPRESA é obrigatório .');
        }
        
        if (!DATAMOVIMENTOCAIXA) {
            throw new Error('DATAMOVIMENTOCAIXA é obrigatório.');
        }


        const result = await this.client.criarMalotePorLoja(
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
            IDUSERCRIACAO,
            OBSERVACAOLOJA,
        );

        return result;
    }
}
