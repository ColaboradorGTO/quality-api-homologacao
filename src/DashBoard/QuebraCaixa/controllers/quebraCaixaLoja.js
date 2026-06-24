import axios from "axios";
import 'dotenv/config';
import updateStatusQuebraCaixaSchema from "../schema/updateStatusQuebraCaixaSchema.js";
import { QuebraCaixaServices } from "../service/index.js";
import { QuebraCaixaClient } from "../client/index.js";
import updateQuebraCaixaSchema from "../schema/updateQuebraCaixaSchema.js";
import updateConferirQuebraCaixaSchema from "../schema/updateConferirQuebraCaixa.js";
import createQuebraCaixaSchema from "../schema/createQuebraCaixaSchema.js";
const url = process.env.API_URL;

const quebraCaixaClient = new QuebraCaixaClient(url)
const quebraCaixaService = new QuebraCaixaServices(quebraCaixaClient);

class QuebraCaixaControllers {
    async getListaQuebraCaixaResumoADM(req, res) {
        let { idEmpresa, dataPesquisa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';

        try {
            const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaQuebraCaixa(req, res) {
        let { idMarca, idEmpresa, cpfOperadorQuebra, uf, stQuebraPositivaNegativa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';
        uf = uf ? uf : '';
        stQuebraPositivaNegativa = stQuebraPositivaNegativa ? stQuebraPositivaNegativa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}&stQuebraPositivaNegativa=${stQuebraPositivaNegativa}&uf=${uf}`;
            // const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}&stQuebraPositivaNegativa=${stQuebraPositivaNegativa}&uf=${uf}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no QuebraCaixaControllers.getListaQuebraCaixa:", error);
            throw error;
        }

    }

    async getQuebraCaixaID(req, res) {
        let { idQuebraCaixa, page, pageSize } = req.query;

        idQuebraCaixa = idQuebraCaixa ? idQuebraCaixa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/quebra-caixa.xsjs?id=${idQuebraCaixa}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaQuebraCaixaPositiva(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, quebra, idMarca, cpfOperadorQuebra } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        quebra = quebra ? quebra : '';
        idMarca = idMarca ? idMarca : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=1000&page=1&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stQuebraPositivaNegativa=${quebra}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaQuebraCaixaNegativa(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, quebra, idMarca, cpfOperadorQuebra } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        quebra = quebra ? quebra : '';
        idMarca = idMarca ? idMarca : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';


        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=1000&page=1&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stQuebraPositivaNegativa=${quebra}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getRetornoTableImprimeQuebra(req, res) {
        let { idQuebraCaixa } = req.query;

        if (!isNaN(idQuebraCaixa)) {
            idQuebraCaixa = Number(idQuebraCaixa)

            try {
                const apiUrl = `${url}/api/dashboard/quebra-caixa/quebra-caixa.xsjs?id=${idQuebraCaixa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Error no DashBoardControllers.getRetornoTableImprimeQuebra:", error);
                return res.status(500).json({ error: error.message });

            }
        }

    }

    async putStatusQuebraCaixaLoja(req, res) {
        try {

            const { error, value } = updateStatusQuebraCaixaSchema.validate(req.body, {
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

            const response = await quebraCaixaService.updateStatusQuebraCaixa({

                STATIVO: value.STATIVO,
                IDQUEBRACAIXA: value.IDQUEBRACAIXA

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putStatusQuebraCaixaLoja:", error);
            res.status(500).json({ error: "Erro ao criar  putStatusQuebraCaixaLoja" });
        }
    }


    async putListaStatusQuebraCaixa(req, res) {
        try {

            const { error, value } = updateStatusQuebraCaixaSchema.validate(req.body, {
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

            const response = await quebraCaixaService.updateStatusQuebraCaixa({

                STATIVO: value.STATIVO,
                IDQUEBRACAIXA: value.IDQUEBRACAIXA

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putStatusQuebraCaixaLoja:", error);
            res.status(500).json({ error: "Erro ao criar  putStatusQuebraCaixaLoja" });
        }
    }


    async putQuebraCaixa(req, res) {
        try {

            const { error, value } = updateQuebraCaixaSchema.validate(req.body, {
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

            const response = await quebraCaixaService.updateQuebraCaixa({

                IDCAIXAWEB: value.IDCAIXAWEB,
                IDMOVIMENTOCAIXA: value.IDMOVIMENTOCAIXA,
                IDGERENTE: value.IDGERENTE,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                DTLANCAMENTO: value.DTLANCAMENTO,
                VRQUEBRASISTEMA: value.VRQUEBRASISTEMA,
                VRQUEBRAEFETIVADO: value.VRQUEBRAEFETIVADO,
                TXTHISTORICO: value.TXTHISTORICO,
                STATIVO: value.STATIVO,
                IDQUEBRACAIXA: value.IDQUEBRACAIXA

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putQuebraCaixa:", error);
            res.status(500).json({ error: "Erro ao atualizar putQuebraCaixa" });
        }
    }


    async putConferirQuebraCaixa(req, res) {
        try {

            const { error, value } = updateConferirQuebraCaixaSchema.validate(req.body, {
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

            const response = await quebraCaixaService.updateConferirQuebraCaixa({

                IDQUEBRACAIXA: value.IDQUEBRACAIXA,
                STCONFERIDO: value.STCONFERIDO,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putConferirQuebraCaixa:", error);
            res.status(500).json({ error: "Erro ao atualizar putConferirQuebraCaixa" });
        }
    }

    /*     async putConferirQuebraCaixa(req, res) {
    
            try {
                let {
                    IDQUEBRACAIXA,
                    STCONFERIDO,
                    IDFUNCIONARIO,
                } = req.body;
    
                if (!IDQUEBRACAIXA) {
                    return res.status(400).json({ error: "IDQUEBRACAIXA is required." });
                }
    
                if (!IDFUNCIONARIO) {
                    return res.status(400).json({ error: "IDFUNCIONARIO is required." });
                }
    
                // const response = await axios.put(`${url}/api/financeiro/quebra-caixa-conferencia.xsjs`, {
                const response = await axios.put(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/quebra-caixa-conferencia.xsjs`, {
                    IDQUEBRACAIXA,
                    STCONFERIDO,
                    IDFUNCIONARIO
                });
                return res.json(response.data);
            } catch (error) {
                console.error("Erro no QuebraCaixaControllers.putConferirQuebraCaixa:", error);
                return res.status(500).json({ error: error.message });
            }
    
        } */


    async postQuebraCaixa(req, res) {
        try {

            const { error, value } = createQuebraCaixaSchema.validate(req.body, {
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

            const response = await quebraCaixaService.createQuebraCaixa({

                IDCAIXAWEB: value.IDCAIXAWEB,
                IDMOVIMENTOCAIXA: value.IDMOVIMENTOCAIXA,
                IDGERENTE: value.IDGERENTE,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                DTLANCAMENTO: value.DTLANCAMENTO,
                VRQUEBRASISTEMA: value.VRQUEBRASISTEMA,
                VRQUEBRAEFETIVADO: value.VRQUEBRAEFETIVADO,
                TXTHISTORICO: value.TXTHISTORICO,
                STATIVO: value.STATIVO
            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putConferirQuebraCaixa:", error);
            res.status(500).json({ error: "Erro ao atualizar putConferirQuebraCaixa" });
        }
    }

}

export default new QuebraCaixaControllers();
