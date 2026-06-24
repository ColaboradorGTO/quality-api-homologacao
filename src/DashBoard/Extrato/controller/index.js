import axios from "axios";
import 'dotenv/config';
import { ExtratoServices } from "../service/index.js";
import { ExtratoClient } from "../client/index.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
const url = process.env.API_URL;

const extratoClient = new ExtratoClient(url)
const extratoServices = new ExtratoServices(extratoClient);

class DashBoardExtratoControllers {

    async getListaExtratoDaLojaPeriodo(req, res) {
        let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            try {
                const apiUrl = `${url}/api/dashboard/extrato-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)


                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaExtratoDaLojaPeriodoADM(req, res) {
        let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);

            dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
            dataPesquisaFim = dataFormatada(dataPesquisaFim)


            try {
                const apiUrl = `${url}/api/dashboard/extrato-loja-periodo.xsjs?pageSize=500&page=1&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

}

export default new DashBoardExtratoControllers();