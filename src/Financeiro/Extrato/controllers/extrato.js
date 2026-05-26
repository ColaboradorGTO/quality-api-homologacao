
import axios from "axios";
import 'dotenv/config';
import schemaListaAjusteExtrato from "../schema/listaAjusteExtrato.js";
import { ExtratoService } from "../service/extratoService.js";
import { ExtratoClient } from "../client/extratoClient.js";
import schemaAtualizarListaAjusteExtrato from "../schema/atualizarListaAjusteExtrato.js";

const url = process.env.API_URL;
const extratoClient = new ExtratoClient(url);
const extratoService = new ExtratoService(extratoClient);

class ExtratosControllers {
  async getListaExtratoDaLojaPeriodoFinanceiro(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/extrato-loja-periodo.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`

      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async postListaAjusteExtrato(req, res) {

    try {
      const { error, value } = schemaListaAjusteExtrato.validate(req.body, {

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

      const response = await extratoService.createAjusteExtrato(
        value.IDEMPRESA,
        value.HISTORICO,
        value.VRDEBITO,
        value.VRCREDITO,
        value.STATIVO,
        value.STCANCELADO,
        value.IDOPERADOR,
        value.DATACADASTRO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
      return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

    }
  }

  async putListaAjusteExtrato(req, res) {

    try {
      const { error, value } = schemaAtualizarListaAjusteExtrato.validate(req.body, {

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

      const response = await extratoService.updateAjusteExtrato(
        value.DSHISTORIO,
        value.VRDEBITO,
        value.VRCREDITO,
        value.IDOPERADOR,
        value.DATACADASTRO,
        value.STATIVO,
        value.STCANCELADO,
        value.IDAJUSTEEXTRATO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no ExtratosControllers.putListaAjusteExtrato:', error);
      return res.status(500).json({ message: 'Erro ExtratosControllers.putListaAjusteExtrato', error });

    }
  }

  
/*   async putListaAjusteExtrato(req, res) {
    try {
      const extratos = Array.isArray(req.body) ? req.body : [req.body];
      const response = await axios.post(`${url}/api/financeiro/ajuste-extrato.xsjs`, extratos);
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async postListaAjusteExtrato(req, res) {
    try {
      let {
        IDEMPRESA,
        HISTORICO,
        VRDEBITO,
        VRCREDITO,
        STATIVO,
        STCANCELADO,
        IDOPERADOR,
        DATACADASTRO,
      } = req.body;
      const response = await axios.post(`${url}/api/financeiro/ajuste-extrato.xsjs`, [{
        IDEMPRESA,
        HISTORICO,
        VRDEBITO,
        VRCREDITO,
        STATIVO,
        STCANCELADO,
        IDOPERADOR,
        DATACADASTRO,
      }]);
      return res.status(201).json(response.data);
    } catch (error) {
      console.error("Erroor no servidor", error);
      return res.status(500).json({ error: error.message });
    }
  } */
}

export default new ExtratosControllers();