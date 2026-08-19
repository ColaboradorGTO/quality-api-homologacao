
import axios from 'axios';
import 'dotenv/config';
import { ResumoVoucherClient } from "../client/index.js";
import { ResumoVoucherService } from "../service/index.js";
import criarAuthFuncionarioPrintVoucherSchema from '../schema/criarAuthFuncionarioPrintVoucherSchema.js';
import criarAuthAutorizarExecaoVendaSchema from '../schema/criarAuthAutorizarExecaoVendaSchema.js';
import criarAuthFuncionarioUpdateVoucherSchema from '../schema/criarAuthFuncionarioUpdateVoucherSchema.js';
import autorizacaoEditarStatusVoucherSchema from '../schema/autorizacaoEditarStatusVoucherSchema.js';
import criarResumoVoucherSchema from '../schema/criarResumoVoucherSchema.js';
import atualizarResumoVoucherSchema from '../schema/atualizarResumoVoucherSchema.js';
import autorizacaoEditarCriarVoucherSchema from '../schema/autorizacaoEditarCriarVoucherSchema.js';
const url = process.env.API_URL;

const resumoVoucherClient = new ResumoVoucherClient(url)
const resumoVoucherService = new ResumoVoucherService(resumoVoucherClient);

class ResumoVoucherControllers {

