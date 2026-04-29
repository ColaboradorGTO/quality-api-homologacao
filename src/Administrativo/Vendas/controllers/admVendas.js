import 'dotenv/config';
import axios from "axios";

import { dataFormatada } from "../../../utils/dataFormatada.js";
import alterarVendaPagamentoSchema from '../schema/alteracaoPagamento.js';
import atualizarVendaCancelamentoSchema from '../schema/atualizarVendaCancelamento.js';
import { VendasServices } from '../services/index.js';
import { VendasClient } from '../client/index.js';
import alterarVendaRecebimentoSchema from '../schema/alterarVendaRecebimento.js';
import alterarVendaVendedorSchema from '../schema/alterarVendaVendedor.js';
import criarAlterarVendasPagamentoSchema from '../schema/criarAlterarVendasPagamento.js';

const url = process.env.API_URL;

const vendaClient = new VendasClient(url);
const vendaService = new VendasServices(vendaClient)

class AdmVendasControllers {

    async getRecebimentosFormaPagamento(req, res) {
        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, idFuncionario, dsFormaPagamento, dsParcela, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        idFuncionario = idFuncionario ? idFuncionario : '';
        dsFormaPagamento = dsFormaPagamento ? dsFormaPagamento : '';
        dsParcela = dsParcela ? dsParcela : '';
        idMarca = idMarca ? idMarca : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/administrativo/venda-total-forma-pag.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFunc=${idFuncionario}&dSFormaPag=${dsFormaPagamento}&dSParc=${dsParcela}&idEmpGrupo=${idMarca}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });

        }
    }

    async getListaVendaTotalRecebido(req, res) {
        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, idFuncionario, dsFormaPagamento, dsParcela, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        idFuncionario = idFuncionario ? idFuncionario : '';
        dsFormaPagamento = dsFormaPagamento ? dsFormaPagamento : '';
        dsParcela = dsParcela ? dsParcela : '';
        idMarca = idMarca ? idMarca : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/administrativo/venda-total-recebido-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFunc=${idFuncionario}&dSFormaPag=${dsFormaPagamento}&dSParc=${dsParcela}&idEmpGrupo=${idMarca}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async getVendaVendedor(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim } = req.query;
        if (!isNaN(idEmpresa)) {

            idEmpresa = Number(idEmpresa);
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

            try {
                const apiUrl = `${url}/api/administrativo/venda-vendedor.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getVendaAtiva(req, res) {

        let { idEmpresa, idGrupo, dataPesquisaInicio, dataPesquisaFim } = req.query;
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        idGrupo = Number(idGrupo) ? Number(idGrupo) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&status=True`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasContigenciaPorEmpresa(req, res) {

        let { idEmpresa, idGrupo, dataPesquisaInicio, dataPesquisaFim } = req.query;
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        idGrupo = Number(idGrupo) ? Number(idGrupo) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&statusContingencia=True&status=False`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getVendaCancelada30Minutos(req, res) {

        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, stCancelado, stCanceladoWeb, stCanceladoPDVEmitida, stCanceladoApos30Min, stCanceladoPDVEmTela, } = req.query;

        idMarca = Number(idMarca) ? Number(idMarca) : '';
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        stCancelado = stCancelado ? stCancelado : '';
        stCanceladoWeb = stCanceladoWeb ? stCanceladoWeb : '';
        stCanceladoPDVEmitida = stCanceladoPDVEmitida ? stCanceladoPDVEmitida : '';
        stCanceladoApos30Min = stCanceladoApos30Min ? stCanceladoApos30Min : '';
        stCanceladoPDVEmTela = stCanceladoPDVEmTela ? stCanceladoPDVEmTela : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&status=${stCancelado}&stCanceladoWeb=${stCanceladoWeb}&stCanceladoPDVEmitida=${stCanceladoPDVEmitida}&stCanceladoApos30Min=${stCanceladoApos30Min}&stCanceladoPDVEmTela=${stCanceladoPDVEmTela}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getVendaCancelada(req, res) {
        let { idEmpresa, idGrupo, pageNumber, datapesq } = req.query;

        if (!isNaN(idEmpresa) && !isNaN(idGrupo)) {
            idEmpresa = Number(idEmpresa);
            idGrupo = Number(idGrupo);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)

            try {
                const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?pagesize=${pageSize}&idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataFechamento=${datapesq}&dataFechamentoFim=${datapesq}&status=True`
                const response = await axios.get(apiUrl)


                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getVendaCanceladaResumo(req, res) {
        let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);

            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
            dataPesquisaFim = dataFormatada(dataPesquisaFim)

            try {
                const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&status=True`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaVendasDetalheAlterar(req, res) {
        let { idVenda, idEmpresa, page, pageSize } = req.query;

        try {
            idVenda = idVenda ? idVenda : '';
            idEmpresa = idEmpresa ? idEmpresa : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/administrativo/detalhe-venda.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`

            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no AdministrativoControllers.getListaVendasDetalheAlterar:", error);
            return res.status(500).json({ error: "Erro ao conectar ao servidor" });
        }

    }

    async getResumoVendaConvenio(req, res) {

        let { idEmpresa, pageNumber, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {

            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&offset=${offset}dataFechamento=${datapesq}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getResumoVenda(req, res) {
        let { idEmpresa, pageSize, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataPesquisa = dataFormatada(dataPesquisa) ? dataPesquisa : '';

            try {
                const apiUrl = `${url}/api/administrativo/resumo-venda.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
                const response = await axios.get(apiUrl);
                return res.json(response.data);
            } catch (error) {
                console.error("Erro ao conectar ao servidor:", error);

                throw error;
            }
        }
    }

    async getRetornoListaPagamentoVenda(req, res) {
        let { idVenda, } = req.query;

        try {
            const apiUrl = `${url}/api/administrativo/recebimento.xsjs?id=${idVenda}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getResumoVendaConvenioDesconto(req, res) {

        let { idEmpresa, pageNumber, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&offset=${offset}&dataFechamento=${datapesq}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }


    async getVendaCanceladaWeb(req, res) {

        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, stCancelado, stCanceladoWeb, stCanceladoPDVEmitida, stCanceladoApos30Min, stCanceladoPDVEmTela, } = req.query;

        idMarca = Number(idMarca) ? Number(idMarca) : '';
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        stCancelado = stCancelado ? stCancelado : '';
        stCanceladoWeb = stCanceladoWeb ? stCanceladoWeb : '';
        stCanceladoPDVEmitida = stCanceladoPDVEmitida ? stCanceladoPDVEmitida : '';
        stCanceladoApos30Min = stCanceladoApos30Min ? stCanceladoApos30Min : '';
        stCanceladoPDVEmTela = stCanceladoPDVEmTela ? stCanceladoPDVEmTela : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&status=${stCancelado}&stCanceladoWeb=${stCanceladoWeb}&stCanceladoPDVEmitida=${stCanceladoPDVEmitida}&stCanceladoApos30Min=${stCanceladoApos30Min}&stCanceladoPDVEmTela=${stCanceladoPDVEmTela}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getVendaCanceladaEmitidaPDV(req, res) {

        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, stCancelado, stCanceladoWeb, stCanceladoPDVEmitida, stCanceladoApos30Min, stCanceladoPDVEmTela, } = req.query;

        idMarca = Number(idMarca) ? Number(idMarca) : '';
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        stCancelado = stCancelado ? stCancelado : '';
        stCanceladoWeb = stCanceladoWeb ? stCanceladoWeb : '';
        stCanceladoPDVEmitida = stCanceladoPDVEmitida ? stCanceladoPDVEmitida : '';
        stCanceladoApos30Min = stCanceladoApos30Min ? stCanceladoApos30Min : '';
        stCanceladoPDVEmTela = stCanceladoPDVEmTela ? stCanceladoPDVEmTela : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&status=${stCancelado}&stCanceladoWeb=${stCanceladoWeb}&stCanceladoPDVEmitida=${stCanceladoPDVEmitida}&stCanceladoApos30Min=${stCanceladoApos30Min}&stCanceladoPDVEmTela=${stCanceladoPDVEmTela}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaClientesVendas(req, res) {

        let { cpfCliente, dataPesquisaInicio, dataPesquisaFim } = req.query;

        cpfCliente = cpfCliente ? cpfCliente : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?pageSize=1000&cpfCliente=${cpfCliente}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }


    async getVendaAtivaResumo(req, res) {

        let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
            dataPesquisaFim = dataFormatada(dataPesquisaFim)

            try {
                const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?pagesize=${pageSize}&status=False&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getVendaAtivaAction(req, res) {

        let { idEmpresa, pageNumber, dataFechamento, dataFechamentoFim } = req.query;

        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        const pageSize = 1000;
        const offset = (pageNumber - 1) * pageSize;
        dataFechamento = dataFormatada(dataFechamento) ? dataFechamento : '';
        dataFechamentoFim = dataFormatada(dataFechamentoFim) ? dataFechamentoFim : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?page=1&pagesize=${pageSize}&status=False&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}&dataFechamentoFim=${dataFechamentoFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getVendaVendedorAction(req, res) {
        let { idEmpresa, idGrupo, dataPesquisaInicio, dataPesquisaFim, page, pageSize, uf, byId } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? Number(idGrupo) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        byId = byId ? byId : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        uf = uf ? uf : '';

        try {
            const apiUrl = `${url}/api/administrativo/venda-vendedor.xsjs?idGrupo=${idGrupo}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&uf=${uf}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendaAtiva(req, res) {

        let { statusCancelado, statusContingencia, statusCanceladoWeb, stCanceladoPDVEmitida, stCanceladoPDVEmTela, statusCanceladoDepois30Minutos, cpfCliente, ufVenda, idGrupo, idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        statusCancelado = statusCancelado ? statusCancelado : '';
        statusCanceladoWeb = statusCanceladoWeb ? statusCanceladoWeb : '';
        stCanceladoPDVEmitida = stCanceladoPDVEmitida ? stCanceladoPDVEmitida : '';
        stCanceladoPDVEmTela = stCanceladoPDVEmTela ? stCanceladoPDVEmTela : '';
        statusCanceladoDepois30Minutos = statusCanceladoDepois30Minutos ? statusCanceladoDepois30Minutos : '';
        statusContingencia = statusContingencia ? statusContingencia : '';
        cpfCliente = cpfCliente ? cpfCliente : '';
        ufVenda = ufVenda ? ufVenda : '';
        idGrupo = idGrupo ? idGrupo : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {


            const apiUrl = `${url}/api/administrativo/venda-ativa.xsjs?cpfCliente=${cpfCliente}&ufVenda=${ufVenda}&idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataFechamento=${dataPesquisaInicio}&dataFechamentoFim=${dataPesquisaFim}&statusContingencia=${statusContingencia}&status=${statusCancelado}&stCanceladoWeb=${statusCanceladoWeb}&stCanceladoPDVEmitida=${stCanceladoPDVEmitida}&stCanceladoApos30Min=${statusCanceladoDepois30Minutos}&stCanceladoPDVEmTela=${stCanceladoPDVEmTela}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)


            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    // async getListaAlterarVendasPagamento(req, res) {

    //     let { idVenda, byId, page, pageSize  } = req.query;

    //     idVenda = idVenda ? idVenda : '';
    //     byId = byId ? byId : '';
    //     page = page ? page : '';
    //     pageSize = pageSize ? pageSize : '';

    //     try {
    //         const response = getAlterarVendaPagamento(idVenda, byId, page, pageSize)
    //         return res.json(response); 
    //     } catch (error) {
    //         console.error("Unable to connect to the database:", error);
    //         throw error;
    //     }

    // }

    async getListaVendasById(req, res) {
        let { nnf, serie, idVenda, idEmpresa, page, pageSize } = req.query;
        nnf = nnf ? nnf : '';
        serie = serie ? serie : '';
        idVenda = idVenda ? idVenda : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        if (idVenda == '') {
            return res.status(400).json({ error: "idVenda is required" });
        }

        try {
            const apiUrl = `${url}/api/venda/lista-venda.xsjs?nnf=${nnf}&serie=${serie}&idEmpresa=${idEmpresa}&id=${idVenda}&pageSize=${pageSize}&page=${page}`;
            const response = await axios.get(apiUrl)


            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getVendaConvenio(req, res) {
        let { idEmpresa, idGrupo, pageNumber, dataPesquisaInicio, dataPesquisaFim, descontoFuncionario } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? Number(idGrupo) : '';
        const numPage = 100;
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        descontoFuncionario = descontoFuncionario ? descontoFuncionario : '';

        try {
            const apiUrl = `${url}/api/administrativo/desconto-motivo-vendas.xsjs?idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}&dsmotdesc=${descontoFuncionario}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendaCliente(req, res) {
        let { nnf, serie, idEmpresa, idVenda, idSubGrupoEmpresarial, cpfOUidVenda, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        nnf = nnf ? nnf : '';
        serie = serie ? serie : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        idSubGrupoEmpresarial = idSubGrupoEmpresarial ? idSubGrupoEmpresarial : '';
        cpfOUidVenda = cpfOUidVenda ? cpfOUidVenda : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            // const apiUrl = `${url}/api/venda/lista-venda-cliente.xsjs?id=${idVenda}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&idSubgrupoEmpresarial=${idSubGrupoEmpresarial}&idEmpresa=${idEmpresa}&cpfouIdVenda=${cpfOUidVenda}&nnf=${nnf}&serie=${serie}&pageSize=${pageSize}&page=${page}`;
            const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/venda/lista-venda-cliente.xsjs?id=${idVenda}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&idSubgrupoEmpresarial=${idSubGrupoEmpresarial}&idEmpresa=${idEmpresa}&cpfouIdVenda=${cpfOUidVenda}&nnf=${nnf}&serie=${serie}&pageSize=${pageSize}&page=${page}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no AdmVendasControllers.getListaVendaCliente:", error);
            throw error;
        }

    }

    async putAlterarVendasPagamento(req, res) {
        try {
            const { error, value } = alterarVendaPagamentoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await vendaService.updateVendaPagamento(
                value.STCANCELADO,
                value.DTULTIMAALTERACAO,
                value.IDFUNCIONARIOCANCELA,
                value.TXTMOTIVOCANCELA,
                value.IDVENDA
            )

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no AdmVendasControllers.putAlterarVendasPagamento:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }

    async putAlterarVendaRecebimento(req, res) {
        try {
            const { error, value } = alterarVendaRecebimentoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await vendaService.updateVendaRecebimento(
                value.VRRECDINHEIRO,
                value.VRRECCONVENIO,
                value.VRRECCHEQUE,
                value.VRRECCARTAO,
                value.VRRECPOS,
                value.VRRECVOUCHER,
                value.IDVENDA
            )

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no AdmVendasControllers.putAlterarVendasPagamento:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }


    /*     async putAlterarVendaRecebimento(req, res) {
            try {
                let { IDVENDA, VRRECDINHEIRO, VRRECCONVENIO, VRRECCARTAO, VRRECPOS, VRRECVOUCHER } = req.body;
                const response = await axios.put(`${url}/api/administrativo/atualiza-recebimento-venda.xsjs`, {
                    IDVENDA, VRRECDINHEIRO, VRRECCONVENIO, VRRECCARTAO, VRRECPOS, VRRECVOUCHER
                });
                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                return res.status(500).json({ error: error.message });
            }
        } */

    /*   async putVendaVendedor(req, res) {
          try {
              let { IDVENDADETALHE, IDVENDEDOR } = req.body;
              if (!IDVENDADETALHE || !IDVENDEDOR) {
                  return res.status(400).json({ error: "IDVENDADETALHE and IDVENDEDOR are required" });
              }
              const response = await axios.put(`${url}/api/administrativo/venda-vendedor.xsjs`, {
                  IDVENDADETALHE,
                  IDVENDEDOR
              });
              return res.status(200).json(response.data);
          } catch (error) {
              console.error("Error no AdmVendasControllers.putVendaVendedor:", error);
              return res.status(500).json({ error: error.message });
          }
      } */


    async putVendaVendedor(req, res) {
        try {
            const { error, value } = alterarVendaVendedorSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await vendaService.updateVendaVendedor(
                value.IDVENDADETALHE,
                value.IDVENDEDOR
            )

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no AdmVendasControllers.putVendaVendedor:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }

    /*     async putVendaCancelamento(req, res) {
            try {
                let { IDVENDA, IDUSUARIOCANCELAMENTO, TXTMOTIVOCANCELAMENTO } = req.body;
    
                if (!IDVENDA || !IDUSUARIOCANCELAMENTO) {
                    return res.status(400).json({ error: "IDVENDA and IDUSUARIOCANCELAMENTO are required" });
                }
                const response = await axios.put(`${url}/api/venda/venda-cancelamento.xsjs`, [{
                    IDVENDA,
                    IDUSUARIOCANCELAMENTO,
                    TXTMOTIVOCANCELAMENTO
                }]);
                return res.status(200).json(response.data);
            } catch (error) {
                console.error("Error no AdmVendasControllers.putVendaCancelamento:", error);
                return res.status(500).json({ error: error.message });
            }
        } */

    async putVendaCancelamento(req, res) {
        try {
            const { error, value } = atualizarVendaCancelamentoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await vendaService.updateVendaVendedor(
                value.IDVENDA,
                value.IDUSUARIOCANCELAMENTO,
                value.TXTMOTIVOCANCELAMENTO
            )

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no AdmVendasControllers.putVendaVendedor:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }

    async postAlterarVendasPagamento(req, res) {
        try {
            const { error, value } = criarAlterarVendasPagamentoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await vendaService.createAlterarVendasPagamento(
                value.IDVENDAPAGAMENTO,
                value.IDVENDA,
                value.NITEM,
                value.TPAG,
                value.DSTIPOPAGAMENTO,
                value.VALORRECEBIDO,
                value.VALORDEDUZIDO,
                value.VALORLIQUIDO,
                value.DTPROCESSAMENTO,
                value.DTVENCIMENTO,
                value.NPARCELAS,
                value.NOTEF,
                value.NOAUTORIZADOR,
                value.NOCARTAO,
                value.NUOPERACAO,
                value.NSUTEF,
                value.NSUAUTORIZADORA,
                value.NUAUTORIZACAO,
                value.STCANCELADO,
                value.IDFUNCIONARIO
            )

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no AdmVendasControllers.putVendaVendedor:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }


    /*     async postAlterarVendasPagamento(req, res) {
            try {
                let {
                    DSTIPOPAGAMENTO,
                    DTPROCESSAMENTO,
                    IDFUNCIONARIO,
                    IDVENDA,
                    IDVENDAPAGAMENTO,
                    NITEM,
                    STCANCELADO,
                    TPAG,
                    VALORDEDUZIDO,
                    VALORLIQUIDO,
                    VALORRECEBIDO
                } = req.body;
                const response = await axios.post(`${url}/api/administrativo/altera-venda-pagamento.xsjs`, {
                    DSTIPOPAGAMENTO,
                    DTPROCESSAMENTO,
                    IDFUNCIONARIO,
                    IDVENDA,
                    IDVENDAPAGAMENTO,
                    NITEM,
                    STCANCELADO,
                    TPAG,
                    VALORDEDUZIDO,
                    VALORLIQUIDO,
                    VALORRECEBIDO
                });
                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                return res.status(500).json({ error: error.message });
            }
        } */
}

export default new AdmVendasControllers();