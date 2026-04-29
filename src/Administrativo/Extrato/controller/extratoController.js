import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import { ExtratoService } from "../../../Financeiro/Extrato/service/extratoService.js";
import { ExtratoClient } from "../client/extratoClient.js";

const extratoClient = new ExtratoClient(process.env.API_URL);
const extratoService = new ExtratoService(extratoClient);
const url = process.env.API_URL;

class ExtratoControllers {

    async getListaExtratoDaLojaDia(req, res) {
        let { idEmpresa, pageNumber, dataPesqInicio, dataPesqFim } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesqInicio = dataFormatada(dataPesqInicio)
            dataPesqFim = dataFormatada(dataPesqFim)

            try {
                const apiUrl = `${url}/api/dashboard/extrato-loja-periodo.xsjs?pageSize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesqInicio}&dataPesquisaFim=${dataPesqFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ExtratoControllers.getListaExtratoDaLojaDia:", error);
                return res.status(500).json({ message: 'Erro ExtratoControllers.getListaExtratoDaLojaDia', error });
            }
        }
    }
}

export default new ExtratoControllers();