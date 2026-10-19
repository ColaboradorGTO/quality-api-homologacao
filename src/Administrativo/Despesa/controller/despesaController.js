import axios from "axios";
import 'dotenv/config';
import { DespesaClient } from "../client/despesaClient.js";
import { DespesaService } from "../service/despesaService.js";

const url = process.env.API_URL;
const despesaClient = new DespesaClient(url);
const despesaService = new DespesaService(despesaClient);

class DespesasControllersADM {

    async getListaDespesasLojaADM(req, res) {
        let { idEmpresa, pageSize, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataPesquisa = dataPesquisa ? dataPesquisa : '';

            try {
                const apiUrl = `${url}/api/administrativo/despesa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
                const response = await axios.get(apiUrl);

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ADM desconto Controllers getListaDespesasLojaADM:", error);
                return res.status(500).json({ message: 'Erro DespesasControllersADM.getListaDespesasLojaADM', error });
            }
        }
    }

    async getDetalheDespesas(req, res) {

        let { idEmpresa, pageSize,  dataPesquisa } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = idEmpresa ? Number(idEmpresa) : '';
            dataPesquisa = dataPesquisa ? dataPesquisa : '';
            pageSize = pageSize ? pageSize : '';

            try {
                const apiUrl = `${url}/api/administrativo/detalhe-despesa.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ADM desconto Controllers getDetalheDespesas:", error);
                return res.status(500).json({ message: 'Erro DespesasControllersADM.getDetalheDespesas', error });
            }
        }
    }
}

export default new DespesasControllersADM();