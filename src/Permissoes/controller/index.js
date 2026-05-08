import axios from "axios";
import 'dotenv/config';
import { PermissaoClient } from "../client/index.js";
import { PermissaoService } from "../service/index.js";
import atualizarPerfilUsuarioMenuSchema from "../schema/atualizarPerfilUsuarioMenuSchema.js";
import atualizarFuncionarioDepartamentoSchema from "../schema/atualizarFuncionarioDepartamentoSchema.js";
import criarPerfilUsuarioMenuSchema from "../schema/criarPerfilUsuarioMenuSchema.js";
import criarMenuFilhoSchema from "../schema/criarMenuFilhoSchema.js";
import atualizarMenuFilhoSchema from "../schema/atualizarMenuFilhoSchema.js";

const url = process.env.API_URL;
const permissaoClient = new PermissaoClient(url);
const permissaoService = new PermissaoService(permissaoClient);

//const url = 'http://164.152.245.77:8000/quality/concentrador_node';
class PermissaoControllers {

    async getMenuPai(req, res) {
        let { page, pageSize } = req.query;

        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''

        try {
            const apiUrl = `${url}/api/perfilUsuario/menuPai.xsjs/&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no PermissaoControllers.getMenuPai :", error);
            return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
        }
    }

    async getListaMenusFilhos(req, res) {
        let { idMenuFilho, idMenuPai } = req.query;
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idMenuPai = idMenuPai ? idMenuPai : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/menuFilhos.xsjs?id=${idMenuFilho}&idMenuPai=${idMenuPai}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putPerfilUsuarioMenu(req, res) {
        try {
            const { error, value } = atualizarPerfilUsuarioMenuSchema.validate(req.body, {
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

            const response = await permissaoService.updatePerfilUsuarioMenu(

                value.IDUSUARIO,
                value.CRIAR,
                value.ALTERAR,
                value.STATIVO,
                value.DATAULTIMAALTERACAO,
                value.DATA_CRIACAO,
                String(value.IDMODULO),
                String(value.IDMODULOADMINISTRATIVO),
                String(value.IDMODULOCOMERCIAL),
                String(value.IDMODULOCONTABILIDADE),
                String(value.IDMODULOFINANCEIRO),
                String(value.IDMODULOGERENCIA),
                String(value.IDMODULOINFORMATICA),
                String(value.IDMODULOMARKETING),
                String(value.IDMODULOCOMPRAS),
                String(value.IDMODULOCADASTRO),
                String(value.IDMODULOEXPEDICAO),
                String(value.IDMODULOCOMPRASADM),
                String(value.IDMODULOETIQUETAGEM),
                String(value.IDMODULOCONFERENCIACEGA),
                String(value.IDMODULOVOUCHER),
                String(value.IDMODULOMALOTE),
                String(value.IDMODULORH),
                String(value.IDUSERULTIMAALTERACAO),
                String(value.IDPERMISSAO),
                String(value.IDMODULORESUMOVENDAS),
                String(value.IDMODULOPROMOCAO),
                String(value.ADMINISTRADOR),
                value.N4,
                value.N3,
                value.N2,
                value.N1,
                value.IDMENU,
                value.IDMENUFILHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PermissaoControllers.putPerfilUsuarioMenu:', error);
            return res.status(500).json({ message: 'Erro no PermissaoControllers.putPerfilUsuarioMenu' });
        }
    }

    async putFuncionarioDepartamento(req, res) {
        try {
            const { error, value } = atualizarFuncionarioDepartamentoSchema.validate(req.body, {
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

            const response = await permissaoService.updateFuncionarioDepartamento(
                value.ID,
                value.DEPARTAMENTO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PermissaoControllers.putFuncionarioDepartamento:', error);
            return res.status(500).json({ message: 'Erro no PermissaoControllers.putFuncionarioDepartamento' });
        }
    }

    async postPerfilUsuarioMenu(req, res) {
        try {
            const { error, value } = criarPerfilUsuarioMenuSchema.validate(req.body, {
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

            const response = await permissaoService.createPerfilUsuarioMenu(

                value.IDUSUARIO,
                value.CRIAR,
                value.ALTERAR,
                value.STATIVO,
                value.DATAULTIMAALTERACAO,
                value.DATA_CRIACAO,
                String(value.IDMODULO),
                String(value.IDMODULOADMINISTRATIVO),
                String(value.IDMODULOCOMERCIAL),
                String(value.IDMODULOCONTABILIDADE),
                String(value.IDMODULOFINANCEIRO),
                String(value.IDMODULOGERENCIA),
                String(value.IDMODULOINFORMATICA),
                String(value.IDMODULOMARKETING),
                String(value.IDMODULOCOMPRAS),
                String(value.IDMODULOCADASTRO),
                String(value.IDMODULOEXPEDICAO),
                String(value.IDMODULOCOMPRASADM),
                String(value.IDMODULOETIQUETAGEM),
                String(value.IDMODULOCONFERENCIACEGA),
                String(value.IDMODULOVOUCHER),
                String(value.IDMODULOMALOTE),
                String(value.IDMODULORH),
                String(value.IDUSERULTIMAALTERACAO),
                String(value.IDPERMISSAO),
                String(value.IDMODULORESUMOVENDAS),
                String(value.IDMODULOPROMOCAO),
                String(value.ADMINISTRADOR),
                value.N4,
                value.N3,
                value.N2,
                value.N1,
                value.IDMENU,
                value.IDMENUFILHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PermissaoControllers.postPerfilUsuarioMenu:', error);
            return res.status(500).json({ message: 'Erro no PermissaoControllers.postPerfilUsuarioMenu' });

        }
    }

    async postCriarMenuFilho(req, res) {
        try {
            const { error, value } = criarMenuFilhoSchema.validate(req.body, {
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

            const response = await permissaoService.createMenuFilho(

                value.DSNOME,
                value.IDMENUPAI,
                value.URL,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PermissaoControllers.postCriarMenuFilho:', error);
            return res.status(500).json({ message: 'Erro no PermissaoControllers.postCriarMenuFilho' });

        }
    }

    async putAtualizarMenuFilho(req, res) {
        try {
            const { error, value } = atualizarMenuFilhoSchema.validate(req.body, {
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

            const response = await permissaoService.updateMenuFilho(
                value.ID,
                value.DSNOME,
                value.IDMENUPAI,
                value.URL,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PermissaoControllers.putAtualizarMenuFilho:', error);
            return res.status(500).json({ message: 'Erro no PermissaoControllers.putAtualizarMenuFilho' });

        }
    }
}

export default new PermissaoControllers();