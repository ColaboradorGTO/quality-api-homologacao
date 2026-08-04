import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class PermissaoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async criarPerfilUsuarioMenu(
        IDUSUARIO,
        CRIAR,
        ALTERAR,
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
        ADMINISTRADOR,
        N4,
        N3,
        N2,
        N1,
        IDMENU,
        IDMENUFILHO,
        IDMODULOPROMOCAO,
    ) {

        const response = await this.api.post(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, [{
            IDUSUARIO,
            CRIAR,
            ALTERAR,
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
            ADMINISTRADOR,
            N4,
            N3,
            N2,
            N1,
            IDMENU,
            IDMENUFILHO,
            IDMODULOPROMOCAO,
        }]);
        return response.data;
    }
/* 
    async atualizarPerfilUsuarioMenu(
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
    ) {
        const response = await this.api.put(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, [{
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
        }])
        return response.data;
    } */


     async atualizarPerfilUsuarioMenu(
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
    ) {
        const response = await this.api.post(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, [{
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
        }])
        return response.data;
    } 

    async atualizarFuncionarioDepartamento(
        ID,
        DEPARTAMENTO
    ) {
        const response = await this.api.put(`${url}/api/perfilUsuario/funcionario-departamento.xsjs`, [{
            ID,
            DEPARTAMENTO,
        }])
        return response.data;
    }

    async criarMenuFilho(
        DSNOME,
        IDMENUPAI,
        URL,
    ) {
        const response = await this.api.post(`${url}/api/perfilUsuario/menuFilhos.xsjs`, [{
            DSNOME,
            IDMENUPAI,
            URL
        }])
        return response.data;

    }

    async atualizarMenuFilho(
        ID,
        DSNOME,
        IDMENUPAI,
        URL,
    ) {
        const response = await this.api.put(`${url}/api/perfilUsuario/menuFilhos.xsjs`, [{
            ID,
            DSNOME,
            IDMENUPAI,
            URL
        }])
        return response.data;

    }


}