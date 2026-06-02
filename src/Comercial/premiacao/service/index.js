export class PremiacaoServices {
    constructor(client) {
        this.client = client;
    }
    async createCadastroPremiacoes({
        DTPREMIOINICIO,
        DTPREMIOFIM,
        IDSUBGRUPOEMPRESARIAL,
        NOFUNCAO,
        NOINDICADOR,
        TPAPURACAO,
        VRBONUSSENIOR,
        VRBONUSPLENO,
        VRBONUSJUNIOR,
        VRBONUSTODOS,
        STATIVO
    }) {
        if (!IDSUBGRUPOEMPRESARIAL) {
            throw new Error("IDSUBGRUPOEMPRESARIAL é Obrigatorio.")
        }

        const result = await this.client.criarCadastroPremiacoes(
          DTPREMIOINICIO,
        DTPREMIOFIM,
        IDSUBGRUPOEMPRESARIAL,
        NOFUNCAO,
        NOINDICADOR,
        TPAPURACAO,
        VRBONUSSENIOR,
        VRBONUSPLENO,
        VRBONUSJUNIOR,
        VRBONUSTODOS,
        STATIVO
        );
        return result;
    }
}


