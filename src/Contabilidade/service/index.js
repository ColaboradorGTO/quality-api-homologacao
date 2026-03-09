export class ContabilidadeServices {
    constructor(client) {
        this.client = client;
    }
    async updateVinculoAlvaraEmpresa({
        IDVINCULO,
        STATIVO,
        DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO,
        ARQUIVOSALVARA,
    }) {
        if (!IDVINCULO) {
            throw new Error("ID do Vinculo Alvara Empresa é Obrigatorio.")
        }

        const result = await this.client.atualizarVinculoAlvaraEmpresa(
            IDVINCULO,
            STATIVO,
            DTINICIOCOMPETENCIA,
            DTFIMCOMPETENCIA,
            IDSTATUSANDAMENTO,
            DESCRICAODETALHEANDAMENTO,
            METRAGEMEMPRESA,
            NUMEROPROJETOAPROVADO,
            IDFUNCIONARIO,
            ARQUIVOSALVARA,
        );
        return result;
    }

    async createVinculoAlvaraEmpresa({
        IDEMPRESA,
        IDALVARA,
        STATIVO,
        DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO,
        ARQUIVOSALVARA
    }) {
        if (!IDEMPRESA) {
            throw new Error("ID da Empresa é Obrigatorio.")
        }
        if (!IDALVARA) {
            throw new Error("ID do Alvara é Obrigatorio.")
        }

        const result = await this.client.criarVinculoAlvaraEmpresa(
            IDEMPRESA,
            IDALVARA,
            STATIVO,
            DTINICIOCOMPETENCIA,
            DTFIMCOMPETENCIA,
            IDSTATUSANDAMENTO,
            DESCRICAODETALHEANDAMENTO,
            METRAGEMEMPRESA,
            NUMEROPROJETOAPROVADO,
            IDFUNCIONARIO,
            ARQUIVOSALVARA
        );
        return result;
    }

    async updateArquivosAnexosAlvara({
        IDVINCULOALVARAEMPRESA,
        IDARQUIVOSALVARA,
        IDFUNCIONARIO,
        ARQUIVOSALVARA,
        cancelar
    }) {

        if (!IDARQUIVOSALVARA) {
            throw new Error("ID do Arquivo Alvara é Obrigatorio")
        }

        const result = await this.client.atualizarArquivosAnexosAlvara(
            IDVINCULOALVARAEMPRESA,
            IDARQUIVOSALVARA,
            IDFUNCIONARIO,
            ARQUIVOSALVARA,
            cancelar
        );
        return result;
    }

    async createArquivosAnexosAlvara({
        IDFUNCIONARIO,
        IDVINCULOALVARAEMPRESA,
        ARQUIVOSALVARA
    }) {
        if (!IDVINCULOALVARAEMPRESA) {
            throw new Error("ID do Vinculo Alvara Empresa é Obrigatorio")
        }

        const result = await this.client.criarArquivosAnexosAlvara(
            IDFUNCIONARIO,
            IDVINCULOALVARAEMPRESA,
            ARQUIVOSALVARA
        );
        return result;
    }
}


