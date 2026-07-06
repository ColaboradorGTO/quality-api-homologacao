import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import schemaDespesaLoja from "../schema/schemaDespesaLoja.js";
import { DespesasClient } from "../client/despesasClient.js";
import { DespesasServices } from "../service/despesasService.js";
import schemaStatusDespesaLoja from "../schema/schemaStatusDespesaLoja.js";
import schemaCreateIntegracaoDespesa from "../schema/schemaCreateIntegracaoDespesa.js";

const url = process.env.API_URL;
const despesasClient = new DespesasClient(url);
const despesasServices = new DespesasServices(despesasClient);

class DespesasControllers {

  async getListaDespesasLoja(req, res) {
    let { idDespesaLoja, idEmpresa, dataPesquisaInicio, dataPesquisaFim, idCategoria, page, pageSize } = req.query;
    idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idCategoria = idCategoria ? idCategoria : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/financeiro/despesa-loja.xsjs?idCategoria=${idCategoria}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async putDespesasLoja(req, res) {

    try {
      const { error, value } = schemaDespesaLoja.validate(req.body, {
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

      const response = await despesasServices.updateDespesasLoja(

        value.IDCATEGORIARECEITADESPESA,
        value.VRDESPESA,
        value.DSPAGOA,
        value.DSHISTORIO,
        value.TPNOTA,
        value.NUNOTAFISCAL,
        value.IDUSRCACELAMENTO,
        value.DSMOTIVOCANCELAMENTO,
        value.IDDESPESASLOJA,

      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DespesasControllers.putDespesasLoja:', error);
      return res.status(500).json({ message: 'Erro ao  atualizar despesa loja.' });

    }
  }

  async putStatusDespesasLoja(req, res) {

    try {
      const { error, value } = schemaStatusDespesaLoja.validate(req.body, {
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

      const response = await despesasServices.updateStatusDespesasLoja(

        value.STCANCELADO,
        value.IDDESPESASLOJA,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DespesasControllers.putStatusDespesasLoja:', error);
      return res.status(500).json({ message: 'Erro ao  atualizar status despesa loja.' });

    }
  }

  async postIntegracaoDespesa(req, res) {

    try {
      const { error, value } = schemaCreateIntegracaoDespesa.validate(req.body, {
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

      const response = await despesasServices.createIntegracaoDespesa(

        value.IDDESPESASLOJA,
        value.IDFUNCIONARIO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DespesasControllers.postIntegracaoDespesa:', error);
      return res.status(500).json({ message: 'Erro ao criar integracao despesa' });

    }
  }

}

export default new DespesasControllers();