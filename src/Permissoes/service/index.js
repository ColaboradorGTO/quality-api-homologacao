export class PermissaoService {
    constructor(client) {
        this.client = client;
    }

    async updateFuncionarioDepartamento(
        ID,
        DEPARTAMENTO,
    ) {
        if (!ID)
            throw new Error("ID is required, services");
        if (!DEPARTAMENTO)
            throw new Error("DEPARTAMENTO is required, services");

        const result = await this.client.atualizarFuncionarioDepartamento(
            ID,
            DEPARTAMENTO,
        )
        return result;
    }

    async createPerfilUsuarioMenu(
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
        IDMODULOPROMOCAO
    ) {

        if (!IDUSUARIO)
            throw new Error("IDUSUARIO is required, services");
        if (!IDMENU)
            throw new Error("IDMENU is required, services");


        const result = await this.client.criarPerfilUsuarioMenu(
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
        )

        return result;
    }

    async updatePerfilUsuarioMenu(
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
        if (!IDUSUARIO)
            throw new Error("IDUSUARIO is required, services");
        if (!IDMENU)
            throw new Error("IDMENU is required, services");
        if (!IDMENUFILHO)
            throw new Error("IDMENUFILHO is required, services");

        const result = await this.client.atualizarPerfilUsuarioMenu(
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
        )
        //console.log("RESULT:", result);


        return result;
    }

    async createMenuFilho(
        DSNOME,
        IDMENUPAI,
        URL,
    ) {
        if (!DSNOME)
            throw new Error("DSNOME is required, services");
        if (!IDMENUPAI)
            throw new Error("IDMENUPAI is required, services");
        if (!URL)
            throw new Error("URL is required, services");

        const result = await this.client.criarMenuFilho(
            DSNOME,
            IDMENUPAI,
            URL,
        )
        return result;
    }


    async updateMenuFilho(
        ID,
        DSNOME,
        IDMENUPAI,
        URL,
    ) {
        if (!ID)
            throw new Error("ID is required, services");
        if (!DSNOME)
            throw new Error("DSNOME is required, services");
        if (!IDMENUPAI)
            throw new Error("IDMENUPAI is required, services");
        if (!URL)
            throw new Error("URL is required, services");

        const result = await this.client.atualizarMenuFilho(
            ID,
            DSNOME,
            IDMENUPAI,
            URL,
        )
        return result;
    }

}
