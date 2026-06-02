import axios from "axios";
import 'dotenv/config';
import { MetasClient } from "../client/index.js";
import { MetasServices } from "../service/index.js";
const url = process.env.API_URL;

const metasClient = new MetasClient(url)
const metasService = new MetasServices(metasClient);

class MetasControllers {

    async getListaMetasGrupo(req, res) {
        let { page, pageSize } = req.query;
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/lista-meta-vendas.xsjs?page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaMetasVendas(req, res) {
        let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-vendas.xsjs?idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaMetasVendasResumida(req, res) {
        let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-vendas-resumida.xsjs?idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasResumida:", error);
            throw error;
        }

    }
}

export default new MetasControllers();