
import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import schemaAdiantamentoStatus from "../schema/schemaAdiantamentoStatus.js";
import { AdiantamentoService } from '../service/serviceAdiantamento.js';
import { AdiantamentosClient } from '../client/adiantamentoClient.js';
const url = process.env.API_URL;

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