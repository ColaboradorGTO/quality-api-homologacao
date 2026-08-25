import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class ModulosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

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
        IDMENUFILHO
    ) {
        const response = await this.api.put(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
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
            IDMENUFILHO
        });
        return response.data;
    }

    async atualizarFuncionarioDepartamento(
        ID,
        DEPARTAMENTO
    ) {
        const response = await this.api.put(`${url}/api/perfilUsuario/funcionario-departamento.xsjs`, [{
            ID,
            DEPARTAMENTO
        }]);
        return response.data;
    }

    async criarPerfilUsuarioMenu(
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
        IDMENUFILHO
    ) {
        const response = await this.api.post(`${url}/api/perfilUsuario/perfilUsuarioMenu.xsjs`, {
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
            IDMENUFILHO
        });
        return response.data;
    }
}
