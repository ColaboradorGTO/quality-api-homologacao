import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;
import criarDevolucaoSchema from "../schema/criarDevolucaoSchema.js";
import atualizarDevolucaoSchema from "../schema/atualizarDevolucaoSchema.js";
import { MotivoDevolucaoClient } from "../client/index.js";
import { MotivoDevolucaoService } from "../services/index.js";
const devolucaoDevolucaoClient = new MotivoDevolucaoClient(process.env.API_URL);
const devolucaoService = new MotivoDevolucaoService(devolucaoDevolucaoClient);

class DevolucaoControllers {
  async getListaMotivosDevolucao(req, res) {
    let { idMotivo, descricaoMotivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idMotivo = idMotivo ? idMotivo : '';
    descricaoMotivo = descricaoMotivo ? descricaoMotivo : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/motivo-devolucao.xsjs?idMotivo=${idMotivo}&descMotivo=${descricaoMotivo}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putMotivoDevolucao(req, res) {
    try {
      let { error, value } = atualizarDevolucaoSchema.validate(req.body, {
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

      const response = await devolucaoService.updateMotivoDevolucao(
        value.DSMOTIVO,
        value.STATIVO,
        value.IDUSUARIO,
        value.IDMOTIVODEVOLUCAO,
      );
      return res.json(response);
    } catch (error) {
      console.error("Erro no DevolucaoControllers.putMotivoDevolucao", error);
      return res.status(500).json({ error: "Erro no DevolucaoControllers.putMotivoDevolucao", error });

    }
  }

  async postMotivoDevolucao(req, res) {

    try {
      const { error, value } = criarDevolucaoSchema.validate(req.body, {
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

      const response = await devolucaoService.createMotivo(
        value.IDUSUARIO,
        value.DSMOTIVO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no DevolucaoControllers.postMotivoDevolucao", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }


}


export default new DevolucaoControllers();