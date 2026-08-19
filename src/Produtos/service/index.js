export class ProdutosServices {
    constructor(client) {
        this.client = client;
    }

    async updateProdutoAvulso(
        IDPRODUTO,
        DSNOME,
        IDGRUPOEMPRESARIAL,
        NUNCM,
        IDUND,
        UND,
        PRECOCUSTO,
        PRECOVENDA,
        IDSUBGRUPO,
        IDFABRICANTE,
        IDFORNECEDOR,
        NUREFERENCIA,
        IDCOR,
        IDTAMANHO,
        IDCATEGORIAPEDIDO,
        IDTIPOTECIDO,
        IDESTILO,
        IDLOCALEXPOSICAO,
        IDCATEGORIAS,
        IDTIPOPRODUTOFISCAL,
        IDFONTEPRODUTOFISCAL,
        STECOMMERCE,
        STREDESOCIAL,

    ) {
        if (!IDPRODUTO) {
            throw new Error("IDPRODUTO is required, services");
        }
         
       
        const result = await this.client.atualizarProdutoAvulso(
            IDPRODUTO,
            DSNOME,
            IDGRUPOEMPRESARIAL,
            NUNCM,
            IDUND,
            UND,
            PRECOCUSTO,
            PRECOVENDA,
            IDSUBGRUPO,
            IDFABRICANTE,
            IDFORNECEDOR,
            NUREFERENCIA,
            IDCOR,
            IDTAMANHO,
            IDCATEGORIAPEDIDO,
            IDTIPOTECIDO,
            IDESTILO,
            IDLOCALEXPOSICAO,
            IDCATEGORIAS,
            IDTIPOPRODUTOFISCAL,
            IDFONTEPRODUTOFISCAL,
            STECOMMERCE,
            STREDESOCIAL,
        )
        return result;
    }

    async createProdutoAvulso(
        DSNOME,
        IDGRUPOEMPRESARIAL,
        NUNCM,
        IDUND,
        UND,
        PRECOCUSTO,
        PRECOVENDA,
        IDSUBGRUPO,
        IDFABRICANTE,
        IDFORNECEDOR,
        NUREFERENCIA,
        IDCOR,
        IDTAMANHO,
        IDCATEGORIAPEDIDO,
        IDTIPOTECIDO,
        IDESTILO,
        IDLOCALEXPOSICAO,
        IDCATEGORIAS,
        IDTIPOPRODUTOFISCAL,
        IDFONTEPRODUTOFISAL,
        STECOMMERCE,
        STREDESOCIAL,

    ) {
          
        const result = await this.client.criarProdutoAvulso(
            DSNOME,
            IDGRUPOEMPRESARIAL,
            NUNCM,
            IDUND,
            UND,
            PRECOCUSTO,
            PRECOVENDA,
            IDSUBGRUPO,
            IDFABRICANTE,
            IDFORNECEDOR,
            NUREFERENCIA,
            IDCOR,
            IDTAMANHO,
            IDCATEGORIAPEDIDO,
            IDTIPOTECIDO,
            IDESTILO,
            IDLOCALEXPOSICAO,
            IDCATEGORIAS,
            IDTIPOPRODUTOFISCAL,
            IDFONTEPRODUTOFISAL,
            STECOMMERCE,
            STREDESOCIAL,
        )
        return result;
    }

    async createAlteracoesPrecoProduto(
        IDPRODUTO,
        IDEMPRESA,
        IDLISTAPRECO,
        PRECOVENDAANTIGO,
        PRECOVENDANOVO,
        IDUSER,
        STAGENDAMENTOPADRAO,
        STAGENDAMENTOIMEDIATO,
        STAGENDAMENTOPERSONALIZADO,
        DTAGENDAMENTOPERSONALIZADO

    ) {
        if (!IDPRODUTO) {
            throw new Error("IDPRODUTO is required, services");
        }
         
       
        const result = await this.client.criarAlteracoesPrecoProduto(
            IDPRODUTO,
            IDEMPRESA,
            IDLISTAPRECO,
            PRECOVENDAANTIGO,
            PRECOVENDANOVO,
            IDUSER,
            STAGENDAMENTOPADRAO,
            STAGENDAMENTOIMEDIATO,
            STAGENDAMENTOPERSONALIZADO,
            DTAGENDAMENTOPERSONALIZADO
        )
        return result;
    }

}