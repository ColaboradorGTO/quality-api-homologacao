import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ComprasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO) {
        
        const response = await this.api.put(`${url}/api/compras/atualizacao-status-pedido.xsjs`, {
            IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO
        });
        return response.data;
    }

    async atualizarDetalhePedido(
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
        const response = await this.api.put(`${url}/api/compras/lista_detalhepedidos.xsjs`, [{
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
        }]);
      
        return response.data;
    }

    async atualizarPedido(
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
        const response = await this.api.put(`${url}/api/compras/atualizar-pedido.xsjs`, [{
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
            TPFISCAL
        }]);
      
        return response.data;
    }

    async atualizarFinalizandoPedido(
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
        const response = await this.api.put(`${url}/api/compras/finalizar-pedido.xsjs`, [{
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
        }]);
      
        return response.data;
    }

    async cancelarPedido(
        IDRESUMOPEDIDO,   
        IDANDAMENTO, 
        IDRESPCANCELAMENTO, 
        DSMOTIVOCANCELAMENTO, 
        DTCANCELAMENTO, 
        STCANCELADO
        
    ) {
        const response = await this.api.put(`${url}/api/compras/cancelamento-pedido.xsjs`, {
            IDRESUMOPEDIDO,   
            IDANDAMENTO, 
            IDRESPCANCELAMENTO, 
            DSMOTIVOCANCELAMENTO, 
            DTCANCELAMENTO, 
            STCANCELADO
        });
      
        return response.data;
    }

    async reativarPedido(
        IDRESUMOPEDIDO,   
        IDRESPREATIVACAO, 
        TXTMOTIVOREATIVACAO
    ) {
        const response = await this.api.put(`${url}/api/compras/ativar-pedido.xsjs`, {
            IDRESUMOPEDIDO,   
            IDRESPREATIVACAO, 
            TXTMOTIVOREATIVACAO
        });
      
        return response.data;
    }

    async cancelarPedido(
        IDRESUMOPEDIDO,   
        IDANDAMENTO, 
        IDRESPCANCELAMENTO, 
        DSMOTIVOCANCELAMENTO, 
        DTCANCELAMENTO, 
        STCANCELADO
        
    ) {
        const response = await this.api.put(`${url}/api/compras/cancelamento-pedido.xsjs`, {
            IDRESUMOPEDIDO,   
            IDANDAMENTO, 
            IDRESPCANCELAMENTO, 
            DSMOTIVOCANCELAMENTO, 
            DTCANCELAMENTO, 
            STCANCELADO
        });
      
        return response.data;
    }

    async atualizarDistribuicaoHistorico(
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
        
        const response = await this.api.put(`${url}/api/compras/distribuicao-compras-historico.xsjs`, [{
            IDDISTRIBUICAOCOMPRASHISTORICO,
            IDPEDIDOCOMPRA,
            IDEMPRESA,
            IDFILIAL,
            CODBARRAS,
            QTDSUGESTAOALTERACAOHISTORICO,
            IDUSUARIOALTERACAO,
            IDUSUARIO,
            FINALIZAR
        }]);
        return response.data;
    }
}