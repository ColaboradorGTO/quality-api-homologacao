import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

import { RelatorioBiClient } from "../client/index.js"
import { RelatorioBIService } from "../service/index.js"
import { linkRelatorioBiSchema } from "../schema/index.js";
import { relatorioBiSchema } from "../schema/schemaRelatorioBi.js";
import { putRelatorioBiSchema } from "../schema/putSchemaRelatorioBi.js";

const relatorioBiClient = new RelatorioBiClient(url);
const relatorioBIService = new RelatorioBIService(relatorioBiClient);

class RelatorioBiController {

    async getListaLinkRelatorioBI(req, res) {
        let { idRelatorio, idEmpresa, page, pageSize, idLoja } = req.query;

        idRelatorio = idRelatorio ? idRelatorio : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        idLoja = idLoja ? idLoja : '';

        try {

            const apiUrl = `${url}/api/informatica/linkrelatoriobi.xsjs?id=${idRelatorio}&idfilial=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaRelatorioBI(req, res) {
        let { idRelatorio, status, page, pageSize } = req.query;

        try {
            idRelatorio = idRelatorio ? idRelatorio : '';
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/relatoriobi.xsjs?id=${idRelatorio}&status=${status}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postLinkRelatorioBi(req, res) {
        try {
            const { error, value } = linkRelatorioBiSchema.validate(req.body, {
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

            const response = await relatorioBIService.createLinkRelatorioBi({
                IDRELATORIOBI: value.IDRELATORIOBI,
                IDEMPRESA: value.IDEMPRESA,
                LINK: value.LINK,
                STATIVO: value.STATIVO
            });
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error no LinkRelatorioBiController.postLinkRelatorioBi:', error);
            return res.status(500).json({ error: 'Error no servidor' });
        }
    }

    async putLinkRelatorioBi(req, res) {
        try {
            const { error, value } = linkRelatorioBiSchema.validate(req.body, {
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

            const response = await relatorioBIService.createLinkRelatorioBi({
                IDRELATORIOBI: value.IDRELATORIOBI,
                IDEMPRESA: value.IDEMPRESA,
                LINK: value.LINK,
                STATIVO: value.STATIVO,
                IDRELATORIOBIANTIGO: value.IDRELATORIOBIANTIGO
            });
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error no LinkRelatorioBiController.putLinkRelatorioBi:', error);
            return res.status(500).json({ error: 'Error no servidor' });
        }
    }

    async postRelatorioBi(req, res) {

        try {
            const { error, value } = relatorioBiSchema.validate(req.body, {
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

            const response = await relatorioBIService.createRelatorioBi({
                DSRELATORIOBI: value.DSRELATORIOBI,
                STATIVO: value.STATIVO,
            });
            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no RelatorioBIController.postRelatorioBi:", error);
            return res.status(500).json({ error: 'Erro no servidor' });
        }

    }

    async putRelatorioBi(req, res) {
        try {
            const { error, value } = putRelatorioBiSchema.validate(req.body, {
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

            const response = await relatorioBIService.updateRelatorioBi({
                DSRELATORIOBI: value.DSRELATORIOBI,
                STATIVO: value.STATIVO,
                IDRELATORIOBI: value.IDRELATORIOBI
            });
            return res.status(200).json(response);

        } catch (error) {
            console.error('Erro no RelatorioBiController.putRelatorioBi:', error);
            return res.status(500).json({ error: 'Erro no Servidor' })

        }
    }
}

export default new RelatorioBiController();