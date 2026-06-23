export class QuebraCaixaServices {
    constructor(client) {
        this.client = client;
    }

    async updateStatusQuebraCaixa({
        STATIVO,
        IDQUEBRACAIXA
    }) {
        if (!IDQUEBRACAIXA) {
            throw new Error("IDQUEBRACAIXA é Obrigatorio.")
        }

        const result = await this.client.atualizarStatusQuebraCaixa(
            STATIVO,
            IDQUEBRACAIXA
        );
        return result;
    }

    async updateQuebraCaixa({
        IDCAIXAWEB,
        IDMOVIMENTOCAIXA,
        IDGERENTE,
        IDFUNCIONARIO,
        DTLANCAMENTO,
        VRQUEBRASISTEMA,
        VRQUEBRAEFETIVADO,
        TXTHISTORICO,
        STATIVO,
        IDQUEBRACAIXA
    }) {
        if (!IDQUEBRACAIXA) {
            throw new Error("IDQUEBRACAIXA é Obrigatorio.")
        }

        const result = await this.client.atualizarQuebraCaixa(
            IDCAIXAWEB,
            IDMOVIMENTOCAIXA,
            IDGERENTE,
            IDFUNCIONARIO,
            DTLANCAMENTO,
            VRQUEBRASISTEMA,
            VRQUEBRAEFETIVADO,
            TXTHISTORICO,
            STATIVO,
            IDQUEBRACAIXA
        );
        return result;
    }


    async updateConferirQuebraCaixa({
        IDFUNCIONARIO,
        STCONFERIDO,
        IDQUEBRACAIXA

    }) {
        if (!IDQUEBRACAIXA) {
            throw new Error("IDQUEBRACAIXA é Obrigatorio.")
        }

        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO é Obrigatorio.")
        }

        const result = await this.client.atualizarConferirQuebraCaixa(
            IDFUNCIONARIO,
            STCONFERIDO,
            IDQUEBRACAIXA
        );
        return result;
    }


    async createQuebraCaixa({
        IDCAIXAWEB,
        IDMOVIMENTOCAIXA,
        IDGERENTE,
        IDFUNCIONARIO,
        DTLANCAMENTO,
        VRQUEBRASISTEMA,
        VRQUEBRAEFETIVADO,
        TXTHISTORICO,
        STATIVO

    }) {
        if (!IDMOVIMENTOCAIXA) {
            throw new Error("IDMOVIMENTOCAIXA é Obrigatorio.")
        }

        const result = await this.client.criarQuebraCaixa(
            IDCAIXAWEB,
            IDMOVIMENTOCAIXA,
            IDGERENTE,
            IDFUNCIONARIO,
            DTLANCAMENTO,
            VRQUEBRASISTEMA,
            VRQUEBRAEFETIVADO,
            TXTHISTORICO,
            STATIVO
        );
        return result;
    }

}

