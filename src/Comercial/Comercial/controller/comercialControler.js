import axios from "axios";
import 'dotenv/config';
import { ComercialService } from "../service/index.js";
import { ComercialClient } from "../client/index.js";
const url = process.env.API_URL;

const comercialClient = new ComercialClient(url)
const comercialService = new ComercialService(comercialClient);

class ComercialControllers {

    async getListaEmpresaComercial(req, res) {
        let { idMarca, idEmpresa, ufProd, page, pageSize } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        ufProd = ufProd ? ufProd : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/comercial/empresa.xsjs?idmarca=${idMarca}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasMarcaPorPeriodoComercial(req, res) {
        let { idMarca, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {
            const apiUrl = `${url}/api/comercial/venda-marca-periodo.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaVendasMarcaPorPeriodoComercial:", error);
            throw error;
        }

    }

    async getListaVendasEstoqueGrupoSubGrupoComercial(req, res) {
        let { idMarca, dataInicio, dataFim, idGrupo, idGrade, page, pageSize } = req.query;

        if (!isNaN(idMarca)) {
            idMarca = idMarca ? idMarca : '';
            dataInicio = dataInicio ? dataInicio : ''
            dataFim = dataFim ? dataFim : ''
            idGrupo = idGrupo ? idGrupo : '';
            idGrade = idGrade ? idGrade : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            try {

                const apiUrl = `${url}/api/comercial/vendas-estoque-grupo-subgrupo.xsjs?page=${page}&pageSize=${pageSize}&dataPesquisaInicio=${dataInicio}&dataPesquisaFim=${dataFim}&idMarca=${idMarca}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}`

                const response = await axios.get(apiUrl)

                return res.json(response.data); 
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaColaboradorRelatorio(req, res) {
        let { idEmpresa } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        try {
            const apiUrl = `${url}/api/comercial/funcionariorel.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database tabela :", error);
            throw error;
        }
    }

    async getListaVendasCustoLojas(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        try {

            const apiUrl = `${url}/api/comercial/custo-por-loja.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new ComercialControllers();