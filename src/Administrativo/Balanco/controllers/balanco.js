import axios from "axios";
import { BalancoClient } from '../client/index.js'
import { BalancoServices } from '../services/index.js'
import { dataFormatada } from "../../../utils/dataFormatada.js";
import updateBalancoConsolidadoSchema from '../schema/confirmarConsolidarBalanco.js';
import updateDetalheBalancoAvulsoSchema from '../schema/atualizarDetalheBalancoAvulso.js';
import atualizarConsolidarBalancoSchema from "../schema/atualizarConsolidarBalanco.js";
import atualizarPrepararLojaPrimeiroBalancoSchema from "../schema/atualizarListaPrepararPrimeiroBalancoLoja.js";
import atualizarListaDetalhesBalancoSchema from "../schema/atualizarListaDetalhesBalancoSchema.js.js";
import atualizarColetorBalancoSchema from "../schema/atualizarColetorBalanco.js";
import updateConfirmarPrestacaoContasSchema from "../schema/confirmarPrestacaoContas.js";
import criarDetalheBalancoAvulsoSchema, { criarResumoBalancoSchema } from "../schema/criarDetalheBalanco.js";

const balancoClient = new BalancoClient(process.env.API_URL);
const balancoServices = new BalancoServices(balancoClient);
const url = process.env.API_URL;

class AdmBalancoControllers {
    async getListaBalancoLoja(req, res) {
        let { idEmpresa, dsDescricao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        dsDescricao = dsDescricao ? dsDescricao : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/administrativo/balanco-loja.xsjs?idEmpresa=${idEmpresa}&DSdesc=${dsDescricao}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers AdmBalancoControllers:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de balanços loja." });
        }
    }

    async getListaColetorBalanco(req, res) {
        let { idEmpresa, idResumo, descricaoProduto, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idResumo = idResumo ? idResumo : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            //http://164.152.245.77:8000/quality/concentrador/api/administrativo/coletor-balanco.xsjs?page=2&idEmpresa=1&idresumo=1720
            const apiUrl = `${url}/api/administrativo/coletor-balanco.xsjs?idresumo=${idResumo}&idempresa=${idEmpresa}&descProduto=${descricaoProduto}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaColetorBalanco:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de balanços." });
        }
    }

    async getListaPrepararPrimeiroBalancoLoja(req, res) {
        let { idEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/prepara-primeiro-balanco-loja.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaPrepararPrimeiroBalancoLoja:", error);
            return res.status(500).json({ error: "Erro ao buscar lista preparação primeiro balanco loja." });
        }
    }

    async getListaDetalheBalancoLoja(req, res) {
        let { idResumo, numeroColetor, page, pageSize } = req.query;

        idResumo = idResumo ? idResumo : '';
        numeroColetor = numeroColetor ? numeroColetor : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/administrativo/detalhe-balanco.xsjs?idresumo=${idResumo}&coletor=${numeroColetor}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaDetalheBalancoLoja:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de detalhe balanço loja." });

        }
    }

    async getListaConsolidarBalanco(req, res) {
        let { idResumo, page, pageSize } = req.query;

        idResumo = idResumo ? idResumo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/administrativo/consolidar-balanco.xsjs?id=${idResumo}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaConsolidarBalanco:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de consolidar balanço." });
        }
    }

    async getListaPrestacaoContasBalanco(req, res) {
        let { idResumoBalanco, page, pageSize } = req.query;

        idResumoBalanco = idResumoBalanco ? idResumoBalanco : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/prestacao-contas-balanco.xsjs?id=${idResumoBalanco}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADMBalancoControllers getListaPrestacaoContasBalanco:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de prestação contas balanço." });
        }
    }

    async getListaDetalheBalancoAvulso(req, res) {
        let { idFilial, coletor, page, pageSize } = req.query;

        idFilial = idFilial ? idFilial : '';
        coletor = coletor ? coletor : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/detalhe-balanco-avulso.xsjs?idfilial=${idFilial}&coletor=${coletor}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ADM Balanco Controllers getListaDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: "Erro ao buscar lista detalhe balanços avulso." });
        }
    }

    async getPesqBalanco(req, res) {
        let { idEmpresa, descricao, dataPesqInicio, dataPesqFim } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        const numPage = 100;
        dataPesqInicio = dataFormatada(dataPesqInicio) ? dataPesqInicio : '';
        dataPesqFim = dataFormatada(dataPesqFim) ? dataPesqFim : '';
        descricao = descricao ? descricao : '';

        try {
            const apiUrl = `${url}/api/administrativo/balanco-loja.xsjs?idEmpresa=${idEmpresa}&dataInicial=${dataPesqInicio}&dataFinal=${dataPesqFim}&DSdesc=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ADM Balanco Controllers getPesqBalanco:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de pesquisa balanço." });
        }
    }

