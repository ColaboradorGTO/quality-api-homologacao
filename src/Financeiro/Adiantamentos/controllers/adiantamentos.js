/* 
import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class AdiantamentosControllers {
  async getListaAdiantamentoSalarialFinanceiro(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    try {
      const apiUrl = `${url}/api/financeiro/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

}

export default new AdiantamentosControllers(); */


import axios from "axios";
import 'dotenv/config';
import schemaAdiantamentoStatus from "../schema/schemaAdiantamentoStatus.js";
import { AdiantamentoService } from '../service/serviceAdiantamento.js';
import { AdiantamentosClient } from '../client/adiantamentoClient.js';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import schemaFecharCaixaZerado from "../schema/schemaFecharCaixaZerado.js";

//const url = process.env.API_URL;
//let url = `http://164.152.245.77:8000/quality/concentrador_homologacao`;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';
const adiantamentoClient = new AdiantamentosClient(url);
const adiantamentoService = new AdiantamentoService(adiantamentoClient);

class AdiantamentosControllers {
  async getListaAdiantamentoSalarialFinanceiro(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    try {
      const apiUrl = `${url}/api/financeiro/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixasMovmentoFinanceiro(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojaPesquisa, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idLoja = idLoja ? idLoja : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-movimento.xsjs?idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojaPesq=${idLojaPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixaStatus(req, res) {
    let { idEmpresa, idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-status.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixaZerados(req, res) {
    let { idEmpresa, idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : ''
    pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-zerados.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putFecharCaixaZerado(req, res) {

    try {
      const { error, value } = schemaFecharCaixaZerado.validate(req.body, {
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

      const response = await adiantamentoService.updateFecharCaixaZerado(
        value.ID
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.putFecharCaixaZerado', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Status.' });
    }
  }

  async putAdiantamentoStatus(req, res) {

    try {
      const { error, value } = schemaAdiantamentoStatus.validate(req.body, {
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

      const response = await adiantamentoService.updateAdiantamentoStatus(
        value.IDADIANTAMENTOSALARIO,
        value.STATIVO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.putAdiantamentoStatus', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Status.' });

    }
  }
}

export default new AdiantamentosControllers();