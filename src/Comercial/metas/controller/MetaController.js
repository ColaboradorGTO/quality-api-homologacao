import axios from "axios";
import 'dotenv/config';
import { MetasClient } from "../client/index.js";
import { MetasServices } from "../service/index.js";
const url = process.env.API_URL;

const metasClient = new MetasClient(url)
const metasService = new MetasServices(metasClient);

class MetasControllers {

    async getListaMetasGrupo(req, res) {
        let { id, idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        id = id ? id : '';
        idMarca = idMarca ? idMarca : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';    


        try {

            const apiUrl = `${url}/api/comercial/lista-meta-vendas.xsjs?id=${id}&idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
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

    async getListaMetasVendasEstrutura(req, res) {
        let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-vendas-por-estrutura.xsjs?idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasResumida:", error);
            throw error;
        }

    }

    async putDeleteMeta(req, res) {
        try {
            let {
                IDMETASLOJA,
                IDGRUPOEMPRESA,
                DSMOTIVOCANCELAMENTO,
                DTMETAINICIO,
                DTMETAFIM,
                STATIVO,
            } = req.body

            const response = await axios.put(`${url}/api/comercial/del-metas.xsjs`, [{
                IDMETASLOJA,
                IDGRUPOEMPRESA,
                DSMOTIVOCANCELAMENTO,
                DTMETAINICIO,
                DTMETAFIM,
                STATIVO
            }])
            
            return res.json(response.data);
        } catch(error) {
            console.error("Erro no ComercialControllers.putDeleteMeta:", error);
            throw error;
        }
    }
    
    async postCadastrarMetasLoja(req, res) {
        let {
            IDGRUPOEMPRESA,
            IDFUNCIONARIO,
            DTMETAINICIO,
            DTMETAFIM,
            METASDETALHE,
            STATIVO,
            STSALVO
        } = req.body
        try {

            const response = await axios.post(`${url}/api/comercial/cadastrar-metas_lojas.xsjs`, [{
                IDGRUPOEMPRESA,
                IDFUNCIONARIO,
                DTMETAINICIO,
                DTMETAFIM,
                METASDETALHE,
                STATIVO,
                STSALVO
            }])

            return res.json(response.data);
        } catch(error) {
            console.error("Erro no ComercialControllers.postCadastrarMetasLoja:", error);
            throw error;
        }
    }
}

export default new MetasControllers();