    async getListaPreviaBalanco(req, res) {
        let { idEmpresa, idResumo, processa, diferenca } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idResumo = idResumo ? idResumo : '';
        processa = processa ? processa : '';
        diferenca = diferenca ? diferenca : '';
        const numPage = 100;

        try {
            const apiUrl = `${url}/api/administrativo/novo-previa-balanco.xsjs?id=${idResumo}&idempresa=${idEmpresa}&processa=&${processa}&diferenca=${diferenca}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no AdministrativoController getListaPreviaBalanco:", error);
            return res.status(500).json({ error: "Erro ao buscar lista previa balanço." });
        }
    }

    async getDetalheBalancoAvulso(req, res) {
        let { idFilial, coletor, descProduto, } = req.query;

        idFilial = idFilial ? idFilial : '';
        coletor = coletor ? coletor : '';

        try {
            const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/administrativo/detalhe-balanco-avulso.xsjs?page=1&idfilial=${idFilial}&coletor=${coletor}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no AdministrativoController getDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de detalhe balanço avulso." });
        }
    }

    async putConsolidarBalanco(req, res) {

        try {
            const { error, value } = atualizarConsolidarBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updateConsolidarBalanco(
                value.IDRESUMOBALANCO,
                value.IDEMPRESA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no balancoControllers.putConsolidarBalanco:', error);
            return res.status(500).json({ message: 'Erro balancoControllers.putConsolidarBalanco', error });

        }
    }

    async putListaPrepararPrimeiroBalancoLoja(req, res) {

        try {
            const { error, value } = atualizarPrepararLojaPrimeiroBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updatePrepararLojaPrimeiroBalanco(
                value.IDEMPRESA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no balancoControllers.putListaPrepararPrimeiroBalancoLoja:', error);
            return res.status(500).json({ message: 'Erro balancoControllers.putListaPrepararPrimeiroBalancoLoja', error });
        }
    }

    async putListaDetalheBalanco(req, res) {

        try {
            const { error, value } = atualizarListaDetalhesBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updateListaDetalhesBalanco(
                value.IDDETALHEBALANCO,
                value.TOTALCONTAGEMGERAL
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no balancoControllers.putListaDetalheBalanco:', error);
            return res.status(500).json({ message: 'Erro balancoControllers.putListaDetalheBalanco', error });

        }
    }

    async putListaDetalheBalancoAvulso(req, res) {
        try {

            const { error, value } = updateDetalheBalancoAvulsoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }


            const response = await balancoServices.updateDetalheBalancoAvulso(
                value.IDEMPRESA,
                value.NUMEROCOLETOR,
                value.DSCOLETOR,
                value.IDPRODUTO,
                value.TOTALCONTAGEMGERAL
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putListaDetalheBalancoAvulso:", error);
            return res.status(500).json({ message: 'Erro balancoControllers.putListaDetalheBalancoAvulso', error });
        }
    }

    async postDetalheBalancoAvulso(req, res) {
        try {
            const bodyArray = Array.isArray(req.body) ? req.body : [req.body];
            const primeiro = bodyArray[0];

            const schema = primeiro?.INSBALANCO === 1
                ? criarResumoBalancoSchema
                : criarDetalheBalancoAvulsoSchema;

            console.log(req.body)
            const { error, value } = schema.validate(primeiro, {
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

            if (value.INSBALANCO === 1) {

                const response = await balancoServices.createOrUpdateResumoBalanco(
                    value.INSBALANCO,
                    value.IDEMPRESA,
                    value.DSRESUMOBALANCO,
                    value.DTABERTURA,
                    value.DTFECHAMENTO,
                    value.QTDTOTALITENS,
                    value.QTDTOTALSOBRA,
                    value.QTDTOTALFALTA,
                    value.TXTOBSERVACAO,
                    value.STATIVO,
                    value.det.map(item => ({
                        ...item,
                        IDPRODUTO: String(item.IDPRODUTO),
                        NUMEROCOLETOR: Number(item.NUMEROCOLETOR),
                    }))
                );

                return res.json(response);
            } else {
                const response = await balancoServices.createDetalheBalancoAvulso(
                    value.INSBALANCO,
                    value.IDEMPRESA,
                    value.NUMEROCOLETOR,
                    value.DSCOLETOR,
                    String(value.IDPRODUTO),
                    value.DSPRODUTO,
                    value.CODIGODEBARRAS,
                    value.PRECOCUSTO,
                    value.TOTALCONTAGEMGERAL,
                    value.PRECOVENDA,
                );

                return res.json(response);
            }

        } catch (error) {
            console.error("Erro no ADM Balanco Controllers postDetalheBalancoAvulso:", error);
            return res.status(500).json({ message: 'Erro balancoControllers.postDetalheBalancoAvulso', error });
        }
    }

    async putColetorBalanco(req, res) {
        try {

            const { error, value } = atualizarColetorBalancoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.updateColetorBalanco(
                value.IDRESUMOBALANCO,
                value.NUMEROCOLETOR
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putColetorBalanco:", error);
            return res.status(500).json({ message: 'Erro balancoControllers.putColetorBalanco', error });
        }
    }

    async putConfirmarPrestacaoContas(req, res) {
        try {

            const { error, value } = updateConfirmarPrestacaoContasSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.updateConfirmarPrestacaoContas(
                value.IDRESUMOBALANCO,
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putConfirmarPrestacaoContas:", error);
            return res.status(500).json({ message: 'Erro balancoControllers.putConfirmarPrestacaoContas', error });
        }
    }

    async putConfirmarConsolidarBalanco(req, res) {
        try {

            const { error, value } = updateBalancoConsolidadoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.updateConfirmarBalancoConsolidado(
                value.IDRESUMOBALANCO,
                value.OBSCONTAGEM,
                value.OBSDIVERGENCIACONTAGEM,
                value.OBSDIVERGENCIAGERENTE
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putConfirmarConsolidarBalanco:", error);
            return res.status(500).json({ message: 'Erro balancoControllers.putConfirmarConsolidarBalanco', error });
        }
    }

}

export default new AdmBalancoControllers();