    async getResumoDetalheVoucher(req, res) {
        let { numeroVoucher, dataPesquisaInicio, dataPesquisaFim } = req.query;


        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''

        try {

            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${numeroVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVoucherGerencia(req, res) {
        let { idVoucher, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        if (idVoucher) {

            try {
                idVoucher = idVoucher ? idVoucher : ''
                dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
                dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
                page = page ? page : ''
                pageSize = pageSize ? pageSize : ''
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ResumoVoucherControllers.getListaVoucherGerencia:", error);
                throw error;
            }
        }

    }

    async getListaDetalheVoucherDados(req, res) {
        let { idSubGrupoEmpresa, idEmpresa, idVoucher, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, stTipoTroca, page, pageSize } = req.query;

        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        idVoucher = idVoucher ? idVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        stTipoTroca = stTipoTroca ? stTipoTroca : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {

            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
            console.log(apiUrl, 'apiUrl')
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;
        }
    }

    async getListaVoucherCompleto(req, res) {
        let { idVoucher, numeroVoucher, idSubGrupoEmpresa, idEmpresa, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, page, pageSize } = req.query;

        idVoucher = idVoucher ? idVoucher : ''
        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {

            const apiUrl = `${url}/api/administrativo/voucher-completo.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;
        }
    }

    async getListaEmpresasVoucher(req, res) {
        let { idEmpresa, idSubGrupoEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/resumo-voucher/empresa.xsjs?idEmpresa=${idEmpresa}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;

        }
    }

    async getDetalheNumeroVoucherDados(req, res) {
        let { numeroVoucher, idSubGrupoEmpresa } = req.query;

        if (!isNaN(numeroVoucher)) {

            idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
            numeroVoucher = numeroVoucher ? numeroVoucher : ''
            try {

                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?dadosVoucher=${numeroVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {

                throw error;
            }
        }

    }

    async getDetalheIDVoucherDados(req, res) {
        let { idVoucher, idSubGrupoEmpresa } = req.query;


        idVoucher = idVoucher ? idVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''

        try {

            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            throw error;
        }

    }

    async getDetalheIDVoucherDadosModal(req, res) {
        let { idVoucher } = req.query;

        if (!isNaN(idVoucher)) {
            idVoucher = idVoucher ? idVoucher : ''


            try {

                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                throw error;
            }
        }

    }

    async getListaTodosClientes(req, res) {
        let { idCliente, numeroCpfCnpj, pageSize, page } = req.query;

        idCliente = idCliente ? idCliente : '';
        numeroCpfCnpj = numeroCpfCnpj ? numeroCpfCnpj : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/gerencia/cliente.xsjs?id=${idCliente}&numeroCpfCnpj=${numeroCpfCnpj}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl);


            return res.json(response.data);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async autorizacaoEditarStatusVoucher(req, res) {
        try {
            const { error, value } = autorizacaoEditarStatusVoucherSchema.validate(req.body, {
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

            const response = await resumoVoucherService.autorizacaoAtualizarStatusVoucherService({
                MATRICULA: value.MATRICULA,
                SENHA: value.SENHA,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.autorizacaoEditarStatusVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o serviço de voucher" });
            throw error;
        }
    }

    async postAuthFuncionarioCreateVoucher(req, res) {
        try {
            const { error, value } = autorizacaoEditarCriarVoucherSchema.validate(req.body, {
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

            const response = await resumoVoucherService.createAuthFuncionarioCreateVoucher({
                MATRICULA: value.MATRICULA,
                SENHA: value.SENHA,
                IDEMPRESALOGADA: value.IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDVENDA: value.IDVENDA,
                STTIPOTROCA: value.STTIPOTROCA
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postAuthFuncionarioCreateVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o serviço de voucher" });
            throw error;
        }
    }

    async postAuthFuncionarioPrintVoucher(req, res) {
        try {
            const { error, value } = criarAuthFuncionarioPrintVoucherSchema.validate(req.body, {
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

            const response = await resumoVoucherService.createAuthFuncionarioPrintVoucher({
                MATRICULA: value.MATRICULA,
                SENHA: value.SENHA,
                IDEMPRESALOGADA: value.IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDVOUCHER: value.IDVOUCHER
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postAuthFuncionarioPrintVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o serviço de voucher" });
            throw error;
        }
    }

    async postAuthFuncionarioUpdateVoucher(req, res) {
        try {
            const { error, value } = criarAuthFuncionarioUpdateVoucherSchema.validate(req.body, {
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


            const response = await resumoVoucherService.createAuthFuncionarioUpdateVoucher({
                MATRICULA: value.MATRICULA,
                SENHA: value.SENHA,
                IDEMPRESALOGADA: value.IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDVOUCHER: value.IDVOUCHER
            });
            
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postAuthFuncionarioUpdateVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o serviço de voucher" });
            throw error;
        }
    }

    async postAuthAutorizarExecaoVenda(req, res) {
        try {
            const { error, value } = criarAuthAutorizarExecaoVendaSchema.validate(req.body, {
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

            const response = await resumoVoucherService.createAuthAutorizarExecaoVenda({
                MATRICULA: value.MATRICULA,
                SENHA: value.SENHA,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postAuthAutorizarExecaoVenda:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o serviço de voucher" });
            throw error;
        }
    }

    async postResumoVoucher(req, res) {
        try {

            const { error, value } = criarResumoVoucherSchema.validate(req.body, {
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

            const response = await resumoVoucherService.createResumoVoucher({

                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                IDCAIXAORIGEM: value.IDCAIXAORIGEM,
                IDNFEDEVOLUCAO: value.IDNFEDEVOLUCAO,
                IDUSRINVOUCHER: value.IDUSRINVOUCHER,
                IDVENDEDOR: value.IDVENDEDOR,
                IDCLIENTE: value.IDCLIENTE,
                NUCPF: value.NUCPF,
                VRVOUCHER: value.VRVOUCHER,
                IDRESUMOVENDAWEB: value.IDRESUMOVENDAWEB,
                STTIPOTROCA: value.STTIPOTROCA,
                MOTIVOTROCA: value.MOTIVOTROCA,
                IDUSRLIBERACAOCRIACAO: value.IDUSRLIBERACAOCRIACAO,
                detVoucher: value.detVoucher,
                produtosVoucher: value.produtosVoucher

            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postResumoVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o controller de clinte" });
            throw error;
        }
    }

    async putResumoVoucher(req, res) {
        try {

            const { error, value } = atualizarResumoVoucherSchema.validate(req.body, {
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

            const response = await resumoVoucherService.updateResumoVoucher({

                STATIVO: value.STATIVO,
                STCANCELADO: value.STCANCELADO,
                DSMOTIVOTROCASTATUS: value.DSMOTIVOTROCASTATUS,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDEMPRESALOGADA: value.IDEMPRESALOGADA,
                STSTATUS: value.STSTATUS,
                STTIPOTROCA: value.STTIPOTROCA,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                IDVOUCHER: value.IDVOUCHER

            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.putResumoVoucher:", error);
            res.status(500).json({ error: "Falha ao se comunicar com o controller de clinte" });
            throw error;
        }
    }

}


export default new ResumoVoucherControllers();





