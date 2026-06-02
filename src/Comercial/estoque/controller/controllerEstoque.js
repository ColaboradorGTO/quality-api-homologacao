import axios from "axios";
import 'dotenv/config';
import { EstoqueComerciaService } from "../service/index.js";
import { EstoqueComercialClient } from "../client/index.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
const url = process.env.API_URL;

const estoqueComercialClient = new EstoqueComercialClient(url)
const estoqueComerciaService = new EstoqueComerciaService(estoqueComercialClient);

class EstoqueControllersComercial {

    async getListaProdutoSap(req, res) {
        let { idEmpresa } = req.query;

        try {
            const apiUrl = `${url}/api/produto-sap/grupo.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosEstoquePrecoLoja(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarcaProduto, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarca, vlPrecoProduto } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarca = idMarca ? idMarca : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        vlPrecoProduto = vlPrecoProduto ? vlPrecoProduto : '';

        try {

            const apiUrl = `${url}/api/comercial/produtos-precos-estoques-lojas.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}&vlPreco=${vlPrecoProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasPosicionamentoEstoquePeriodos(req, res) {
        let {
            dataPesquisaInicio,
            dataPesquisaInicioB,
            dataPesquisaInicioC,
            dataPesquisaFim,
            dataPesquisaFimB,
            dataPesquisaFimC,
            idMarcaProduto,
            descricaoProduto,
            ufPesquisa,
            idFornecedor,
            idGrupo,
            idGrade,

        } = req.query;

        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        dataPesquisaInicioB = dataFormatada(dataPesquisaInicioB) ? dataFormatada(dataPesquisaInicioB) : '';
        dataPesquisaFimB = dataFormatada(dataPesquisaFimB) ? dataFormatada(dataPesquisaFimB) : '';
        dataPesquisaInicioC = dataFormatada(dataPesquisaInicioC) ? dataFormatada(dataPesquisaInicioC) : '';
        dataPesquisaFimC = dataFormatada(dataPesquisaFimC) ? dataFormatada(dataPesquisaFimC) : '';

        try {

            const apiUrl = `${url}/api/comercial/vendas-estoque-produto.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataPesquisaInicioB=${dataPesquisaInicioB}&dataPesquisaFimB${dataPesquisaFimB}&dataPesquisaInicioC=${dataPesquisaInicioC}&dataPesquisaFimC=${dataPesquisaFimC}&descricaoProduto=${descricaoProduto}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasPosicionamentoEstoque(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarca, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {

            const apiUrl = `${url}/api/comercial/vendas-posicionamento-estoque.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

}

export default new EstoqueControllersComercial();