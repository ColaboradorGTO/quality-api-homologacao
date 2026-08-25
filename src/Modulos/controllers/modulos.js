import axios from "axios";
import { ModulosClient } from '../client/index.js';
import { ModulosService } from '../service/index.js';
import createPerfilUsuarioMenuSchema from '../schema/createPerfilUsuarioMenu.js';
import updatePerfilUsuarioMenuSchema from '../schema/updatePerfilUsuarioMenu.js';
import updateFuncionarioDepartamentoSchema from '../schema/updateFuncionarioDepartamento.js';
import 'dotenv/config';
const url = process.env.API_URL;
const modulosClient = new ModulosClient(url);
const modulosService = new ModulosService(modulosClient);


class ModulosControllers {

    async getListaPerfilUsuario(req, res) {
        let { idUsuario, page, pageSize, idMenuPai, idPerfil } = req.query;
        idUsuario = idUsuario ? idUsuario : '';
        idMenuPai = idMenuPai ? idMenuPai : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        idPerfil = idPerfil ? idPerfil : '';
        try {

            const apiUrl = `${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs?idUsuario=${idUsuario}&idPerfil=${Number(idPerfil)}`;

            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusPorUsuario(req, res) {
        let { idUsuario, idMenuFilho } = req.query;

        idUsuario = idUsuario ? idUsuario : '';
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        try {

            const apiUrl = `${url}/api/perfilUsuario/menus-usuario-exececao.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}`;
            const response = await axios.get(apiUrl);


            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no ModulosControllers.getListaMenusPorUsuario:", error);
            throw error;
        }
    }

    async getListaMenusFilhosUsuario(req, res) {
        let { idMenuFilho, idUsuario, idPerfil } = req.query;
        idPerfil = idPerfil ? idPerfil : '';
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idUsuario = idUsuario ? idUsuario : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenuFilho.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}&idPerfil=${idPerfil}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusFilhosUsuarioPermissao(req, res) {
        let { idMenuFilho, idUsuario } = req.query;

        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idUsuario = idUsuario ? idUsuario : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenuFilho.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusUsuario(req, res) {
        let { idMenu, idModulo, dsModulo } = req.query;

        idMenu = idMenu ? idMenu : '';
        idModulo = idModulo ? idModulo : '';
        dsModulo = dsModulo ? dsModulo : '';
        try {
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs?idMenu=${idMenu}&idModulo=${idModulo}&dsModulo=${dsModulo}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaSubMenusUsuario(req, res) {
        let { idSubMenus, idMenu, idPerfil, idModulo, dsModulo } = req.query;
        idSubMenus = idSubMenus ? idSubMenus : '';
        idMenu = idMenu ? idMenu : '';
        idPerfil = idPerfil ? idPerfil : '';
        idModulo = idModulo ? idModulo : '';
        dsModulo = dsModulo ? dsModulo : '';
        try {

            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioSubMenu.xsjs?idSubMenus=${idSubMenus}&idMenu=${idMenu}&idPerfil=${idPerfil}&idModulo=${idModulo}&dsModulo=${dsModulo}`);
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putPerfilUsuarioMenu(req, res) {
        try {
            const { error, value } = updatePerfilUsuarioMenuSchema.validate(req.body, {
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

            const response = await modulosService.updatePerfilUsuarioMenu({
                IDUSUARIO: value.IDUSUARIO,
                CRIAR: value.CRIAR,
                ALTERAR: value.ALTERAR,
                STATIVO: value.STATIVO,
                DATAULTIMAALTERACAO: value.DATAULTIMAALTERACAO,
                DATA_CRIACAO: value.DATA_CRIACAO,
                IDMODULO: value.IDMODULO,
                IDMODULOADMINISTRATIVO: value.IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL: value.IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE: value.IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO: value.IDMODULOFINANCEIRO,
                IDMODULOGERENCIA: value.IDMODULOGERENCIA,
                IDMODULOINFORMATICA: value.IDMODULOINFORMATICA,
                IDMODULOMARKETING: value.IDMODULOMARKETING,
                IDMODULOCOMPRAS: value.IDMODULOCOMPRAS,
                IDMODULOCADASTRO: value.IDMODULOCADASTRO,
                IDMODULOEXPEDICAO: value.IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM: value.IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM: value.IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA: value.IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER: value.IDMODULOVOUCHER,
                IDMODULOMALOTE: value.IDMODULOMALOTE,
                IDMODULORH: value.IDMODULORH,
                IDUSERULTIMAALTERACAO: value.IDUSERULTIMAALTERACAO,
                IDPERMISSAO: value.IDPERMISSAO,
                IDMODULORESUMOVENDAS: value.IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO: value.IDMODULOPROMOCAO,
                ADMINISTRADOR: value.ADMINISTRADOR,
                N4: value.N4,
                N3: value.N3,
                N2: value.N2,
                N1: value.N1,
                IDMENU: value.IDMENU,
                IDMENUFILHO: value.IDMENUFILHO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ModulosControllers.putPerfilUsuarioMenu: ", error);
            res.status(500).json({ error: 'Erro ao atualizar perfil do usuário' });
            throw error;
        }
    }

    async putFuncionarioDepartamento(req, res) {
        try {
            const { error, value } = updateFuncionarioDepartamentoSchema.validate(req.body, {
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

            const response = await modulosService.updateFuncionarioDepartamento({
                ID: value.ID,
                DEPARTAMENTO: value.DEPARTAMENTO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ModulosControllers.putFuncionarioDepartamento: ", error);
            res.status(500).json({ error: 'Erro ao atualizar departamento do funcionário' });
            throw error;
        }

    }

    async postPerfilUsuarioMenu(req, res) {
        try {
            const { error, value } = createPerfilUsuarioMenuSchema.validate(req.body, {
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

            const response = await modulosService.createPerfilUsuarioMenu({
                IDUSUARIO: value.IDUSUARIO,
                CRIAR: value.CRIAR,
                ALTERAR: value.ALTERAR,
                STATIVO: value.STATIVO,
                DATAULTIMAALTERACAO: value.DATAULTIMAALTERACAO,
                DATA_CRIACAO: value.DATA_CRIACAO,
                IDMODULO: value.IDMODULO,
                IDMODULOADMINISTRATIVO: value.IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL: value.IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE: value.IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO: value.IDMODULOFINANCEIRO,
                IDMODULOGERENCIA: value.IDMODULOGERENCIA,
                IDMODULOINFORMATICA: value.IDMODULOINFORMATICA,
                IDMODULOMARKETING: value.IDMODULOMARKETING,
                IDMODULOCOMPRAS: value.IDMODULOCOMPRAS,
                IDMODULOCADASTRO: value.IDMODULOCADASTRO,
                IDMODULOEXPEDICAO: value.IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM: value.IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM: value.IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA: value.IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER: value.IDMODULOVOUCHER,
                IDMODULOMALOTE: value.IDMODULOMALOTE,
                IDMODULORH: value.IDMODULORH,
                IDUSERULTIMAALTERACAO: value.IDUSERULTIMAALTERACAO,
                IDPERMISSAO: value.IDPERMISSAO,
                IDMODULORESUMOVENDAS: value.IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO: value.IDMODULOPROMOCAO,
                ADMINISTRADOR: value.ADMINISTRADOR,
                N4: value.N4,
                N3: value.N3,
                N2: value.N2,
                N1: value.N1,
                IDMENU: value.IDMENU,
                IDMENUFILHO: value.IDMENUFILHO
            });

            return res.status(201).json(response);
        } catch (error) {
            console.error("Erro no ModulosControllers.postPerfilUsuarioMenu: ", error);
            res.status(500).json({ error: 'Erro ao cadastrar perfil do usuário' });
            throw error;
        }
    }

}

export default new ModulosControllers();
