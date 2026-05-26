export class BancoService {
    constructor(client) {
        this.client = client;
    }

    async createContaBanco(
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        TPCONTA,
        NUCONTASAP
    ) {
        if (!IDBANCO) {
            throw new Error("IDBANCO is required, services");
        }
        const result = await this.client.criarContaBanco(
            IDBANCO,
            DSCONTABANCO,
            NUAGENCIA,
            NUDIGITOAGENCIA,
            NUCONTA,
            NUDIGITOCONTA,
            TPPESSOA,
            TPCONTA,
            NUCONTASAP
        )
        return result;
    }

    async updateContaBanco(
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        STPADRAO,
        STATIVO,
        NUCONTASAP,
        TPCONTA
    ) {
        if (!IDCONTABANCO) {
            throw new Error("IDCONTABANCO is required, services");
        }
        if (!IDBANCO) {
            throw new Error("IDBANCO is required, services");
        }
        const result = await this.client.atualizarContaBanco(
            IDCONTABANCO,
            IDBANCO,
            DSCONTABANCO,
            NUAGENCIA,
            NUDIGITOAGENCIA,
            NUCONTA,
            NUDIGITOCONTA,
            TPPESSOA,
            STPADRAO,
            STATIVO,
            NUCONTASAP,
            TPCONTA
        )
        return result;
    }
}