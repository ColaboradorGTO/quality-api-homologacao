export class AdiantamentoService {
    constructor(client) {
        this.client = client;
    }

    async updateAdiantamentoStatus(
        IDADIANTAMENTOSALARIO,
        STATIVO
    ) {
      
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

    async updateAdiantamentoDepartamento(dadosAdiantamento) {
        if (!dadosAdiantamento?.IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }

        const result = await this.client.atualizarAdiantamentoDepartamento(dadosAdiantamento);
        return result;
    }

    async updatePagamentoDepartamento(
        IDPAGAMENTO,
        IDADIANTAMENTO,
        VLPAGAMENTO,
        DATAPAGAMENTO,
        FORMAPAGAMENTO,
        ANEXOCOMPROVANTE,
        DSOBSERVACAO,
        STATUS,
        IDUSUARIOCRIACAO
    ) {
        if (!IDPAGAMENTO) {
            throw new Error("IDPAGAMENTO is required, services");
        }

        const result = await this.client.atualizarPagamentoDepartamento(
            IDPAGAMENTO,
            IDADIANTAMENTO,
            VLPAGAMENTO,
            DATAPAGAMENTO,
            FORMAPAGAMENTO,
            ANEXOCOMPROVANTE,
            DSOBSERVACAO,
            STATUS,
            IDUSUARIOCRIACAO
        )
        return result;
    }

    async createAdiantamentoDepartamento(dadosAdiantamento) {
        if (!dadosAdiantamento?.IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }

        const result = await this.client.criarAdiantamentoDepartamento(dadosAdiantamento);
        return result;
    }

    async createPagamentoDepartamento(
        IDADIANTAMENTO,
        VLPAGAMENTO,
        DATAPAGAMENTO,
        FORMAPAGAMENTO,
        ANEXOCOMPROVANTE,
        DSOBSERVACAO,
        STATUS,
        IDUSUARIOCRIACAO
    ) {
        if (!IDADIANTAMENTO) {
            throw new Error("IDADIANTAMENTO is required, services");
        }

        const result = await this.client.criarPagamentoDepartamento(
            IDADIANTAMENTO,
            VLPAGAMENTO,
            DATAPAGAMENTO,
            FORMAPAGAMENTO,
            ANEXOCOMPROVANTE,
            DSOBSERVACAO,
            STATUS,
            IDUSUARIOCRIACAO
        )
        return result;
    }
}