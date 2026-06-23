import axios from "axios";
import 'dotenv/config';
import { RelatorioServices } from "../service/index.js";
import { RelatorioClient } from "../client/index.js";
const url = process.env.API_URL;

const relatorioClient = new RelatorioClient(url)
const relatorioService = new RelatorioServices(relatorioClient);

class DashBoardRelatorioControllers {

    async getListaRelatorioBIGerencia(req, res) {
        let { idEmpresaLogin, idRelatorio } = req.query;

        if (!isNaN(idEmpresaLogin)) {
            idEmpresaLogin = Number(idEmpresaLogin);
   
            try {
                const apiUrl = `${url}/api/relatorio-bi.xsjs?pageSize=500&page=1&id=${idEmpresaLogin}&idrelatorio=${idRelatorio}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no DashBoardControllers.getListaRelatorioBIGerencia:", error);
                throw error;
            }
        }
    }

}

export default new DashBoardRelatorioControllers();