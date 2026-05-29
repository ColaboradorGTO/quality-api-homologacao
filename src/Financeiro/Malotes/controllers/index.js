import { MaloteClient } from "../client/index.js";
import { MaloteService } from "../services/index.js";
import maloteSchema from "../schema/index.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import axios from "axios";
import criarMaloteLojaSchema from "../schema/criarMaloteLojaSchema.js";

const maloteClient = new MaloteClient(process.env.API_URL);
const maloteService = new MaloteService(maloteClient);
const url = process.env.API_URL;

export class MaloteFinanceiroController {

  async getListasHistoricosMalotes(req, res) {
    let { idEmpresa, idMalote, idHistoricoMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    idHistoricoMalote = idHistoricoMalote ? idHistoricoMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/historicos-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&idHistoricoMalote=${idHistoricoMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasHistoricosMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListaPendenciasMalotes(req, res) {
    let { idEmpresa, idMalote, statusMalote, pendenciaMalote, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/pendencias-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&statusMalote=${statusMalote}&pendenciaMalote=${pendenciaMalote}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaPendenciasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListasMalotesLojas(req, res) {
    let { idEmpresa, idMarca, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idMarca = idMarca ? idMarca : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/malotes-por-loja.xsjs?idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&idMalote=${idMalote}&idPendenciaMalote=${pendenciaMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataConferenciaInicio=${dataConferenciaInicio}&dataConferenciaFim=${dataConferenciaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);

    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListaMalortesPorLoja(req, res) {
    let { idEmpresa, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : ''
    idMalote = idMalote ? idMalote : ''
    statusMalote = statusMalote ? statusMalote : ''
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : ''
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
    page = page ? page : ''
    pageSize = pageSize ? pageSize : ''

    if (!idMalote && (!dataPesquisaInicio || !dataPesquisaFim)) {
      return res.status(400).json({
        error: "Parâmetros inválidos. É necessário informar 'idMalote' ou 'dataPesquisaInicio' e 'dataPesquisaFim'."
      });
    }

    try {
      const apiUrl = `${url}/api/gerencia/malotes-por-loja.xsjs?idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
      const response = await axios.get(apiUrl);
      return res.json(response.data);
    } catch (error) {
      console.error("Erro no GerenciaControllers.getListaMalortesPorLoja verifique se os parâmetros estão sendo preenchidos:", error);
      return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
    }
  }

  async getListaDetalhesMalortesPorLoja(req, res) {
    let { idEmpresa, idMalote, status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : ''
    idMalote = idMalote ? idMalote : ''
    status = status ? status : ''
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
    page = page ? page : ''
    pageSize = pageSize ? pageSize : ''

    if (!idMalote) {
      return res.status(400).json({
        error: "Parâmetros inválidos. É necessário informar 'idMalote' ."
      });
    }

    try {
      const apiUrl = `${url}/api/gerencia/detalhe-malotes-por-loja.xsjs?idMalote=${idMalote}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);

    } catch (error) {
      console.error("Erro no GerenciaControllers.getDetalhesMalortesPorLoja verifique se os parâmetros estão sendo preenchidos:", error);
      return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
    }
  }


  async postMalotesPorLoja(req, res) {
    try {

      const { error, value } = criarMaloteLojaSchema.validate(req.body, {
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

      const response = await maloteService.createMalotePorLoja(
        value.IDEMPRESA,
        value.DATAMOVIMENTOCAIXA,
        value.VRDINHEIRO,
        value.VRCARTAO,
        value.VRPOS,
        value.VRPIX,
        value.VRCONVENIO,
        value.VRVOUCHER,
        value.VRFATURA,
        value.VRFATURAPIX,
        value.VRDESPESA,
        value.VRTOTALRECEBIDO,
        value.VRDISPONIVEL,
        value.IDUSERCRIACAO,
        value.OBSERVACAOLOJA,
      );

      if (!value.IDEMPRESA || !value.DATAMOVIMENTOCAIXA) {
        return res.status(400).json({ error: "Parâmetros inválidos. É necessário informar 'IDEMPRESA'." });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no MaloteFinanceiroController.postMalotesPorLoja:", error);
      return res.status(500).json({ error: "Erro no MaloteFinanceiroController.postMalotesPorLoja" });
    }
  }

  async putMalotesLoja(req, res) {
    try {

      const { error, value } = maloteSchema.validate(req.body, {
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

      const response = await maloteService.updateMalote(
        value.IDMALOTE,
        value.STATUS,
        value.OBSERVACAOADMINISTRATIVO,
        value.PENDENCIAS,
        value.IDUSERULTIMAALTERACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no MaloteFinanceiroController.putMalotesLoja:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }
}

export default new MaloteFinanceiroController();