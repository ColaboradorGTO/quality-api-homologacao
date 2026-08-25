import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
import createDespesaLojaSchema from "../schema/createDespesaLoja.js";
import updateDespesasLojaSchema from "../schema/updateDespesasLoja.js";
import { DespesasLojaClient } from "../client/index.js";
import { DespesasLojaServices } from "../service/index.js";

const url = process.env.API_URL;
const despesasLojaClient = new DespesasLojaClient(url);
const despesasLojaService = new DespesasLojaServices(despesasLojaClient);

class DespesasLojaControllers {

    async getListaDespesasLojaEmpresa(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {
           
            const apiUrl = `${url}/api/despesa-loja/empresa.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.getListaDespesasLojaEmpresa:", error);
            throw error;
        }

    }

    async getListaDespesasEmpresaGerencia(req, res) {
        let { idEmpresa, dataPesquisa, } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';

        try {
            const apiUrl = `${url}/api/despesa-loja/empresa.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaTodasDespesasLojas(req, res) {
        let { idDespesas, pageSize, page } = req.query;

        try {
            idDespesas = idDespesas ? idDespesas : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            const apiUrl = `${url}/api/despesa-loja/todos.xsjs?id=${idDespesas}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.getListaTodasDespesasLojas:", error);
            throw error;
        }

    }

    async getListaDespesasLojaDashBoard(req, res) {
        let { idDespesaLoja, idEmpresa, dataPesquisa, page, pageSize } = req.query;

        idDespesaLoja = Number(idDespesaLoja) ? Number(idDespesaLoja) : '';
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        dataPesquisa = dataFormatada(dataPesquisa) ? dataFormatada(dataPesquisa) : '';
        page = Number(page) ? Number(page) : '';
        pageSize = Number(pageSize) ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/dashboard/despesa-loja.xsjs?idDespesaLoja=${idDespesaLoja}&idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
    
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async putDespesasLoja(req, res) {
        try {
            const despesas = Array.isArray(req.body) ? req.body : [req.body];

            const { error, value } = updateDespesasLojaSchema.validate(despesas, {
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

            const response = await despesasLojaService.updateDespesasLoja({
                despesas: value,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.putDespesasLoja:", error);
            res.status(500).json({ error: "Erro ao atualizar despesa loja" });
            throw error;
        }

    }

    async postCadastrarDespesasLoja(req, res) {
        try {
            const { error, value } = createDespesaLojaSchema.validate(req.body, {
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

            const response = await despesasLojaService.createDespesaLoja({
                IDEMPRESA: value.IDEMPRESA,
                IDUSR: value.IDUSR,
                DTDESPESA: value.DTDESPESA,
                IDCATEGORIARECEITADESPESA: value.IDCATEGORIARECEITADESPESA,
                DSHISTORIO: value.DSHISTORIO,
                DSPAGOA: value.DSPAGOA,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                TPNOTA: value.TPNOTA,
                NUNOTAFISCAL: value.NUNOTAFISCAL,
                VRDESPESA: value.VRDESPESA,
                STATIVO: value.STATIVO,
                STCANCELADO: value.STCANCELADO,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.postCadastrarDespesasLoja:", error);
            res.status(500).json({ error: "Erro ao cadastrar despesa loja" });
            throw error;
        }
    }
}

export default new DespesasLojaControllers();
