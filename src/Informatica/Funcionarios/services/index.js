export class FuncionarioService {
  constructor(client) {
    this.client = client;
  }

  async updateHash(

    SENHAHASH,
    ID

  ) {

    if (!ID) {
      throw new Error('ID é obrigatório.');
    }

    const result = await this.client.atualizarHash(
      SENHAHASH,
      ID
    );

    return result;
  }

  async updateFuncionario(
    NOFUNCIONARIO,
    NUCPF,
    NOLOGIN,
    PWSENHA,
    IDEMPRESA,
    IDSUBGRUPOEMPRESARIAL,
    DSFUNCAO,
    IDFUNCIONARIO,
    DSTIPO,
    PERC,
    VALORSALARIO,
    VALORDISPONIVEL,
    MOTIVODESC,
    IDFUNCALTERACAO,
    STCONVENIO,
    STDESCONTOFOLHA,
    STLOJA,
    DATA_ADMISSAO,
    TELEFONE,
    STATIVO,
    DEPARTAMENTO,
    ID,
    SENHAHASH

  ) {

    if (!ID) {
      throw new Error('ID é obrigatório.');
    }

    const result = await this.client.atualizarFuncionario(
      NOFUNCIONARIO,
      NUCPF,
      NOLOGIN,
      PWSENHA,
      IDEMPRESA,
      IDSUBGRUPOEMPRESARIAL,
      DSFUNCAO,
      IDFUNCIONARIO,
      DSTIPO,
      PERC,
      VALORSALARIO,
      VALORDISPONIVEL,
      MOTIVODESC,
      IDFUNCALTERACAO,
      STCONVENIO,
      STDESCONTOFOLHA,
      STLOJA,
      DATA_ADMISSAO,
      TELEFONE,
      STATIVO,
      DEPARTAMENTO,
      ID,
      SENHAHASH
    );

    return result;
  }


  async createFuncionario(
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
    DEPARTAMENTO,
    SENHAHASH

  ) {

    if (!IDEMPRESA) {
      throw new Error('IDEMPRESA é obrigatório.');
    }

    const result = await this.client.criarFuncionario(
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
      DEPARTAMENTO,
      SENHAHASH
    );

    return result;
  }

  async updateFuncionarioDesconto(
    DTINICIODESC,
    DTFIMDESC,
    PERCDESCUSUAUTORIZADO,
    MOTIVODESC,
    IDFUNCALTERACAO,
    ID

  ) {

    if (!ID) {
      throw new Error('ID é obrigatório.');
    }

    const result = await this.client.atualizarFuncionarioDesconto(
      DTINICIODESC,
      DTFIMDESC,
      PERCDESCUSUAUTORIZADO,
      MOTIVODESC,
      IDFUNCALTERACAO,
      ID

    );

    return result;
  }

  async inativarFuncionario(
    DATAULTIMAALTERACAO,
    DATA_DEMISSAO,
    STATIVO,
    ID
  ) {
    if (!ID) {
      throw new Error("ID é obrigatório para inativar funcionário.");
    }

    return await this.client.inativarFuncionario(
      DATAULTIMAALTERACAO,
      DATA_DEMISSAO,
      STATIVO,
      ID
    );
  }

}