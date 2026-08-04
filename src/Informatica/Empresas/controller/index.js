import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;
import { EmpresaInformaticaClient } from "../client/index.js";
import { EmpresaInformaticaServices } from "../service/index.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";

const empresaInformaticaClient = new EmpresaInformaticaClient(url);
const empresaInformaticaServices = new EmpresaInformaticaServices(empresaInformaticaClient);

class EmpresasInformaticaControllers {

    async getListaVendasLojaInformatica(req, res) {
        let { idEmpresa, status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            status = status ? status : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/vendas-lojas.xsjs?idEmpresa=${idEmpresa}&status=${status}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaEmpresasInformatica(req, res) {
        let {
            idEmpresa, uf, marcaEmpresa, stAtivo, stAberto } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        uf = uf ? uf : '';
        marcaEmpresa = marcaEmpresa ? marcaEmpresa : '';
        stAtivo = stAtivo ? stAtivo : '';
        stAberto = stAberto ? stAberto : '';
        try {

            const apiUrl = `${url}/api/informatica/empresa.xsjs?id=${idEmpresa}&uf=${uf}&marcaEmpresa=${marcaEmpresa}&stAtivo=${stAtivo}&stAberto=${stAberto}`

            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMarcas(req, res) {
        let { } = req.query;
        try {
            const apiUrl = `${url}/api/grupo-empresarial.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaGrupoEmpresas(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/informatica/grupoempresas.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaAtualizaEmpresaDiario(req, res) {
        let { idEmpresa, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/atualiza-empresa-diario.xsjs?id=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;

        }

    }

    async getListaVendasAlloc(req, res) {
        let { idEmpresa, status, idVenda, dataPesquisaInicio, dataPesquisaFim, stVendasAlloc, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        status = status ? status : '';
        idVenda = idVenda ? idVenda : '';
        stVendasAlloc = stVendasAlloc ? stVendasAlloc : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/informatica/lista-vendas-alloc.xsjs?idVenda=${idVenda}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stvendasalloc=${stVendasAlloc}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

}


export default new EmpresasInformaticaControllers();