import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
import updateResumoOTSchema from "../schema/updateResumoOTSchema.js";
import updateStatusDivergenciaSchema from "../schema/updateStatusDivergencia.js";
import createStatusDivergenciaSchema from "../schema/createStatusDivergencia.js";
import { CoferenciaCegaClient } from "../client/index.js";
import { CoferenciaCegaServices } from "../service/index.js";

const url = process.env.API_URL;
const conferenciaCegaClient = new CoferenciaCegaClient(url)
const conferenciaCegaService = new CoferenciaCegaServices(conferenciaCegaClient);

class ConferenciaCegaControllers {

    async getListaOrdemTransferenciaConferenciaCega(req, res,) {
        let { idResumoOT, idTipoFiltro, idEmpresaOrigem, idEmpresaDestino, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        idEmpresaOrigem = idEmpresaOrigem ? idEmpresaOrigem : '';
        idEmpresaDestino = idEmpresaDestino ? idEmpresaDestino : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
        dataPesquisaFim = dataFormatada(dataPesquisaFim)

        try {

            const response = await axios.get(`${url}/api/conferencia-cega/resumo-ordem-transferencia.xsjs?id=${idResumoOT}&idtipofiltro=${idTipoFiltro}&idEmpresaOrigem=${idEmpresaOrigem}&idEmpresaDestino=${idEmpresaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getDetalheOrdemTransferenciaConferenciaCega(req, res,) {
        let { idResumoOT, idTipoFiltro, page, pageSize } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const response = await axios.get(`${url}/api/conferencia-cega/detalhe-ordem-transferencia.xsjs?id=${idResumoOT}&idtipofiltro=${idTipoFiltro}&page=${page}&pageSize=${pageSize}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaStatusOTConfrecencia(req, res,) {
        let { idResumoOT, page, pageSize } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/conferencia-cega/status-divergencia.xsjs`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putStatusDivergencia(req, res) {
        try {
            const { error, value } = updateStatusDivergenciaSchema.validate(req.body, {
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

            const response = await conferenciaCegaService.updateStatusDivergencia({

                DESCRICAODIVERGENCIA: value.DESCRICAODIVERGENCIA,
                STATIVO: value.STATIVO,
                IDSTATUSDIVERGENCIA: value.IDSTATUSDIVERGENCIA,
            });

            return res.status(200).json(response);
        } catch (error) {

            console.error("Erro no ConferenciaCegaController.putStatusDivergencia:", error);
            res.status(500).json({ error: "Erro ao atualizar ot" });
            throw error;
        }
    }

    async postStatusDivergencia(req, res) {
        try {
            const { error, value } = createStatusDivergenciaSchema.validate(req.body, {
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

            const response = await conferenciaCegaService.createStatusDivergencia({

                DESCRICAODIVERGENCIA: value.DESCRICAODIVERGENCIA,
                IDUSRCRIACAO: value.IDUSRCRIACAO,
                STATIVO: value.STATIVO,
            });

            return res.status(200).json(response);
        } catch (error) {

            console.error("Erro no ConferenciaCegaController.postStatusDivergencia:", error);
            res.status(500).json({ error: "Erro ao atualizar ot" });
            throw error;
        }
    }

    async putResumoOrdemTransferencia(req, res) {
        try {
            const { error, value } = updateResumoOTSchema.validate(req.body, {
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
            const dadosdetalheot = value.dadosdetalheot;
            const response = await conferenciaCegaService.updateOT({

                IDRESUMOOT: value.IDRESUMOOT,
                IDPRODUTO: value.IDPRODUTO,
                IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                IDEMPRESADESTINO: value.IDEMPRESADESTINO,
                IDOPERADOREXPEDICAO: value.IDOPERADOREXPEDICAO,
                NUTOTALITENS: value.NUTOTALITENS,
                QTDTOTALITENS: value.QTDTOTALITENS,
                QTDTOTALITENSRECEPCIONADO: value.QTDTOTALITENSRECEPCIONADO,
                QTDTOTALITENSDIVERGENCIA: value.QTDTOTALITENSDIVERGENCIA,
                NUTOTALVOLUMES: value.NUTOTALVOLUMES,
                TPVOLUME: value.TPVOLUME,
                VRTOTALCUSTO: value.VRTOTALCUSTO,
                VRTOTALVENDA: value.VRTOTALVENDA,
                DTRECEPCAO: value.DTRECEPCAO,
                IDOPERADORRECEPTOR: value.IDOPERADORRECEPTOR,
                DSOBSERVACAO: value.DSOBSERVACAO,
                IDUSRCANCELAMENTO: value.IDUSRCANCELAMENTO,
                IDSTDIVERGENCIA: value.IDSTDIVERGENCIA,
                OBSDIVERGENCIA: value.OBSDIVERGENCIA,
                STEMISSAONFE: value.STEMISSAONFE,
                NUMERONFE: value.NUMERONFE,
                STENTRADAINVENTARIO: value.STENTRADAINVENTARIO,
                QTDCONFERENCIA: value.QTDCONFERENCIA,
                IDSTATUSOT: value.IDSTATUSOT,
                IDUSRAJUSTE: value.IDUSRAJUSTE,
                DTAJUSTE: value.DTAJUSTE,
                QTDTOTALITENSAJUSTE: value.QTDTOTALITENSAJUSTE,
                dadosdetalheot,
            });

            return res.status(200).json(response);
        } catch (error) {

            console.error("Erro no ConferenciaCegaController.putResumoOrdemTransferencia:", error);
            res.status(500).json({ error: "Erro ao atualizar ot" });
            throw error;
        }
    }

}

export default new ConferenciaCegaControllers();