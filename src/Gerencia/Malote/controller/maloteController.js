import axios from "axios";
import 'dotenv/config';
import { MaloteClient } from "../client/maloteClient.js";
import { MaloteService } from "../service/maloteService.js";
import schemaMalotesPorLoja from "../schema/maloteSchema.js";
import schemaAtualizarMalotesPorLoja from "../schema/atualizarMaloteSchema.js";

const url = process.env.API_URL;
const maloteClient = new MaloteClient(url);
const maloteService = new MaloteService(maloteClient);

class MaloteControllers {

    async getListaDetalhesMalotesPorLoja(req, res) {
        let { idEmpresa, idMalote, status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : ''
        idMalote = idMalote ? idMalote : ''
        status = status ? status : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''

        if (!idMalote) {
            return res.status(400).json({
                error: "Parâmetros inválidos. É necessário informar 'idMalote' ."
            });
        }
        try {
            const apiUrl = `${url}/api/gerencia/detalhe-malotes-por-loja.xsjs?idMalote=${idMalote}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no MaloteControllers.getListaDetalhesMalotesPorLoja verifique se os parâmetros estão sendo preenchidos:", error);
            return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
        }
    }

    async getListaMalotesPorLoja(req, res) {
        let { idEmpresa, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : ''
        idMalote = idMalote ? idMalote : ''
        statusMalote = statusMalote ? statusMalote : ''
        pendenciaMalote = pendenciaMalote ? pendenciaMalote : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''

        if (!idMalote && (!dataPesquisaInicio || !dataPesquisaFim)) {
            return res.status(400).json({
                error: "Parâmetros inválidos. É necessário informar 'idMalote' ou 'dataPesquisaInicio' e 'dataPesquisaFim'."
            });
        }
        try {
            const apiUrl = `${url}/api/gerencia/malotes-por-loja.xsjs?idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no MaloteControllers.getListaMalotesPorLoja verifique se os parâmetros estão sendo preenchidos:", error);
            return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
        }
    }

    async postMalotesPorLoja(req, res) {

        try {
            const { error, value } = schemaMalotesPorLoja.validate(req.body, {

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

            const response = await maloteService.createMalotesPorLoja(
                value.IDEMPRESA,
                value.DATAMOVIMENTOCAIXA,
                value.VRDINHEIRO,
                value.VRCARTAO,
                value.VRPOS,
                value.VRPIX,
                value.VRCONVENIO,
                value.VRVOUCHER,
                value.VRFATURA,
                value.VRFATURAPIX,
                value.VRDESPESA,
                value.VRTOTALRECEBIDO,
                value.VRDISPONIVEL,
                value.OBSERVACAOLOJA,
                value.IDUSERCRIACAO,
                value.IDUSERULTIMAALTERACAO,
                value.IDUSERENVIO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MaloteControllers.postMalotesPorLoja:', error);
            return res.status(500).json({ message: 'Erro MaloteControllers.postMalotesPorLoja', error });
        }
    }


    async putMalotesPorLoja(req, res) {

        try {
            const { error, value } = schemaAtualizarMalotesPorLoja.validate(req.body, {

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

            const response = await maloteService.updateMalotesPorLoja(
                value.IDMALOTE,
                value.IDUSERULTIMAALTERACAO,
                value.STATUS
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MaloteControllers.putMalotesPorLoja:', error);
            return res.status(500).json({ message: 'Erro MaloteControllers.putMalotesPorLoja', error });

        }
    }
}

export default new MaloteControllers();


