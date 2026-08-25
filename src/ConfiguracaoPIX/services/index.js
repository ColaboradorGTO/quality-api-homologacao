export class ConfiguracaoPixPDVServices {
    constructor(client) {
        this.client = client;
    }

    async updateConfiguracaoPixPDV({
        IDPSPPIX,
        IDPSPPIXFATURA,

    }) {
        if (!IDPSPPIX) {
            throw new Error("IDPSPPIX é Obrigatorio.")
        }

        const result = await this.client.atualizarConfiguracaoPixPDV(
            IDPSPPIX,
            IDPSPPIXFATURA,

        );
        return result;
    }

}
