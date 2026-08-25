import 'dotenv/config';
import { RecursosHumanosClient } from "../client/index.js";
import { RecursosHumanosServices } from "../service/index.js";
import createFuncionarioLojaSchema from "../schema/createFuncionarioLoja.js";
import upadateInativarFuncionarioSchema from "../schema/updateInativarFuncionario.js";
import updateFuncionarioDescontoSchema from "../schema/updateFuncionarioDesconto.js";
import updateFuncionarioLojaSchema from "../schema/updateFuncionarioLoja.js";

const url = process.env.API_URL;

const recursosHumanosClient = new RecursosHumanosClient(url)
const recursosHumanosService = new RecursosHumanosServices(recursosHumanosClient);

class RecursosHumanosControllers {

    async postFuncionarioLojaRH(req, res) {
        try {

            const { error, value } = createFuncionarioLojaSchema.validate(req.body, {
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

            const response = await recursosHumanosService.createFuncionarioLoja({

                ID: value.ID,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                IDSUBGRUPOEMPRESARIAL: value.IDSUBGRUPOEMPRESARIAL,
                IDEMPRESA: value.IDEMPRESA,
                NOFUNCIONARIO: value.NOFUNCIONARIO,
                NUCPF: value.NUCPF,
                NOLOGIN: value.NOLOGIN,
                PWSENHA: value.PWSENHA,
                DSFUNCAO: value.DSFUNCAO,
                VALORSALARIO: value.VALORSALARIO,
                PERC: value.PERC,
                STATIVO: value.STATIVO,
                DSTIPO: value.DSTIPO,
                VALORDISPONIVEL: value.VALORDISPONIVEL,
                STCONVENIO: value.STCONVENIO,
                STDESCONTOFOLHA: value.STDESCONTOFOLHA,
                STLOJA: value.STLOJA,
                DATA_ADMISSAO: value.DATA_ADMISSAO,
                TELEFONE: value.TELEFONE,
                DEPARTAMENTO: value.DEPARTAMENTO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ControllerRecursosHumanos.postFuncionarioLojaRH", error);
            res.status(500).json({ error: "Erro ao criar postFuncionarioLojaRH" });
            throw error;
        }
    }

    async putFuncionarioLojaRH(req, res) {
        try {

            const { error, value } = updateFuncionarioLojaSchema.validate(req.body, {
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

            const response = await recursosHumanosService.updateFuncionarioLoja({

                DATA_ADMISSAO: value.DATA_ADMISSAO,
                NOFUNCIONARIO: value.NOFUNCIONARIO,
                NUCPF: value.NUCPF,
                NOLOGIN: value.NOLOGIN,
                PWSENHA: value.PWSENHA,
                IDEMPRESA: value.IDEMPRESA,
                IDSUBGRUPOEMPRESARIAL: value.IDSUBGRUPOEMPRESARIAL,
                IDFUNCIONARIO: value.IDFUNCIONARIO,
                DSTIPO: value.DSTIPO,
                PERC: value.PERC,
                VALORSALARIO: value.VALORSALARIO,
                VALORDISPONIVEL: value.VALORDISPONIVEL,
                IDPERFIL: value.IDPERFIL,
                DSFUNCAO: value.DSFUNCAO,
                STCONVENIO: value.STCONVENIO,
                STDESCONTOFOLHA: value.STDESCONTOFOLHA,
                STLOJA: value.STLOJA,
                STATIVO: value.STATIVO,
                IDFUNCIONARIOULTALTERACAO: value.IDFUNCIONARIOULTALTERACAO,
                MOTIVODESC: value.MOTIVODESC,
                ID: value.ID,
                TELEFONE: value.TELEFONE,
                DEPARTAMENTO: value.DEPARTAMENTO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ControllerRecursosHumanos.putFuncionarioLojaRH", error);
            res.status(500).json({ error: "Erro ao atualizar putFuncionarioLojaRH" });
            throw error;
        }
    }

    async putInativarFuncionarioRH(req, res) {
        try {

            const { error, value } = upadateInativarFuncionarioSchema.validate(req.body, {
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

            const response = await recursosHumanosService.updateInativarFuncionario({

                DATAULTIMAALTERACAO: value.DATAULTIMAALTERACAO,
                STATIVO: value.STATIVO,
                DATA_DEMISSAO: value.DATA_DEMISSAO,
                ID: value.ID
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ControllerRecursosHumanos.putInativarFuncionarioRH", error);
            res.status(500).json({ error: "Erro ao atualizar putInativarFuncionarioRH" });
            throw error;
        }
    }

    async putFuncionarioDescontoRH(req, res) {
        try {

            const { error, value } = updateFuncionarioDescontoSchema.validate(req.body, {
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

            const response = await recursosHumanosService.updateFuncionarioDesconto({

                DTINICIODESC: value.DTINICIODESC,
                DTFIMDESC: value.DTFIMDESC,
                PERCDESCUSUAUTORIZADO: value.PERCDESCUSUAUTORIZADO,
                TXTMOTIVODESCONTO: value.TXTMOTIVODESCONTO,
                IDFUNCALTERACAO: value.IDFUNCALTERACAO,
                ID: value.ID
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ControllerRecursosHumanos.putFuncionarioDescontoRH", error);
            res.status(500).json({ error: "Erro ao atualizar putFuncionarioDescontoRH" });
            throw error;
        }
    }
}

export default new RecursosHumanosControllers();
