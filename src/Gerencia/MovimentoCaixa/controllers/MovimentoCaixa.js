import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import { MovimentoCaixaClient } from "../client/index.js";
import { MovimentoCaixaService } from "../services/index.js";
import schemaAtualizarStatus from "../schema/schemaListaAtualizarStatus.js";
import schemaListaAjusteRecebimento from "../schema/schemaListaAjusteRecebimento.js";

const movimentoCaixaClient = new MovimentoCaixaClient(process.env.API_URL);
const movimentoCaixaService = new MovimentoCaixaService(movimentoCaixaClient);
//const url = 'http://164.152.245.77:8000/quality/concentrador_node';
const url = process.env.API_URL;

class MovimentoCaixaControllers {

    async getlistaCaixasMovimentojuste(req, res) {
        let { idEmpresa, pageNumber, dataPesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesq = dataFormatada(dataPesq)
            try {
                const apiUrl = `${url}/api/movimento-caixa/ajuste-fisicodinheiro.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&offset=${offset}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getlistaAjusteMovimentoCaixa(req, res) {

        let { idMovimentoCaixa } = req.query;
        if (!isNaN(idMovimentoCaixa)) {
            idMovimentoCaixa = Number(idMovimentoCaixa);

            try {
                const apiUrl = `${url}/api/movimento-caixa/gerencia.xsjs?idMovimentoCaixa=${idMovimentoCaixa}`
                const response = await axios.get(apiUrl)


                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getlistaCaixasMovimentoGerencia(req, res) {

        let { idEmpresa, idMovimentoCaixa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = Number(idEmpresa) ? idEmpresa : '';
        idMovimentoCaixa = idMovimentoCaixa ? idMovimentoCaixa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

        try {
            const apiUrl = `${url}/api/movimento-caixa/gerencia.xsjs?idEmpresa=${idEmpresa}&idMovimentoCaixa=${idMovimentoCaixa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no MovimentoCaixaControllers.listaCaixasMovimentoGerencia:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async getListaFechamentoCaixa(req, res) {
        let { idEmpresa, idMovimentoCaixa, idCaixa, dataPesquisa, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        idMovimentoCaixa = idMovimentoCaixa ? idMovimentoCaixa : '';
        idCaixa = idCaixa ? idCaixa : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {

            const apiUrl = `${url}/api/movimento-caixa/fechamento-caixa.xsjs?idMovimentoCaixa=${idMovimentoCaixa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no MovimentoCaixaControllers.getListaFechamentoCaixa:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putListaAtualizacaoStatus(req, res) {
        try {
            const { error, value } = schemaAtualizarStatus.validate(req.body, {
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

            const response = await movimentoCaixaService.updateStatus(
                value.IDSUPERVISOR,
                value.STCONFERIDO,
                value.ID
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MovimentoCaixaControllers.putListaAtualizacaoStatus:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    async putListaAjusteRecebimento(req, res) {
        try {
            const { error, value } = schemaListaAjusteRecebimento.validate(req.body, {
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

            const response = await movimentoCaixaService.updateListaAjusteRecebimento(
                value.TXT_OBS,
                value.VRAJUSTDINHEIRO,
                value.VRAJUSTTEF,
                value.VRAJUSTPOS,
                value.VRAJUSTCONVENIO,
                value.VRAJUSTVOUCHER,
                value.VRAJUSTFATURA,
                value.VRAJUSTPIX,
                value.VRAJUSTPL,
                value.VRQUEBRACAIXA,
                value.ID
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MovimentoCaixaControllers.putListaAjusteRecebimento:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });
        }
    }
}

export default new MovimentoCaixaControllers();