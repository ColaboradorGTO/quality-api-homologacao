import axios from "axios";
import 'dotenv/config';
import { FaturaClient } from "../client/faturaClient.js";
import { FaturaService } from "../service/faturaService.js";

const url = process.env.API_URL;
const faturaClient = new FaturaClient(url);
const faturaService = new FaturaService(faturaClient);

class FaturaControllers {
    async getDetalheFatura(req, res) {

        let { idEmpresa, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

            try {
                const apiUrl = `${url}/api/administrativo/detalhe-fatura.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Erro no FaturaControllers.getDetalheFatura:", error);
                return res.status(500).json({ message: 'Erro FaturaControllers.getDetalheFatura', error });
            }
        }
    }
}

export default new FaturaControllers();