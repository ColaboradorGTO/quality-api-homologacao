
import axios from "axios";
import 'dotenv/config';
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
        let { idVenda,page, pageSize } = req.query
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
        let { idVenda, idEmpresa, dataFechamento,  status, page, pageSize } = req.query;
   
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
}

export default new DashBoardVendasControllers();