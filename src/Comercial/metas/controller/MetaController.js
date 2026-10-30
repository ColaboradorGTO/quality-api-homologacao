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

    async getListaMetasVendasLojas(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/lista-meta-vendas-lojas.xsjs?idEmpresa=${idEmpresa}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }

    async getListaDetalheMetasLojas(req, res) {
        let { idEmpresa, idMetaEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idMetaEmpresa = idMetaEmpresa ? idMetaEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/detalhe-meta-lojas.xsjs?idEmpresa=${idEmpresa}&idMetaEmpresa=${idMetaEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaDetalheMetasLojas:", error);
            throw error;
        }

    }

    async getListaMetasColaborador(req, res) {
        let { idEmpresa, idMetaLoja, idMetaColab, idFuncao, noSecaoMetaLoja, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idMetaLoja = idMetaLoja ? idMetaLoja : '';
        idMetaColab = idMetaColab ? idMetaColab : '';
        idFuncao = idFuncao ? idFuncao : '';
        noSecaoMetaLoja = noSecaoMetaLoja ? noSecaoMetaLoja : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/cadastrar-metas-colaborador.xsjs?idEmp=${idEmpresa}&idMetaLoja=${idMetaLoja}&idMetaColab=${idMetaColab}&idFunc=${idFuncao}&noSecaoMetaLoja=${noSecaoMetaLoja}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }
   
    async getListaMetasCalcados(req, res) {
        let { idMeta, page, pageSize } = req.query;

        idMeta = idMeta ? idMeta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-secao-calcado.xsjs?idmeta=${idMeta}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }

    async getListaMetasCMB(req, res) {
        let { idMeta, page, pageSize } = req.query;

        idMeta = idMeta ? idMeta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-secao-cmb.xsjs?idmeta=${idMeta}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }

    async getListaMetasFeminino(req, res) {
        let { idMeta, page, pageSize } = req.query;

        idMeta = idMeta ? idMeta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-secao-feminino.xsjs?idmeta=${idMeta}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }

    async getListaMetasInfantil(req, res) {
        let { idMeta, page, pageSize } = req.query;

        idMeta = idMeta ? idMeta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-secao-infantil.xsjs?idmeta=${idMeta}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }
    async getListaMetasMasculino(req, res) {
        let { idMeta, page, pageSize } = req.query;

        idMeta = idMeta ? idMeta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/meta-secao-masculino.xsjs?idmeta=${idMeta}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
            throw error;
        }

    }

    async getListaFuncionarioMetas(req, res) {
        let { idEmpresa, dsFuncao, status, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dsFuncao = dsFuncao ? dsFuncao : '';
        status = status ? status : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/funcionario-metas.xsjs?idEmpresa=${idEmpresa}&dsfuncao=${dsFuncao}&stativo=${status}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
           
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaMetasVendasLojas:", error);
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
    
    async putDeleteMetaColaborador(req, res) {
        try {
            let {
                IDMETASLOJA,
                IDMETASCOLABORADOR,
                DSMOTIVOCANCELAMENTO,
                NOSECAO,
                STATIVO,
            } = req.body

            const response = await axios.put(`${url}/api/comercial/del-metas-colaborador.xsjs`, {
                IDMETASLOJA,
                IDMETASCOLABORADOR,
                DSMOTIVOCANCELAMENTO,
                NOSECAO,
                STATIVO,
            })
            
            return res.json(response.data);
        } catch(error) {
            console.error("Erro no ComercialControllers.putDeleteMetaColaborador:", error);
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

    async postCadastrarMetasColaborador(req, res) {
        let {
            IDMETASLOJA,
            DTMETAINICIO,
            DTMETAFIM,
            IDEMPRESA,
            METASDETALHE,
            NOSECAO,
            VRMETAVENDAGERAL,
            PERCMETAVENDAGERAL,
            VRMETACOLABORADOR,
            PERCMETACOLABORADOR,
            STATIVO,
        } = req.body
        try {

            const response = await axios.post(`${url}/api/comercial/cadastrar-metas-colaborador.xsjs`, [{
                IDMETASLOJA,
                DTMETAINICIO,
                DTMETAFIM,
                IDEMPRESA,
                METASDETALHE,
                NOSECAO,
                VRMETAVENDAGERAL,
                PERCMETAVENDAGERAL,
                VRMETACOLABORADOR,
                PERCMETACOLABORADOR,
                STATIVO,
            }])

            return res.json(response.data);
        } catch(error) {
            console.error("Erro no ComercialControllers.postCadastrarMetasColaborador:", error);
            throw error;
        }
    }
}

export default new MetasControllers();