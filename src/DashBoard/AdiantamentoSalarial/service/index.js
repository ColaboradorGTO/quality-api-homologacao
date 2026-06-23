export class AdiantamentoServices {
    constructor(client) {
        this.client = client;
    }


    async updateAdiantamentoStatus({
        STATIVO,
        IDADIANTAMENTOSALARIO
    }) {
        if (!IDADIANTAMENTOSALARIO) {
            throw new Error("IDADIANTAMENTOSALARIO é Obrigatorio.")
        }

        const result = await this.client.atualizarAdiantamentoStatus(
            STATIVO,
            IDADIANTAMENTOSALARIO
        );
        return result;
    }

    async updateAdiantamentoSalarial({
        IDEMPRESA,
        IDFUNCIONARIO,
        TXTMOTIVO,
        VRVALORDESCONTO,
        DTLANCAMENTO,
        STATIVO,
        IDUSR,
        IDADIANTAMENTOSALARIO
    }) {
        if (!IDADIANTAMENTOSALARIO) {
            throw new Error("IDADIANTAMENTOSALARIO é Obrigatorio.")
        }

        const result = await this.client.atualizarAdiantamentoSalarial(
            IDEMPRESA,
            IDFUNCIONARIO,
            TXTMOTIVO,
            VRVALORDESCONTO,
            DTLANCAMENTO,
            STATIVO,
            IDUSR,
            IDADIANTAMENTOSALARIO
        );
        return result;
    }

    async createAdiantamentoSalarial({
        IDEMPRESA,
        IDFUNCIONARIO,
        TXTMOTIVO,
        VRVALORDESCONTO,
        DTLANCAMENTO,
        STATIVO,
        IDUSR
    }) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA é Obrigatorio.")
        }

        const result = await this.client.criarAdiantamentoSalarial(
            IDEMPRESA,
            IDFUNCIONARIO,
            TXTMOTIVO,
            VRVALORDESCONTO,
            DTLANCAMENTO,
            STATIVO,
            IDUSR,
        );
        return result;
    }

}

