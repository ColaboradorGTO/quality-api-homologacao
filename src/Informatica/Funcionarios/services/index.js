export class FuncionarioService {
  constructor(client) {
    this.client = client;
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
    DEPARTAMENTO,
    ID

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
      DEPARTAMENTO,
      ID
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
    DEPARTAMENTO

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
      DEPARTAMENTO
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
