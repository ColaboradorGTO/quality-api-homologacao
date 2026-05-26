
import axios from "axios";
import 'dotenv/config';
import { DepositoService } from "../services/index.js";
import { DepositoClient } from "../client/index.js";
const url = process.env.API_URL;
const client = new DepositoClient(process.env.API_URL);
const cancelarDeposito = new DepositoService(client);

class DepositosControllers {
  async getListaConciliarBanco(req, res) {
    let { idDeposito, idConta, idEmpresa, dataCompInicio, dataCompFim, dataMovInicio, dataMovFim, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    idConta = idConta ? idConta : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    dataCompInicio = dataCompInicio ? dataCompInicio : '';
    dataCompFim = dataCompFim ? dataCompFim : '';
    dataMovInicio = dataMovInicio ? dataMovInicio : '';
    dataMovFim = dataMovFim ? dataMovFim : '';

    try {
     
      const apiUrl = `${url}/api/financeiro/deposito-loja.xsjs?page=1&idConta=${idConta}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompInicio=${dataCompInicio}&dataCompFim=${dataCompFim}&dataMovInicio=${dataMovInicio}&dataMovFim=${dataMovFim}`
      const response = await axios.get(apiUrl)
     
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

  async updateDepositoLoja(req, res) {    
    try {
      let { IDDEPOSITOLOJA } = req.body;

      const result = await cancelarDeposito.cancelarDeposito({IDDEPOSITOLOJA})
      return res.json(result);  
    } catch (error) {
      console.error("Erro no DepositosControllers:", error);
      res.status(500).json({ error: "Erro ao atualizar depósito loja" });
      throw error;
    }
  }
}

export default new DepositosControllers();