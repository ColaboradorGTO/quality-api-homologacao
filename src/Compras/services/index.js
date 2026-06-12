export class ComprasService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

        if(!IDRESPCANCELAMENTO) {
            throw new Error('ID do responsável pelo cancelamento é obrigatório.');
        }

        const response = await this.client.atualizarStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO);
        return response.data;
    }

    async updateDetalhePedido(  
        idDetPedido,
        IDCOR,
        IDSUBGRUPOESTRUTURA,
        IDCATEGORIAPEDIDO,
        IDTIPOTECIDO,
        IDESTILO,
        IDFABRICANTE,
        IDLOCALEXPOSICAO,
        NUREF,
        DSPRODUTO,
        QTDTOTAL,
        NUCAIXA,
        UND,
        VRUNITBRUTO,
        DESC01,
        DESC02,
        DESC03,
        VRUNITLIQUIDO,
        VRVENDA,
        VRTOTAL,
        STECOMMERCE,
        STREDESOCIAL,
        VRCUSTOPRODATUAL,
        VRVENDAPRODATUAL,
        OBSPRODUTO,
        IDCATEGORIAS,
        STREPOSICAO,
        NUCODBARRAS,
        IDPRODUTO,
        IDRESPATUALIZACAO,
        GRADE,
        STPEDIDOPORINTEMEDIARIO    
    ) {
        if(!idDetPedido) {
            throw new Error('ID do detalhe do pedido é obrigatório.');
        }

        if(!IDRESPATUALIZACAO) {
            throw new Error('ID do responsável pela atualização é obrigatório.');
        }

        const response = await this.client.atualizarDetalhePedido(
            idDetPedido,
            IDCOR,
            IDSUBGRUPOESTRUTURA,
            IDCATEGORIAPEDIDO,
            IDTIPOTECIDO,
            IDESTILO,
            IDFABRICANTE,
            IDLOCALEXPOSICAO,
            NUREF,
            DSPRODUTO,
            QTDTOTAL,
            NUCAIXA,
            UND,
            VRUNITBRUTO,
            DESC01,
            DESC02,
            DESC03,
            VRUNITLIQUIDO,
            VRVENDA,
            VRTOTAL,
            STECOMMERCE,
            STREDESOCIAL,
            VRCUSTOPRODATUAL,
            VRVENDAPRODATUAL,
            OBSPRODUTO,
            IDCATEGORIAS,
            STREPOSICAO,
            NUCODBARRAS,
            IDPRODUTO,
            IDRESPATUALIZACAO,
            GRADE,
            STPEDIDOPORINTEMEDIARIO
        );
        return response.data;
    }

    async updatePedido(  
        IDRESUMOPEDIDO,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        IDCOMPRADOR,
        IDCONDICAOPAGAMENTO,
        IDFORNECEDOR,
        IDTRANSPORTADORA,
        IDANDAMENTO,
        MODPEDIDO,
        NOVENDEDOR,
        EEMAILVENDEDOR,
        DTPEDIDO,
        DTPREVENTREGA,
        TPFRETE,
        DESCPERC01,
        DESCPERC02,
        DESCPERC03,
        PERCCOMISSAO,
        VRTOTALLIQUIDO,
        OBSPEDIDO,
        OBSPEDIDO2,
        DTFECHAMENTOPEDIDO,
        DTCADASTRO,
        TPARQUIVO,
        STDISTRIBUIDO,
        STAGRUPAPRODUTO,
        STCANCELADO,
        TPFISCAL,
        STRASCUNHO 
    ) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

   
        const response = await this.client.atualizarPedido(
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO
        );
        return response.data;
    }

    async updateCancelarPedido(  
        IDRESUMOPEDIDO,   
        IDANDAMENTO, 
        IDRESPCANCELAMENTO, 
        DSMOTIVOCANCELAMENTO, 
        DTCANCELAMENTO, 
        STCANCELADO
    ) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

   
        const response = await this.client.cancelarPedido(
            IDRESUMOPEDIDO,   
            IDANDAMENTO, 
            IDRESPCANCELAMENTO, 
            DSMOTIVOCANCELAMENTO, 
            DTCANCELAMENTO, 
            STCANCELADO
        );
        return response.data;
    }

    async updateReativarPedido(  
        IDRESUMOPEDIDO,   
        IDRESPREATIVACAO, 
        TXTMOTIVOREATIVACAO
    ) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

   
        const response = await this.client.reativarPedido(
            IDRESUMOPEDIDO,   
            IDRESPREATIVACAO, 
            TXTMOTIVOREATIVACAO
        );
        return response.data;
    }

    async updateFinalizarPedido(  
        IDRESUMOPEDIDO,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        IDCOMPRADOR,
        IDCONDICAOPAGAMENTO,
        IDFORNECEDOR,
        IDTRANSPORTADORA,
        IDANDAMENTO,
        MODPEDIDO,
        NOVENDEDOR,
        EEMAILVENDEDOR,
        DTPEDIDO,
        DTPREVENTREGA,
        TPFRETE,
        DESCPERC01,
        DESCPERC02,
        DESCPERC03,
        PERCCOMISSAO,
        VRTOTALLIQUIDO,
        OBSPEDIDO,
        OBSPEDIDO2,
        DTFECHAMENTOPEDIDO,
        DTCADASTRO,
        TPARQUIVO,
        STDISTRIBUIDO,
        STAGRUPAPRODUTO,
        STCANCELADO,
        TPFISCAL,
        STRASCUNHO
    ) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

   
        const response = await this.client.atualizarFinalizandoPedido(
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO
        );
        return response.data;
    }

    async updateDistribuicaoHistorico(
        IDDISTRIBUICAOCOMPRASHISTORICO,
        IDPEDIDOCOMPRA,
        IDEMPRESA,
        IDFILIAL,
        CODBARRAS,
        QTDSUGESTAOALTERACAOHISTORICO,
        IDUSUARIOALTERACAO,
        IDUSUARIO,
        FINALIZAR
    ) {
        if(!IDPEDIDOCOMPRA) {
            throw new Error('ID do pedido de compra é obrigatório.');
        }

        const response = await this.client.atualizarDistribuicaoHistorico(
            IDDISTRIBUICAOCOMPRASHISTORICO,
            IDPEDIDOCOMPRA,
            IDEMPRESA,
            IDFILIAL,
            CODBARRAS,
            QTDSUGESTAOALTERACAOHISTORICO,
            IDUSUARIOALTERACAO,
            IDUSUARIO,
            FINALIZAR
        );
        return response.data;
    }

    async updateStatusProdutoPedido(
        IDDETALHEPEDIDO, 
        STCANCELADO, 
        IDRESPCANCELAMENTO, 
        TXTOBSCANCELAMENTO,
        IDRESUMOPEDIDO
    ) {
        if(!IDDETALHEPEDIDO) {
            throw new Error('ID do detalhe do pedido é obrigatório.');
        }

        const response = await this.client.atualizarStatusProdutoPedido(
            IDDETALHEPEDIDO, 
            STCANCELADO, 
            IDRESPCANCELAMENTO, 
            TXTOBSCANCELAMENTO,
            IDRESUMOPEDIDO
        );
        return response.data;
    }

    async updateFornecedor(
        IDFORNECEDOR,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        MODPEDIDO,
        NORAZAOSOCIAL,
        NOFANTASIA,
        NUCNPJ,
        NUINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUIBGE,
        EENDERECO,
        ENUMERO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE1,
        NUTELEFONE2,
        NUTELEFONE3,
        NOREPRESENTANTE,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO,
        IDCONDPAGPADRAO,
        IDTRANSPORTADORAPADRAO,
        TPPEDIDOPADRAO,
        NOVENDEDORPADRAO,
        TPFRETEPADRAO,
        TPARQUIVOPADRAO,
        TPFISCALPADRAO,
        EMAILVENDEDORPADRAO
    ) {
        if(!IDFORNECEDOR) {
            throw new Error('ID do fornecedor é obrigatório.');
        }

        const response = await this.client.atualizarFornecedor(
            IDFORNECEDOR,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            MODPEDIDO,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
            IDCONDPAGPADRAO,
            IDTRANSPORTADORAPADRAO,
            TPPEDIDOPADRAO,
            NOVENDEDORPADRAO,
            TPFRETEPADRAO,
            TPARQUIVOPADRAO,
            TPFISCALPADRAO,
            EMAILVENDEDORPADRAO
        );
        return response.data;
    }

    async updateFornecedorFabricante(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO
    ) {
        if(!IDFABRICANTEFORN) {
            throw new Error('ID do fabricante-fornecedor é obrigatório.');
        }

        const response = await this.client.atualizarFornecedorFabricante(
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO
        );
        return response.data;
    }

    async updateFabricanteFornecedor(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO
    ) {
        if(!IDFABRICANTEFORN) {
            throw new Error('ID do fabricante-fornecedor é obrigatório.');
        }

        const response = await this.client.atualizarFabricanteFornecedor(
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO
        );
        return response.data;
    }
   
    async updateFabricante(
       IDFABRICANTE,
        DSFABRICANTE,
        DTULTATUALIZACAO,
        DTCADASTRO,
        STATIVO
    ) {
        if(!IDFABRICANTE) {
            throw new Error('ID do fabricante é obrigatório.');
        }

        const response = await this.client.atualizarFabricante(
            IDFABRICANTE,
            DSFABRICANTE,
            DTULTATUALIZACAO,
            DTCADASTRO,
            STATIVO
        );
        return response.data;
    }

    async updateCategoriaPedidos(
        IDCATEGORIAPEDIDO,
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        if(!IDCATEGORIAPEDIDO) {
            throw new Error('ID da categoria de pedido é obrigatório.');
        }

        const response = await this.client.atualizarCategoriaPedidos(
            IDCATEGORIAPEDIDO,
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        );
        return response.data;
    }

    async updateTipoTecidos(
        IDVINCESTILOSESTRUTURA,
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO
    ) {
        if(!IDVINCESTILOSESTRUTURA) {
            throw new Error('ID do vínculo estilo-estrutura é obrigatório.');
        }

        const response = await this.client.atualizarEstilos(
            IDVINCESTILOSESTRUTURA,
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO
        );
        return response.data;
    }
  
    async updateTipoTecidos(
        IDTPTECIDO,
        DSTIPOTECIDO,
        STATIVO
    ) {
        if(!IDTPTECIDO) {
            throw new Error('ID do tipo de tecido é obrigatório.');
        }

        const response = await this.client.atualizarTipoTecidos(
            IDTPTECIDO,
            DSTIPOTECIDO,
            STATIVO
        );
        return response.data;
    }
}