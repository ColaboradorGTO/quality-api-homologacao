import { FuncionarioClient } from '../client/index.js';
import { FuncionarioService } from '../services/index.js';
import funcionarioSchema from '../schema/index.js';
import { inativarFuncionarioSchema } from '../schema/funcionarioInativarSchema.js';
import funcionarioSchemaPut from '../schema/index.js';
import CriarFuncionarioSchema from '../schema/criarFuncionario.js';

const url = process.env.API_URL;

const funcionarioClient = new FuncionarioClient(url)
const funcionarioService = new FuncionarioService(funcionarioClient);

/* const funcionarioClient = new FuncionarioClient(process.env.INFORMATICA_API_URL);
const funcionarioService = new FuncionarioService(funcionarioClient); */

class FuncionarioController {

  async putFuncionarioLoja(req, res) {

    try {
      const { error, value } = funcionarioSchemaPut.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.updateFuncionario(

        value.NOFUNCIONARIO,
        value.NUCPF,
        value.NOLOGIN,
        value.PWSENHA,
        value.IDEMPRESA,
        value.IDSUBGRUPOEMPRESARIAL,
        value.DSFUNCAO,
        value.IDFUNCIONARIO,
        value.DSTIPO,
        value.PERC,
        value.VALORSALARIO,
        value.VALORDISPONIVEL,
        value.MOTIVODESC,
        value.IDFUNCALTERACAO,
        value.STCONVENIO,
        value.STDESCONTOFOLHA,
        value.STLOJA,
        value.DATA_ADMISSAO,
        value.TELEFONE,
        value.DEPARTAMENTO,
        value.ID

      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.putFuncionarioLoja:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }

  async postFuncionarioLoja(req, res) {
    try {
      const { error, value } = CriarFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.createFuncionario(

        value.ID,
        value.IDFUNCIONARIO,
        value.IDSUBGRUPOEMPRESARIAL,
        value.IDEMPRESA,
        value.NOFUNCIONARIO,
        value.NUCPF,
        value.NOLOGIN,
        value.PWSENHA,
        value.DSFUNCAO,
        value.VALORSALARIO,
        value.PERC,
        value.STATIVO,
        value.DSTIPO,
        value.VALORDISPONIVEL,
        value.STCONVENIO,
        value.STDESCONTOFOLHA,
        value.STLOJA,
        value.DATA_ADMISSAO,
        value.TELEFONE,
        value.DEPARTAMENTO
      );

      return res.status(201).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.postFuncionarioLoja:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }

  async putInativarFuncionario(req, res) {
    try {
      const { error, value } = inativarFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: "Dados inválidos",
          errors: error.details.map(detail => ({
            field: detail.path.join("."),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.inativarFuncionario(
        value.DATAULTIMAALTERACAO,
        value.DATA_DEMISSAO,
        value.STATIVO,
        value.ID

      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.inativarFuncionario:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }


}


export default new FuncionarioController();







