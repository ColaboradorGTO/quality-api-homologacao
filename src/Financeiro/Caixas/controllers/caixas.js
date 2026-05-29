import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import fechaCaixaZeradoSchema from "../schema/fecharCaixaZeradoSchema.js";
import { CaixaClient } from "../client/caixaClient.js";
import { CaixaService } from "../service/caixaService.js";

const url = process.env.API_URL;
const caixaClient = new CaixaClient(url);
const caixaService = new CaixaService(caixaClient);

class CaixasControllers {
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

      return res.json(response.data);
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
      const { error, value } = fechaCaixaZeradoSchema.validate(req.body, {
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

      const response = await caixaService.updateFecharCaixaZerado(
        value.ID
      );
      if (!value.ID) {
        return res.status(400).json({ message: 'ID é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no CaixasControllers.putFecharCaixaZerado', error);
      return res.status(500).json({ message: 'Erro ao atualizar fechar caixa zerado.' });
    }
  }

}

export default new CaixasControllers();