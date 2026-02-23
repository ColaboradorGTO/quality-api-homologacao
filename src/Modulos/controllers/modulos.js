import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class ModulosControllers  {
     
     async getListaPerfilUsuario(req, res) {
        let { idUsuario, page, pageSize, idMenuPai, idPerfil } = req.query;
            idUsuario = idUsuario ? idUsuario : '';
            idMenuPai = idMenuPai ? idMenuPai : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            idPerfil = idPerfil ? idPerfil : '';
        try {
            
            const apiUrl = `${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs?idUsuario=${idUsuario}&idPerfil=${Number(idPerfil)}`;
            // const apiUrl = `http://164.152.245.77:8000/quality/concentrador/api/perfilUsuario/perfilUsuarioMenu.xsjs?idUsuario=${idUsuario}&idPerfil=${Number(idPerfil)}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna
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
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMenusFilhosUsuario(req, res) {
        let { idMenuFilho, idUsuario, idPerfil } = req.query;
        idPerfil = idPerfil ? idPerfil : '';
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idUsuario = idUsuario ? idUsuario : '';
        try {   
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenuFilho.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}&idPerfil=${idPerfil}` )

            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }

    // async getListaModulos(req, res) {
    //     let { idPerfil } = req.query;
    
    //     // Converte idPerfil para número ou array de números
    //     idPerfil = idPerfil ? (Array.isArray(idPerfil) ? idPerfil.map(Number) : Number(idPerfil)) : '';

    
    //     try {
    //         const response = await getModulos(idPerfil);
    //         return res.json(response); // Retorna
    //     } catch (error) {
    //         console.error("Unable to connect to the database:", error);
    //         throw error;
    //     }
    // }
    

    async getListaMenusFilhosUsuarioPermissao(req, res) {
        let { idMenuFilho, idUsuario } = req.query;
    
        idMenuFilho = idMenuFilho ? idMenuFilho : '';
        idUsuario = idUsuario ? idUsuario : '';
        try {   
            const response = await axios.get(`${url}/api/perfilUsuario/perfilUsuarioMenuFilho.xsjs?idUsuario=${idUsuario}&idMenuFilho=${idMenuFilho}` )

            return res.json(response.data); // Retorna
        } catch(error) {
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
        } catch(error) {
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
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }

    async putPerfilUsuarioMenu(req, res) {
        try {
            let {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            } = req.body 
         
            const response = await axios.put(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            });
            
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ModulosControllers.putPerfilUsuarioMenu: ", error);
            throw error;
        }
    }

    async postPerfilUsuarioMenu(req, res) {
        try {
            let {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            } = req.body 
         
            // const response = await axios.post(`http://164.152.245.77:8000/quality/concentrador/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
            const response = await axios.post(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
                IDUSUARIO,
                CRIAR,
                ALTERAR,
                STATIVO,
                DATAULTIMAALTERACAO,
                DATA_CRIACAO,
                IDMODULO,
                IDMODULOADMINISTRATIVO,
                IDMODULOCOMERCIAL,
                IDMODULOCONTABILIDADE,
                IDMODULOFINANCEIRO,
                IDMODULOGERENCIA,
                IDMODULOINFORMATICA,
                IDMODULOMARKETING,
                IDMODULOCOMPRAS,
                IDMODULOCADASTRO,
                IDMODULOEXPEDICAO,
                IDMODULOCOMPRASADM,
                IDMODULOETIQUETAGEM,
                IDMODULOCONFERENCIACEGA,
                IDMODULOVOUCHER,
                IDMODULOMALOTE,
                IDMODULORH,
                IDUSERULTIMAALTERACAO,
                IDPERMISSAO,
                IDMODULORESUMOVENDAS,
                IDMODULOPROMOCAO,
                ADMINISTRADOR,
                N4,
                N3,
                N2,
                N1,
                IDMENU,
                IDMENUFILHO,
            });
          
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ModulosControllers.putPerfilUsuarioMenu: ", error);
            throw error;
        }
    }

    // async putPerfilPermissoes(req, res) {
    //     try {
    //         const dados = Array.isArray(req.body) ? req.body : [req.body]; 
    //         // console.log("dados", dados)
    //         const response = await updatePerfil(dados)
    //         // console.log("response", response)
    //         return res.json(response);
    //     } catch (error) {
    //         console.error("Erro no ModulosControllers. putPerfilPermissoesu: ", error);
    //         throw error;
    //     }
    // }

}

export default new ModulosControllers();