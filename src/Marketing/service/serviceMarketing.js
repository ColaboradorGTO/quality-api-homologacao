export class MarketingServices {

    constructor(client) {
        this.client = client;
    }
    async updateCampanhaCliente({
        IDCAMPANHA,
        NUCPFCNPJ,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE,
        NOME,
        ID
    }) {
        if (!IDCAMPANHA) {
            throw new Error('IDCAMPANHA obrigatorio');
        }
        if (!ID) {
            throw new Error('ID obrigatorio');
        }

        const result = await this.client.atualizarCampanhaCliente(
            IDCAMPANHA,
            NUCPFCNPJ,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE,
            NOME,
            ID

        );
        return result
    }

    async updateProdutoPromocao({
        IDPRODUTO,
        IDGRUPOEMPRESARIAL,
        NUNCM,
        NUCEST,
        NUCST_ICMS,
        NUCFOP,
        PERC_OUT,
        NUCODBARRAS,
        DSNOME,
        STGRADE,
        UND,
        PRECOCUSTO,
        PRECOVENDA,
        QTDENTRADA,
        QTDCOMERCIALIZADA,
        QTDPERDA,
        QTDDISPONIVEL,
        PERCICMS,
        PERCISS,
        PERCPIS,
        PERCCOFINS,
        COD_CSOS,
        PERCCSOSC,
        NUCST_IPI,
        NUCST_PIS,
        NUCST_COFINS,
        PERCIPI,
        DTULTALTERACAO,
        STPESAVEL,
        GRP_MATERIAIS

    }) {
        if (!IDPRODUTO) {
            throw new Error("IDPRODUTO is required, services");
        }

        const result = await this.client.atualizarProdutoPromocao(
            IDPRODUTO,
            IDGRUPOEMPRESARIAL,
            NUNCM,
            NUCEST,
            NUCST_ICMS,
            NUCFOP,
            PERC_OUT,
            NUCODBARRAS,
            DSNOME,
            STGRADE,
            UND,
            PRECOCUSTO,
            PRECOVENDA,
            QTDENTRADA,
            QTDCOMERCIALIZADA,
            QTDPERDA,
            QTDDISPONIVEL,
            PERCICMS,
            PERCISS,
            PERCPIS,
            PERCCOFINS,
            COD_CSOS,
            PERCCSOSC,
            NUCST_IPI,
            NUCST_PIS,
            NUCST_COFINS,
            PERCIPI,
            DTULTALTERACAO,
            STPESAVEL,
            GRP_MATERIAIS
        );
        return result;
    }

    async updateCampanhaEmpresa({
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO
    }) {
        const result = await this.client.atualizarProdutoEmpresa(
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO
        );
        return result;
    }


    async createCampanhaEmpresa({
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        EMPRESAS
    }) {
        const result = await this.client.criarProdutoEmpresa(
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            EMPRESAS
        );
        return result;
    }

    async createCampanhaClient({
        IDCAMPANHA,
        NUCPFCNPJ,
        NOME,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE
    }) {
        const result = await this.client.criarCampanhaClient(
            IDCAMPANHA,
            NUCPFCNPJ,
            NOME,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE
        );
        return result;
    }

    async createProdutoPromocao({
        DSPROMO,
        VRPERCDESCONTO,
        VRPRECODESCONTO,
        VRAPARTIRDE,
        VRLIMITEDE,
        QTDAPARTIRDE,
        QTDLIMITEDE,
        DTINICIOPROMO,
        DTFIMPROMO,
        STATIVO,
        IDGRUPO,
        PRODUTOS,
        EMPRESAS
    }) {
        const result = await this.client.criarProdutoPromocao(
            DSPROMO,
            VRPERCDESCONTO,
            VRPRECODESCONTO,
            VRAPARTIRDE,
            VRLIMITEDE,
            QTDAPARTIRDE,
            QTDLIMITEDE,
            DTINICIOPROMO,
            DTFIMPROMO,
            STATIVO,
            IDGRUPO,
            PRODUTOS,
            EMPRESAS
        );
        return result;
    }
}



