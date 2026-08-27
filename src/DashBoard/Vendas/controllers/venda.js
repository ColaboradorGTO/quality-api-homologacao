import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
const url = process.env.API_URL;

class DashBoardVendasControllers {

    async getRetornoVendasAtivasDetalheProduto(req, res) {
        let { idEmpresa, idVenda } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/detalhe-venda.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no DashBoardVendasControllers.getRetornoVendasAtivasDetalheProduto:", error);
            throw error;
        }
    }

    async getListaVendaDetalhe(req, res) {
        let { statusCancelado, idVenda, idEmpresa, dataFechamento, page, pageSize } = req.query;
        statusCancelado = statusCancelado ? statusCancelado : '';
        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataFechamento = dataFechamento ? dataFechamento : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa-detalhado.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DashBoardVendasControllers.getListaVendaDetalhe:", error);
            throw error;
        }
    }

    async getVendasConvenioDescontoFuncionario(req, res) {
        let { statusCancelado, idVenda, idEmpresa, idFuncionario, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        statusCancelado = statusCancelado ? statusCancelado : '';
        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idFuncionario = idFuncionario ? idFuncionario : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?pagesize=${pageSize}&status=${statusCancelado}&idEmpresa=${idEmpresa}&dataInicio=${dataPesquisaInicio}&dataFechamento=${dataPesquisaFim}&idFuncPN=${idFuncionario}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DashBoardVendasControllers.getVendasConvenioDescontoFuncionario:", error);
            throw error;
        }
    }

    async getListaResumoVendasConvenio(req, res) {
        let { statusCancelado, idVenda, idEmpresa, dataFechamento, page, pageSize } = req.query;
        statusCancelado = statusCancelado ? statusCancelado : '';
        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataFechamento = dataFechamento ? dataFechamento : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio.xsjs?page=${page}&pagesize=${pageSize}&status=${statusCancelado}&idEmpresa=${idEmpresa}&dataInicio=${dataFechamento}&dataFechamento=${dataFechamento}`

            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DashBoardVendasControllers.getListaResumoVendasConvenio:", error);
            throw error;
        }
    }

    async getListaVendasLojaResumidoGerencia(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/venda/venda-resumido.xsjs?idLoja=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("Error in DashBoardVendasControllers.getListaVendasLojaResumidoGerencia:", error);

            throw error;
        }
    }

    async getListaVendasVendedorPeriodoGerencia(req, res) {
        let { idEmpresa, byId, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        byId = byId ? byId : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/venda/venda-vendedor.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error in DashBoardVendasControllers.getListaVendasVendedorPeriodoGerencia:", error);
            throw error;
        }
    }

    async getListaRecebimento(req, res) {
        let { idVenda, page, pageSize } = req.query
        idVenda = idVenda ? idVenda : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/recebimento.xsjs?id=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaCaixaMovimentosGerencia(req, res) {
        let { byId, idEmpresa, dataFechamento, page, pageSize } = req.query
        byId = byId ? byId : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/dashboard/venda/lista-caixas-movimento.xsjs?idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaResumoVendasCaixas(req, res) {
        let { idVenda, idEmpresa, dataFechamento, status, page, pageSize } = req.query;

        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataFechamento = dataFechamento ? dataFechamento : '';
        status = status ? status : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?idVenda=${idVenda}&status=${status}&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("erro no  DashBoardVendasControllers.getListaResumoVendasCaixas")
            throw error;
        }

    }

    async getListaCaixasFechados(req, res) {
        let { idVenda, idEmpresa, page, pageSize } = req.query;

        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/venda/lista-caixas-fechados-nao-conferidos.xsjs?idEmpresa=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("erro no  DashBoardVendasControllers.getListaCaixasFechados")
            throw error;
        }

    }

    async getResumoVendaGerencia(req, res) {

        let { idEmpresa, page, pageSize, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataPesquisa = dataPesquisa ? dataPesquisa : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            try {
                const apiUrl = `${url}/api/dashboard/resumo-venda.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
                const response = await axios.get(apiUrl);

                return res.json(response.data);
            } catch (error) {
                console.error("Erro ao conectar ao servidor:", error);

                throw error;
            }

        }
    }

    async getRetornoListaVendaDetalhe(req, res) {
        let { idEmpresa, idVenda } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa-detalhado.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }


    async getRetornoListaVendasAtivasDetalheProduto(req, res) {
        let { idEmpresa, idVenda } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/detalhe-venda.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getRetornoListaVendasConvenioDescontoFuncionario(req, res) {
        let { idVenda, idEmpresa, idFuncionarioPN, dataInicio, dataFechamento, status, page, pageSize } = req.query;

        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        //idFuncPN = idFuncPN ? idFuncPN : '';
        //dataInicio = dataInicio ? dataInicio : '';
        idFuncionarioPN = idFuncionarioPN ? idFuncionarioPN : '';
        dataFormatada(dataFechamento);
        dataFormatada(dataInicio);
        status = status ? status : '';

        /*  idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
         idFuncionarioPN = idFuncionarioPN ? idFuncionarioPN : '';
         dataFormatada(dataFechamento)
         dataFormatada(dataInicio) */
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?page=${page}&pageSize=${pageSize}&status=False&idEmpresa=${idEmpresa}&dataInicio=${dataInicio}&dataFechamento=${dataFechamento}&idFuncPN=${idFuncionarioPN}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getRetornoListaVendasConvenioDesconto(req, res) {
        let { idEmpresa, dataFechamento, dataInicio } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataFechamento = dataFormatada(dataFechamento) || '';
            dataInicio = dataFormatada(dataInicio) || '';
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?pagesize=1000&status=False&idEmpresa=${idEmpresa}&dataInicio=${dataInicio}&dataFechamento=${dataFechamento}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasVendedorGerencia(req, res) {
        let { idEmpresa, page, pageSize, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataFechamento = dataFechamento ? dataFechamento : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
            try {
                const apiUrl = `${url}/api/dashboard/venda/vendedor.xsjs?idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}&page=${page}&pagesize=${pageSize}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaResumoVendasAtivaGerencia(req, res) {
        let { idEmpresa, page, pageSize, dataFechamento, status } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataFechamento = dataFechamento ? dataFechamento : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?pagesize=100&status=False&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaVendasGerencia(req, res) {
        let { idVenda } = req.query;

        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaResumoVendasCanceladasGerencia(req, res) {
        let { idEmpresa, pageNumber, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);

            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataFechamento = dataFormatada(dataFechamento)
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?pagesize=100&status=True&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

}

export default new DashBoardVendasControllers();