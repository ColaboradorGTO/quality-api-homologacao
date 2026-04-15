export class RecursosHumanosServices {
    constructor(client) {
        this.client = client;
    }

    async createFuncionarioLoja({
        ID,
        IDFUNCIONARIO,
        IDSUBGRUPOEMPRESARIAL,
        IDEMPRESA,
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        DSFUNCAO,
        VALORSALARIO,
        PERC,
        STATIVO,
        DSTIPO,
        VALORDISPONIVEL,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        DATA_ADMISSAO,
        TELEFONE,
        DEPARTAMENTO
    }) {
        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO Obrigatorio.")
        }

        const result = await this.client.criarFuncionarioLoja(
            ID,
            IDFUNCIONARIO,
            IDSUBGRUPOEMPRESARIAL,
            IDEMPRESA,
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            DSFUNCAO,
            VALORSALARIO,
            PERC,
            STATIVO,
            DSTIPO,
            VALORDISPONIVEL,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            DATA_ADMISSAO,
            TELEFONE,
            DEPARTAMENTO
        );
        return result;
    }

    async updateFuncionarioLoja({
        DATA_ADMISSAO,
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        IDEMPRESA,
        IDSUBGRUPOEMPRESARIAL,
        IDFUNCIONARIO,
        DSTIPO,
        PERC,
        VALORSALARIO,
        VALORDISPONIVEL,
        IDPERFIL,
        DSFUNCAO,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        STATIVO,
        IDFUNCIONARIOULTALTERACAO,
        MOTIVODESC,
        ID,
        TELEFONE,
        DEPARTAMENTO
    }) {
        if (!ID) {
            throw new Error("ID Obrigatorio.")
        }

        const result = await this.client.atualizarFuncionarioLoja(
            DATA_ADMISSAO,
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            IDEMPRESA,
            IDSUBGRUPOEMPRESARIAL,
            IDFUNCIONARIO,
            DSTIPO,
            PERC,
            VALORSALARIO,
            VALORDISPONIVEL,
            IDPERFIL,
            DSFUNCAO,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            STATIVO,
            IDFUNCIONARIOULTALTERACAO,
            MOTIVODESC,
            ID,
            TELEFONE,
            DEPARTAMENTO
        );
        return result;
    }

    async updateInativarFuncionario({
        DATAULTIMAALTERACAO,
        STATIVO,
        DATA_DEMISSAO,
        ID
    }) {

        if (!ID) {
            throw new Error("ID é Obrigatorio")
        }
        if (!STATIVO) {
            throw new Error("STATIVO é Obrigatorio")
        }

        const result = await this.client.atualizarInativarFuncionario(
            DATAULTIMAALTERACAO,
            STATIVO,
            DATA_DEMISSAO,
            ID
        );
        return result;
    }

    async updateFuncionarioDesconto({
        DTINICIODESC,
        DTFIMDESC,
        PERCDESCUSUAUTORIZADO,
        TXTMOTIVODESCONTO,
        IDFUNCALTERACAO,
        ID
    }) {

        if (!ID) {
            throw new Error("ID é Obrigatorio")
        }

        const result = await this.client.atualizarFuncionarioDesconto(
            DTINICIODESC,
            DTFIMDESC,
            PERCDESCUSUAUTORIZADO,
            TXTMOTIVODESCONTO,
            IDFUNCALTERACAO,
            ID
        );
        return result;
    }
}


