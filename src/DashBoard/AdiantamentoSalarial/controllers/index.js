import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import updateAdiantamentoStatusSchema from "../schema/updateAdiantamentoStatus.js";
import { AdiantamentoServices } from "../service/index.js";
import updateAdiantamentoSalarialSchema from "../schema/updateAdiantamentoSalarialSchema.js";
import createAdiantamentoSalarialSchema from "../schema/createAdiantamentoSalarialSchema.js";
import { AdiantamentoClient } from "../client/index.js";
const url = process.env.API_URL;

const adiantamentoClient = new AdiantamentoClient(url)
const adiantamentoService = new AdiantamentoServices(adiantamentoClient);

class DashBoardAdiantamentoControllers {

    async getListaAdiantamentoSalarialLoja(req, res) {
        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {

            const apiUrl = `${url}/api/dashboard/adiantamento-salarial/adiantamentolojas.xsjs?idEmpresa=${idEmpresa}&dataPesquisaIni=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&pageSize=${pageSize}&page=${page}`;

            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaAdiantamentosFuncionarios(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {

            const apiUrl = `${url}/api/dashboard/adiantamento-salarial/funcionarios.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&pageSize=${pageSize}&page=${page}`;

            const response = await axios.get(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("Error in DashBoardAdiantamentoSalarialControllers.getListaAdiantamentosFuncionarios:", error);
            throw error;
        }
    }

    async getListaAdiantamentosSalarialDashBoard(req, res) {
        let { idEmpresa, dataPesquisa, pageSize, page } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data)
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListAdiantamentoLoja(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial/funcionarios.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListAdiantamentoSalarialData(req, res) {
        let { idEmpresa, pageNumber, dataPesquisa } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataFormatada(dataPesquisa) ? dataFormatada(dataPesquisa) : '';

        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getAdiantamentoSalarialFuncionario(req, res) {
        let { idFuncionario } = req.query;
        try {
            const apiUrl = `${url}/api/adiantamento-salarial.xsjs?id=${idFuncionario}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DashBoardControllers.getAdiantamentoSalarialFuncionario:", error);
            throw error;
        }
    }


    async putAdiantamentoStatus(req, res) {
        try {

            const { error, value } = updateAdiantamentoStatusSchema.validate(req.body, {
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

            const response = await adiantamentoService.updateAdiantamentoStatus({

                STATIVO: value.STATIVO,
                IDADIANTAMENTOSALARIO: value.IDADIANTAMENTOSALARIO

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putAdiantamentoStatus:", error);
            res.status(500).json({ error: "Erro ao criar  putAdiantamentoStatus" });
        }
    }

    async putAdiantamentoSalarial(req, res) {
        try {

            const { error, value } = updateAdiantamentoSalarialSchema.validate(req.body, {
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

            const response = await adiantamentoService.updateAdiantamentoSalarial({

                IDEMPRESA: value.IDEMPRESA,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                TXTMOTIVO: value.TXTMOTIVO,
                VRVALORDESCONTO: value.VRVALORDESCONTO,
                DTLANCAMENTO: value.DTLANCAMENTO,
                STATIVO: value.STATIVO,
                IDUSR: value.IDUSR,
                IDADIANTAMENTOSALARIO: value.IDADIANTAMENTOSALARIO

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no putAdiantamentoSalarial:", error);
            res.status(500).json({ error: "Erro ao criar  putAdiantamentoSalarial" });
        }
    }

    async postAdiantamentoSalarial(req, res) {
        try {

            const { error, value } = createAdiantamentoSalarialSchema.validate(req.body, {
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

            const response = await adiantamentoService.createAdiantamentoSalarial({

                IDEMPRESA: value.IDEMPRESA,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                DTLANCAMENTO: value.DTLANCAMENTO,
                TXTMOTIVO: value.TXTMOTIVO,
                VRVALORDESCONTO: value.VRVALORDESCONTO,
                STATIVO: value.STATIVO,
                IDUSR: value.IDUSR

            });

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no postAdiantamentoSalarial:", error);
            res.status(500).json({ error: "Erro ao criar  postAdiantamentoSalarial" });
        }
    }

    /*     async postAdiantamentoSalarial(req, res) {
            try {
                let { IDEMPRESA, IDFUNCIONARIO, DTLANCAMENTO, TXTMOTIVO, VRVALORDESCONTO, STATIVO, IDUSR } = req.body;
                // const response = await createAdiantamentoSalarial(dados)
                if (!IDEMPRESA) {
                    return res.status(400).json({ error: "IDEMPRESA is required." });
                }
    
                if (!IDFUNCIONARIO) {
                    return res.status(400).json({ error: "IDFUNCIONARIO is required." });
                }
    
                if (!DTLANCAMENTO) {
                    return res.status(400).json({ error: "DTLANCAMENTO is required." });
                }
    
                if (!TXTMOTIVO) {
                    return res.status(400).json({ error: "TXTMOTIVO is required." });
                }
    
                if (!VRVALORDESCONTO) {
                    return res.status(400).json({ error: "VRVALORDESCONTO is required." });
                }
    
                if (!STATIVO) {
                    return res.status(400).json({ error: "STATIVO is required." });
                }
    
                if (!IDUSR) {
                    return res.status(400).json({ error: "IDUSR is required." });
                }
    
                const response = await axios.post(`${url}/api/adiantamento-salarial.xsjs`, [{
                    IDEMPRESA,
                    IDFUNCIONARIO,
                    DTLANCAMENTO,
                    TXTMOTIVO,
                    VRVALORDESCONTO,
                    STATIVO,
                    IDUSR
                }]);
    
                return res.json(response.data);
            } catch (error) {
                console.error("Error in DashBoardAdiantamentoSalarialControllers.postAdiantamentoSalarial:", error);
                throw error;
            }
        } */
}

export default new DashBoardAdiantamentoControllers();