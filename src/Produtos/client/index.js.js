import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ProdutosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarProdutoAvulso(
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

        const response = await this.api.put(`${url}/api/produtos/produto.xsjs`, [{
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
        }]);
        return response.data;
    }
   
    async criarProdutoAvulso(
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

        const response = await this.api.post(`${url}/api/produtos/produto.xsjs`, [{
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
        }]);
        return response.data;
    }
   
    async criarAlteracoesPrecoProduto(
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

        const response = await this.api.post(`${url}/api/produtos/alteracao-preco-produto.xsjs`, [{
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
        }]);
        return response.data;
    }
}
