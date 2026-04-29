import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
const url = process.env.API_URL;

class ADMCaixasControllers {
    async getListaCaixasMovimento(req, res) {
        let { idEmpresa, dataFechamento, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        dataFechamento = dataFechamento ? dataFechamento : '';

        try {
            const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataFechamento}`
            const response = await axios.get(apiUrl)
            return res.json(response.data); 
            
        } catch (error) {
            console.error("Erro no ADM Caixa Controllers getListaCaixasMovimento:", error);
            return res.status(500).json({ message: 'Erro ADMCaixasControllers.getRetornoListaCaixasFechados', error });
        }
    }

    async getListaQuebraCaixaResumoADM(req, res) {
        let { idEmpresa, pageNumber, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesquisa = dataFormatada(dataPesquisa)

            try {
                const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ADM Caixa Controllers getListaQuebraCaixaResumoADM:", error);
                return res.status(500).json({ message: 'Erro ADMCaixasControllers.getListaQuebraCaixaResumoADM', error });
            }
        }
    }

    async getRetornoListaCaixasFechados(req, res) {

        let { idEmpresa, pageSize, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataFechamento = dataFormatada(dataFechamento)
            try {
                const apiUrl = `${url}/api/administrativo/lista-caixas-fechados.xsjs?idEmpresa=${idEmpresa}&pageSize=${pageSize}&dataFechamento=${dataFechamento}`;
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ADM Caixa Controllers getRetornoListaCaixasFechados:", error);
                return res.status(500).json({ message: 'Erro ADMCaixasControllers.getRetornoListaCaixasFechados', error });
            }
        }
    }

    async getPesquisaMovimentoDeCaixa(req, res) {

        let { idEmpresa, pageNumber, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)

            try {
                const apiUrl = `${url}/api/administrativo/resumo-venda.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${datapesq}&offset=${offset}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ADM Caixa Controllers getPesquisaMovimentoDeCaixa:", error);
                return res.status(500).json({ message: 'Erro ADMCaixasControllers.getPesquisaMovimentoDeCaixa', error });
            }
        }
    }
}

export default new ADMCaixasControllers();