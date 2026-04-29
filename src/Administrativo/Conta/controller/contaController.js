import axios from "axios";
import 'dotenv/config';
import { ContaClient } from "../client/contaClient.js";
import { ContaService } from "../service/contaService.js";

const url = process.env.API_URL;
const extratoClient = new ContaClient(url);
const extratoService = new ContaService(extratoClient);

class ContaControllers {
    async getListaPrestacaoDeContas(req, res) {
        let { idResumo } = req.query;
        idResumo = idResumo ? idResumo : '';
        try {
            const apiUrl = `${url}/api/administrativo/prestacao-contas-balanco.xsjs?id=${idResumo}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Conta Controllers getListaPrestacaoDeContas:", error);
            return res.status(500).json({ message: 'Erro contaControllers.getListaPrestacaoDeContas', error });
        }
    }
}

export default new ContaControllers();