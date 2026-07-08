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
        STRASCUNHO,
        STPEDIDOPORINTEMEDIARIO
    ) {
        const response = await this.api.put(`${url}/api/compras/atualizar-pedido.xsjs`, {
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
            STRASCUNHO,
            STPEDIDOPORINTEMEDIARIO
        });
      
        return response.data;
    }

    async atualizarFinalizandoPedido(
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
        STRASCUNHO,
        IDRESUMOPEDIDO
        
    ) {
        const response = await this.api.put(`${url}/api/compras/finalizar-pedido.xsjs`, {
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
            STRASCUNHO,
            IDRESUMOPEDIDO
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

    async atualizarDistribuicaoHistorico(
        IDDISTRIBUICAOCOMPRASHISTORICO,
        IDPEDIDOCOMPRA,
        IDEMPRESA,
        IDFILIAL,
        CODBARRAS,
        QTDSUGESTAOALTERACAOHISTORICO,
        IDUSUARIOALTERACAO,
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
            FINALIZAR
        }]);
        return response.data;
    }
   
    async atualizarDistribuicaoHistoricoADM(
        IDPEDIDOCOMPRA,
        IDUSUARIO,
        FINALIZAR
    ) {
        
        const response = await this.api.put(`${url}/api/compras/distribuicao-compras-historico.xsjs`, [{
            IDPEDIDOCOMPRA,
            IDUSUARIO,
            FINALIZAR
        }]);
        return response.data;
    }

    async atualizarStatusProdutoPedido(
        IDDETALHEPEDIDO, 
        STCANCELADO, 
        IDRESPCANCELAMENTO, 
        TXTOBSCANCELAMENTO,
        IDRESUMOPEDIDO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/atualizacao-status-produto-pedido.xsjs`, {
            IDDETALHEPEDIDO, 
            STCANCELADO, 
            IDRESPCANCELAMENTO, 
            TXTOBSCANCELAMENTO,
            IDRESUMOPEDIDO
        });
        return response.data;
    }

    async atualizarFornecedor(
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
        
        const response = await this.api.put(`${url}/api/compras/fornecedor.xsjs`, [{
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
        }]);
        return response.data;
    }

    async atualizarFornecedorFabricante(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO,
    ) {
        
        const response = await this.api.put(`${url}/api/compras/fornecedor-fabricante.xsjs`, [{
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        }]);
        return response.data;
    }
    
    async atualizarFabricanteFornecedor(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/fabricante-fornecedor.xsjs`, [{
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO
        }]);
        return response.data;
    }

    async atualizarFabricante(
        IDFABRICANTE,
        DSFABRICANTE,
        DTULTATUALIZACAO,
        DTCADASTRO,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/fabricante.xsjs`, [{
            IDFABRICANTE,
            DSFABRICANTE,
            DTULTATUALIZACAO,
            DTCADASTRO,
            STATIVO
        }]);
        return response.data;
    }
    
    async atualizarCategoriaPedidos(
        IDCATEGORIAPEDIDO,
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/categoriapedidos.xsjs`, [{
            IDCATEGORIAPEDIDO,
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        }]);
        return response.data;
    }
   
    async atualizarTipoTecidos(
        IDTPTECIDO,
        DSTIPOTECIDO,
        DSSIGLA,
        STATIVO,
        IDFUNCIONARIO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/tipotecidos.xsjs`, [{
            IDTPTECIDO,
            DSTIPOTECIDO,
            DSSIGLA,
            STATIVO,
            IDFUNCIONARIO
        }]);
        return response.data;
    }

    async atualizarEstilos(
        IDVINCESTILOSESTRUTURA,
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/estilos.xsjs`, [{
            IDVINCESTILOSESTRUTURA,
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO
        }]);
        return response.data;
    }

    async atualizarCores(
        IDGRUPOCOR,
        DSCOR,
        DSSIGLA,
        STATIVO,
        IDFUNCIONARIO,
        IDCOR
    ) {
        
        const response = await this.api.put(`${url}/api/compras/cores.xsjs`, [{
            IDGRUPOCOR,
            DSCOR,
            DSSIGLA,
            STATIVO,
            IDFUNCIONARIO,
            IDCOR
        }]);
        return response.data;
    }

    async atualizarUnidadeMedida(
        IDUNIDADEMEDIDA,
        DSUNIDADE,
        DSSIGLA,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/unidadesdemedidas.xsjs`, [{
            IDUNIDADEMEDIDA,
            DSUNIDADE,
            DSSIGLA,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
           
        }]);
        return response.data;
    }

    async atualizarGrupoEstrutura(
        IDGRUPOESTRUTURA,
        IDGRUPOEMPRESARIAL,
        DSGRUPOESTRUTURA,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/grupoextrutura.xsjs`, [{
            IDGRUPOESTRUTURA,
            IDGRUPOEMPRESARIAL,
            DSGRUPOESTRUTURA,
            STATIVO
        }]);
        
        return response.data;
    }

    async atualizarSubGrupoEstrutura(
        IDGRUPOESTRUTURAANTIGA,
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/subgrupoestrutura.xsjs`, [{
            IDGRUPOESTRUTURAANTIGA,
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        }]);
        
        return response.data;
    }
   
    async atualizarCondicaoPagamento(
        IDCONDICAOPAGAMENTO,
        IDGRUPOEMPRESARIAL,
        DSCONDICAOPAG,
        STPARCELADO,
        NUPARCELAS,
        NUNDIA1PAG,
        NUNDIA2PAG,
        NUNDIA3PAG,
        NUNDIA4PAG,
        NUNDIA5PAG,
        NUNDIA6PAG,
        NUNDIA7PAG,
        NUNDIA8PAG,
        NUNDIA9PAG,
        NUNDIA10PAG,
        NUNDIA11PAG,
        NUNDIA12PAG,
        DTULTALTERACAO,
        QTDDIAS,
        DSTPDOCUMENTO,
        STATIVO,
        IDTPDOCUMENTO
    ) {
        
        const response = await this.api.put(`${url}/api/compras/condicaopagamento.xsjs`, [{
            IDCONDICAOPAGAMENTO,
            IDGRUPOEMPRESARIAL,
            DSCONDICAOPAG,
            STPARCELADO,
            NUPARCELAS,
            NUNDIA1PAG,
            NUNDIA2PAG,
            NUNDIA3PAG,
            NUNDIA4PAG,
            NUNDIA5PAG,
            NUNDIA6PAG,
            NUNDIA7PAG,
            NUNDIA8PAG,
            NUNDIA9PAG,
            NUNDIA10PAG,
            NUNDIA11PAG,
            NUNDIA12PAG,
            DTULTALTERACAO,
            QTDDIAS,
            DSTPDOCUMENTO,
            STATIVO,
            IDTPDOCUMENTO
        }]);
        
        return response.data;
    }

    async atualizarTransportador(
        IDTRANSPORTADORA,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
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
        STATIVO
    ) {
        
        if(!IDTRANSPORTADORA) {
            throw new Error("IDTRANSPORTADORA é obrigatório para atualizar um transportador.");
        }

        const response = await this.api.put(`${url}/api/compras/transportador.xsjs`, [{
            IDTRANSPORTADORA,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
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
            STATIVO
        }]);
        
        return response.data;
    }

    async atualizarProdutoImagem(
        IDIMAGEMPRODUTO,
        STATIVO
    ) {
        
        if(!IDIMAGEMPRODUTO) {
            throw new Error("IDIMAGEMPRODUTO é obrigatório para atualizar uma imagem.");
        }

        const response = await this.api.put(`${url}/api/compras/atualiza_produtosimagem.xsjs`, {
            IDIMAGEMPRODUTO,
            STATIVO
        });
        
        return response.data;
    }

    async atualizarImagem(
        IDIMAGEM,
        STATIVO
    ) {
        
        if(!IDIMAGEM) {
            throw new Error("IDIMAGEM é obrigatório para atualizar uma imagem.");
        }

        const response = await this.api.put(`${url}/api/compras/atualiza_imagem.xsjs`, {
            IDIMAGEM,
            STATIVO
        });
        
        return response.data;
    }

    async criarFornecedorFabricante(
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/fornecedor-fabricante.xsjs`, [{
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO
        }]);
        return response.data;
    }
    async criarFabricanteFornecedor(
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/fabricante-fornecedor.xsjs`, [{
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO
        }]);
        return response.data;
    }

    async criarDetalhePedido(
        IDRESUMOPEDIDO,
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
        STRECEBIDO,
        STECOMMERCE,
        STREDESOCIAL,
        STCANCELADO,
        VRCUSTOPRODATUAL,
        VRVENDAPRODATUAL,
        OBSPRODUTO,
        STTRANSFORMADO,
        IDCATEGORIAS,
        STREPOSICAO,
        NUCODBARRAS,
        IDPRODUTO,
        IDRESPCADASTRO,
        GRADE,
        STPEDIDOPORINTEMEDIARIO    
    ) {
       
        const response = await this.api.post(`${url}/api/compras/lista_detalhepedidos.xsjs`, [{
            IDRESUMOPEDIDO,
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
            STRECEBIDO,
            STECOMMERCE,
            STREDESOCIAL,
            STCANCELADO,
            VRCUSTOPRODATUAL,
            VRVENDAPRODATUAL,
            OBSPRODUTO,
            STTRANSFORMADO,
            IDCATEGORIAS,
            STREPOSICAO,
            NUCODBARRAS,
            IDPRODUTO,
            IDRESPCADASTRO,
            GRADE,
            STPEDIDOPORINTEMEDIARIO
        }]);
        
        return response.data;
    }

    async criarEstilo(
        IDGRUPOESTRUTURAANTIGA,
        IDVINCESTILOSESTRUTURA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/estilos.xsjs`, [{
            IDGRUPOESTRUTURAANTIGA: parseInt(null),
            IDVINCESTILOSESTRUTURA: parseInt(null),
            IDESTILO: parseInt(null),
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO,
        }]);

        return response.data;
    }

    async criarCor(
        IDGRUPOCOR,
        DSCOR,
        STATIVO,
        IDFUNCIONARIO
    ) {
        const response = await this.api.post(`${url}/api/compras/cores.xsjs`, [{
            IDGRUPOCOR,
            DSCOR,
            STATIVO,
            IDFUNCIONARIO
        }]);
        return response.data;
    }

     async criarUnidadeMedida(
        DSUNIDADE,
        DSSIGLA,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/unidadesdemedidas.xsjs`, [{
            DSUNIDADE,
            DSSIGLA,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
           
        }]);
        return response.data;
    }

    async criarSubGrupoEstrutura(
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/subgrupoestrutura.xsjs`, [{
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        }]);
        
        return response.data;
    }

    async criarGrupoEstrutura(
        DSGRUPOESTRUTURA,
        IDGRUPOEMPRESARIAL,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/grupoextrutura.xsjs`, [{
            DSGRUPOESTRUTURA,
            IDGRUPOEMPRESARIAL,
            STATIVO
        }]);
        
        return response.data;
    }

    async criarCategoriaPedidos(
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/categoriapedidos.xsjs`, [{
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        }]);
        
        return response.data;
    }

    async criarVinculoCategoriaPedido(
        IDCATEGORIAPEDIDO,
        IDTAMANHO,
        STATIVO
    ) {
        
        const response = await this.api.post(`${url}/api/compras/vinctamcat.xsjs`, [{
            IDCATEGORIAPEDIDO,
            IDTAMANHO,
            STATIVO
        }]);
        
        return response.data;
    }
}

