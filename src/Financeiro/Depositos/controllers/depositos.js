import axios from "axios";
import 'dotenv/config';
import { DepositoService } from "../services/index.js";
import { DepositoClient } from "../client/index.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import schemaAtualizarDepositoLoja from "../schema/schemaAtualizarDepositoLoja.js";

const url = process.env.API_URL;
const client = new DepositoClient(url);
const depositoService = new DepositoService(client);

class DepositosControllers {

    async getListaConciliarBanco(req, res) {
    let { idDeposito, idConta, idEmpresa, dataCompInicio, dataCompFim, dataMovInicio, dataMovFim, dataPesquisaInicio, dataPesquisaFim, pageSize, page, dataCompensacaoInicio, dataCompensacaoFim, dataMovimentoInicio, dataMovimentoFim } = req.query;

    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    idConta = idConta ? idConta : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    dataCompInicio = dataFormatada(dataCompInicio) ? dataFormatada(dataCompInicio) : '';
    dataCompFim = dataFormatada(dataCompFim) ? dataFormatada(dataCompFim) : '';
    dataMovInicio = dataFormatada(dataMovInicio) ? dataFormatada(dataMovInicio) : '';
    dataMovFim = dataFormatada(dataMovFim) ? dataFormatada(dataMovFim) : '';
    dataCompensacaoInicio = dataFormatada(dataCompensacaoInicio) ? dataFormatada(dataCompensacaoInicio) : '';
    dataCompensacaoFim = dataFormatada(dataCompensacaoFim) ? dataFormatada(dataCompensacaoFim) : '';
    dataMovimentoFim = dataFormatada(dataMovimentoFim) ? dataFormatada(dataMovimentoFim) : '';

    try {
      const apiUrl = `${url}/api/financeiro/deposito-loja.xsjs?page=1&idDaConta=${idConta}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompInicio=${dataCompensacaoInicio}&dataCompFim=${dataCompensacaoFim}&dataMovInicio=${dataMovimentoInicio}&dataMovFim=${dataMovimentoFim}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaDepositosLoja(req, res) {
    let { idDeposito, idConta, idEmpresa, dataCompInicio, dataCompFim, dataMovInicio, dataMovFim, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idDeposito = idDeposito ? idDeposito : '';
    idConta = idConta ? idConta : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataCompInicio = dataCompInicio ? dataCompInicio : '';
    dataCompFim = dataCompFim ? dataCompFim : '';
    dataMovInicio = dataMovInicio ? dataMovInicio : '';
    dataMovFim = dataMovFim ? dataMovFim : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
   
      
      const apiUrl = `${url}/api/financeiro/deposito-loja.xsjs?idDep=${idDeposito}&idConta=${idConta}&idEmpresa=${idEmpresa}&dataCompInicio=${dataCompInicio}&dataCompFim=${dataCompFim}&dataMovInicio=${dataMovInicio}&dataMovFim=${dataMovFim}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
     
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

    async getListaConciliarBancoConsolidado(req, res) {
    let { idConta, pageSize, page, dataPesquisaInicio, dataPesquisaFim, dataCompensacaoInicio, dataCompensacaoFim, dataMovimentoInicio, dataMovimentoFim } = req.query;

    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    idConta = idConta ? idConta : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    dataCompensacaoInicio = dataCompensacaoInicio ? dataCompensacaoInicio : '';
    dataCompensacaoFim = dataCompensacaoFim ? dataCompensacaoFim : '';
    dataMovimentoInicio = dataMovimentoInicio ? dataMovimentoInicio : '';
    dataMovimentoFim = dataMovimentoFim ? dataMovimentoFim : '';

    try {
      const apiUrl =
        `${url}/api/financeiro/deposito-loja-consolidado.xsjs?page=${page}&pageSize=${pageSize}&idConta=${idConta}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompensacaoInicio=${dataCompensacaoInicio}&dataCompensacaoFim=${dataCompensacaoFim}&dataMovimentoInicio=${dataMovimentoInicio}&dataMovimentoFim=${dataMovimentoFim}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async putDepositoLojaCancelar(req, res) {

    try {
      const { error, value } = schemaAtualizarDepositoLoja.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      console.log(value, 'VALUE')


      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await depositoService.atualizarDepositoLoja(

        value.IDDEPOSITOLOJA,
      );
      if (!value.IDDEPOSITOLOJA) {
        return res.status(400).json({ message: 'IDDEPOSITOLOJA é obrigatório.' });
      }
      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DepositosControllers.putDepositoLojaCancelar:', error);
      return res.status(500).json({ message: 'Erro ao atualizar deposito loja.' });

    }
  }

}

export default new DepositosControllers();