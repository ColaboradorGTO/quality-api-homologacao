import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import { DetalheFaturasClient } from "../client/index.js";
import { DetalheFaturasService } from "../service/index.js";
import updateFaturaSchema from "../schema/updateFatura.js";
import createDetalheFaturaSchema from "../schema/createDetalheFatura.js";
import updateDetalheFaturaSchema from "../schema/updateDetalheFatura.js";
import 'dotenv/config';
const url = process.env.API_URL;
const detalheFaturasClient = new DetalheFaturasClient(url);
const detalheFaturasService = new DetalheFaturasService(detalheFaturasClient);

class DetalheFaturasControllers {

  async getDetalheFatura(req, res) {

    let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim, } = req.query;
    if (!isNaN(idEmpresa)) {
      idEmpresa = Number(idEmpresa);
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';


      try {
        const apiUrl = `${url}/api/detalhe-fatura.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data); // Retorna
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getDetalheFaturaById(req, res) {
    let { idFatura } = req.query;

    try {
      const apiUrl = `${url}/api/detalhe-fatura.xsjs?id=${idFatura}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async updateFatura(req, res) {
    try {
      const body = Array.isArray(req.body) ? req.body : [req.body];
      const { error, value } = updateFaturaSchema.validate(body, {
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

      const response = await detalheFaturasService.updateFatura({ faturas: value });
      return res.json(response);
    } catch (error) {
      console.error("Erro no DetalheFaturasControllers.updateFatura:", error);
      throw error;
    }
  }

  async postDetalheFaturaLoja(req, res) {
    try {
      const { error, value } = createDetalheFaturaSchema.validate(req.body, {
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

      await detalheFaturasService.createDetalheFatura({
        IDEMPRESA: value.IDEMPRESA,
        IDFUNCIONARIO: value.IDFUNCIONARIO,
        IDDETALHEFATURALOCAL: value.IDDETALHEFATURALOCAL,
        IDCAIXAWEB: value.IDCAIXAWEB,
        IDCAIXALOCAL: value.IDCAIXALOCAL,
        NUESTABELECIMENTO: value.NUESTABELECIMENTO,
        NUCARTAO: value.NUCARTAO,
        DTPROCESSAMENTO: value.DTPROCESSAMENTO,
        HRPROCESSAMENTO: value.HRPROCESSAMENTO,
        NUNSU: value.NUNSU,
        NUNSUHOST: value.NUNSUHOST,
        IDMOVIMENTOCAIXAWEB: value.IDMOVIMENTOCAIXAWEB,
        NUCODAUTORIZACAO: value.NUCODAUTORIZACAO,
        VRRECEBIDO: value.VRRECEBIDO,
        DTHRMIGRACAO: value.DTHRMIGRACAO,
        STCANCELADO: value.STCANCELADO,
        IDUSRCACELAMENTO: value.IDUSRCACELAMENTO
      });
      return res.status(201).json({ message: "Detalhe Fatura created successfully" });
    } catch (error) {
      console.error("Erro no DetalheFaturasControllers.postDetalheFatura:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async putDetalheFaturaLoja(req, res) {
    try {
      const { error, value } = updateDetalheFaturaSchema.validate(req.body, {
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

      const response = await detalheFaturasService.updateDetalheFatura({
        IDDETALHEFATURA: value.IDDETALHEFATURA,
        TXTMOTIVOCANCELAMENTO: value.TXTMOTIVOCANCELAMENTO,
        STCANCELADO: value.STCANCELADO,
        IDUSRCACELAMENTO: value.IDUSRCACELAMENTO
      });
      return res.status(200).json({ message: "Detalhe Fatura atualizada com sucesso", data: response });
    } catch (error) {
      console.error("Erro no DetalheFaturasControllers.putDetalheFatura:", error);
      return res.status(500).json({ error: error.message });
    }
  }

}

export default new DetalheFaturasControllers();
