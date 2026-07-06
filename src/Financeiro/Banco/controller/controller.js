import axios from "axios";
import 'dotenv/config';
import schemaAtualizarContaBanco from "../schema/schemaAtualizarContaBanco.js";
import { BancoClient } from "../client/bancoClient.js";
import { BancoService } from "../service/bancoService.js";
import schemaCriarContaBanco from "../schema/schemaCriarContaBanco.js";

const url = process.env.API_URL;
const bancoClient = new BancoClient(url);
const bancoService = new BancoService(bancoClient);

class BancoControllers {
    async getListaBanco(req, res) {

        try {
            const apiUrl = `${url}/api/banco.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no FinanceiroControllers.getListaBanco:", error);
            throw error;
        }
    }

    async getListaContaBanco(req, res) {
        let { idContaBanco, idBanco, idEmpresa, dsConta, page, pageSize } = req.query;
        idContaBanco = idContaBanco ? idContaBanco : '';
        idBanco = idBanco ? idBanco : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        dsConta = dsConta ? dsConta : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/financeiro/conta-banco.xsjs?id=${idContaBanco}&idBanco=${idBanco}&idEmpresa=${idEmpresa}&dsConta=${dsConta}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error no FinanceiroControllers.getListaContaBanco:", error);
            throw error;
        }
    }

    async putContaBanco(req, res) {

        try {
            const { error, value } = schemaAtualizarContaBanco.validate(req.body, {
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

            const response = await bancoService.updateContaBanco(
                value.IDCONTABANCO,
                value.IDBANCO,
                value.DSCONTABANCO,
                value.NUAGENCIA,
                value.NUDIGITOAGENCIA,
                value.NUCONTA,
                value.NUDIGITOCONTA,
                value.TPPESSOA,
                value.STPADRAO,
                value.STATIVO,
                value.NUCONTASAP,
                value.TPCONTA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no BancoControllers.putContaBanco:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    async postContaBanco(req, res) {

        try {
            const { error, value } = schemaCriarContaBanco.validate(req.body, {
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

            const response = await bancoService.createContaBanco(
                value.IDBANCO,
                value.DSCONTABANCO,
                value.NUAGENCIA,
                value.NUDIGITOAGENCIA,
                value.NUCONTA,
                value.NUDIGITOCONTA,
                value.TPPESSOA,
                value.TPCONTA,
                value.NUCONTASAP
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no BancoControllers.postContaBanco:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }
}

export default new BancoControllers();