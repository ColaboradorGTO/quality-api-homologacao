import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;
import atualizarStatusProdutoAvulsoSchema from "../schema/atualizarStatusProdutoAvulso.js";
import atualizarDesvincularNFPedidoSchema from "../schema/atualizarDesvincularNFPedido.js";
import criarVinculoNFPedidoSchema  from "../schema/criarVinculoNFPedido.js";
import removeItemReferenciaPedidoSchema from "../schema/removeItemReferenciaPedido.js";

import { CadastroClient } from "../client/index.js";
import { CadastroService } from "../services/index.js";
const cadastroClient = new CadastroClient(process.env.API_URL)
const cadastroService = new CadastroService(cadastroClient)


class CadastroControllers  {

    
    async getListaProdutoCriadoPedidoCompra(req, res) {
        let { 
            NuPedidoPesquisa,
            dataPesquisaInicio, 
            dataPesquisaFim,
            idFornecedorPesquisa,
            idMarcaPesquisa,
            idFabPesquisa,
            page,
            pageSize
        } = req.query;
    
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''; 
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        NuPedidoPesquisa = NuPedidoPesquisa ? NuPedidoPesquisa : '';
        idFornecedorPesquisa = idFornecedorPesquisa ? idFornecedorPesquisa : '';
        idMarcaPesquisa = idMarcaPesquisa ? idMarcaPesquisa : '';
        idFabPesquisa = idFabPesquisa ? idFabPesquisa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/cadastro/cadastrar-produto-pedido.xsjs?iResPedido=${NuPedidoPesquisa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFabPesquisa=${idFabPesquisa}&idMarcaPesquisa=${idMarcaPesquisa}&idFornecedorPesquisa=${idFornecedorPesquisa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
    
    async getListaCategorias(req, res) {
        let { idTipoPedido } = req.query;
        idTipoPedido = idTipoPedido ? idTipoPedido : '';
        
        
        try {
            const apiUrl = `${url}/api/cadastro/categorias.xsjs?idtipopedido=${idTipoPedido}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaCategorias:", error);
            return res.status(500).json({ error: "erro no CadastroControllers.getListaCategorias" });
        } 
    }

    async getListaNCM(req, res) {
        let { } = req.query;
        
        
        try {
            const apiUrl = `${url}/api/cadastro/ncm.xsjs`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaNCM:", error);
            throw error;
        } 
    }
    
    async getListaProdutosAvulso(req, res) {
        let { 
            idDetalhePedidoProduto,
            descricao,
            codBarras,
            dataPesquisaFim,
            dataPesquisaInicio,
            page, 
            pageSize
        } = req.query;
        
        idDetalhePedidoProduto = idDetalhePedidoProduto ? idDetalhePedidoProduto : '';
        codBarras = codBarras ? codBarras : '';
        descricao = descricao ? descricao : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : ''; 
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/cadastro/cadastrar-produto-avulso.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&DescProdAv=${descricao}&BarrasProdAv=${codBarras}&idDetalhePedidoProduto=${idDetalhePedidoProduto}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
    
    async getListaTipoProdutos(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/cadastro/tipoproduto.xsjs?`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
    async getListaTipoFiscalProdutos(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/cadastro/tipofiscalproduto.xsjs?`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
    
    async getConsultaProdutos(req, res) {
        let { descricaoProduto, page, pageSize } = req.query;
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/cadastro/consulta_produtos.xsjs?descProd=${descricaoProduto}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getConsultaProdutos:", error);
            throw error;
        } 
    }

    async getListaNotaFiscalEntrada(req, res) {
        let { idNota,  idFonecedor, numSerie, numNFE, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idNota = idNota ? idNota : '';
        idFonecedor = idFonecedor ? idFonecedor : '';
        numSerie = numSerie ? numSerie : '';
        numNFE = numNFE ? numNFE : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/cadastrar-nota-fiscal-entrada.xsjs?id=${idNota}&idFonecedor=${idFonecedor}&numSerie=${numSerie}&numNFE=${numNFE}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaNFPedido:", error);
            throw error;
        } 
    }
  
    async getListaCadastroNFPedido(req, res) {
        let { idPedido, numSerie, idFornecedor, numNFE, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        numSerie = numSerie ? numSerie : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        numNFE = numNFE ? numNFE : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/cadastro_nfpedido.xsjs?id=${idPedido}&idFornecedor=${idFornecedor}&numSerie=${numSerie}&numNFE=${numNFE}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaCadastroNFPedido:", error);
            throw error;
        } 
    }

    async getListaUsoPrincipal(req, res) {
        let { idPedido,  page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/uso_principal.xsjs`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaUsoPrincipal:", error);
            throw error;
        } 
    }
    
    async getListaPedidosSemVinculoNFE(req, res) {
        let { idNota,  page, pageSize } = req.query;
        idNota = idNota ? idNota : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/lista_pedidos_sem_vinculo_nfe.xsjs?idNota=${idNota}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaPedidosSemVinculoNFE:", error);
            throw error;
        } 
    }

    async getListaDesVincularPedidosNFE(req, res) {
        let { idNota,  page, pageSize } = req.query;
        idNota = idNota ? idNota : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/vinculo_nfpedidos.xsjs?idnota=${idNota}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaDesVincularPedidosNFE:", error);
            throw error;
        } 
    }
 
    async getListaProdutoNFPedido(req, res) {
        let { idNota,  page, pageSize } = req.query;
        idNota = idNota ? idNota : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/cadastro_produto_nfpedido.xsjs?id=${idNota}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaProdutoNFPedido:", error);
            throw error;
        } 
    }

    async getListaVerificaCodBarrasProdutos(req, res) {
        let { codBarras, excludeSemGtin,  page, pageSize } = req.query;
            codBarras = codBarras ? codBarras : ''
            excludeSemGtin =  excludeSemGtin ?  excludeSemGtin : ''
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/verifica_codbarras_produto.xsjs?codbarras=${codBarras}&excludeSemGtin=${excludeSemGtin}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaVerificaCodBarrasProdutos:", error);
            throw error;
        } 
    }
    
    async getListaDetalheProdutoPedido(req, res) {
        let { idResumoPedido, stCadastrado, stReposicao, stMigradoSap,  page, pageSize } = req.query;
            idResumoPedido = idResumoPedido ? idResumoPedido : '';
            stCadastrado = stCadastrado ? stCadastrado : '';
            stReposicao = stReposicao ? stReposicao : '';
            stMigradoSap = stMigradoSap ? stMigradoSap : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/lista_detalheprodutopedidos.xsjs?idpedido=${idResumoPedido}&stcadastrado=${stCadastrado}&streposicao=${stReposicao}&stmigradosap=${stMigradoSap}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaDetalheProdutoPedido:", error);
            throw error;
        } 
    }

    async getListaItemPedidoPedido(req, res) {
        let { idDetalhePedido, page, pageSize } = req.query;
            idDetalhePedido = idDetalhePedido ? idDetalhePedido : '';

            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {
           
            const apiUrl = `${url}/api/cadastro/editar-item-pedido.xsjs?iddetPedido=${idDetalhePedido}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no CadastroControllers.getListaItemPedidoPedido:", error);
            throw error;
        } 
    }
    
    async putItemPedido(req, res) {
        try {
            const {
                IDRESUMOPEDIDO,
                IDDETALHEPEDIDO,
                IDCOR,
                IDCATEGORIAPEDIDO,
                IDTIPOTECIDO,
                IDLOCALEXPOSICAO,
                NUREF,
                DSPRODUTO,
                QTDTOTAL,
                NUCAIXA,
                UND,
                VRUNITBRUTO,
                VRUNITLIQUIDO,
                VRVENDA,
                VRTOTAL,
                STECOMMERCE,
                STREDESOCIAL,
                IDCATEGORIAS,
                STPEDIDOPRIMARIO,
                DETALHEGRADE
            } = req.body
            
            if(!IDRESUMOPEDIDO) {
                return res.status(400).json({ error: "IDRESUMOPEDIDO é obrigatório" });
            }
            
            const response = await axios.put(`${url}/api/cadastro/editar-item-pedido.xsjs`, [{
                IDRESUMOPEDIDO,
                IDDETALHEPEDIDO,
                IDCOR,
                IDCATEGORIAPEDIDO,
                IDTIPOTECIDO,
                IDLOCALEXPOSICAO,
                NUREF,
                DSPRODUTO,
                QTDTOTAL,
                NUCAIXA,
                UND,
                VRUNITBRUTO,
                VRUNITLIQUIDO,
                VRVENDA,
                VRTOTAL,
                STECOMMERCE,
                STREDESOCIAL,
                IDCATEGORIAS,
                STPEDIDOPRIMARIO,
                DETALHEGRADE
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putStatusProdutoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async putStatusProdutoAvulso(req, res) {
        try {
            const {
                IDDETALHEPRODUTOPEDIDO,
                IDRESPCANCELAMENTO,
                DSMOTIVOCANCELAMENTO,
                DTCANCELAMENTO,
                STCANCELADO
            } = req.body
            
            if(!IDDETALHEPRODUTOPEDIDO) {
                return res.status(400).json({ error: "IDDETALHEPRODUTOPEDIDO é obrigatório" });
            }
            
            const response = await axios.put(`${url}/api/cadastro/atualizacao-status-produto-avulso.xsjs`, {
                IDDETALHEPRODUTOPEDIDO,
                IDRESPCANCELAMENTO,
                DSMOTIVOCANCELAMENTO,
                DTCANCELAMENTO,
                STCANCELADO
            });

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putStatusProdutoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }
  
    async putIncluirProdutoAvulso(req, res) {
        try {
            const {
                IDDETALHEPRODUTOPEDIDO,
            } = req.body
            
            if(!IDDETALHEPRODUTOPEDIDO) {
                return res.status(400).json({ error: "IDDETALHEPRODUTOPEDIDO é obrigatório" });
            }

            const response = await axios.put(`${url}/api/cadastro/incluir_produtos_avulso.xsjs`, {
                IDDETALHEPRODUTOPEDIDO,
            });

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putIncluirProdutoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async putNFAvulsa(req, res) {
        try {
            const {
                IDRESUMOENTRADA,
            } = req.body
            
            if(!IDRESUMOENTRADA) {
                return res.status(400).json({ error: "IDRESUMOENTRADA é obrigatório" });
            }

            const response = await axios.put(`${url}/api/cadastro/cadastro_nfAvulsa.xsjs`, [{
                IDRESUMOENTRADA,
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putNFAvulsa:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async putDesvincularNFPedido(req, res) {
        try {
            const { error, value } = await atualizarDesvincularNFPedidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
            });
            
            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }

            const response = await cadastroService.updateDesvincularNFPedido(
                value.IDRESUMOPEDIDO,
                value.IDRESUMOENTRADA,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no CadastroControllers.putDesvincularNFPedido:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async putCancelarNFEntrada(req, res) {
        try {
            const { 
                IDRESUMOENTRADA,
            } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/cancelar_nf_entrada.xsjs`, [{
                IDRESUMOENTRADA,
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putCancelarNFEntrada:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }
   
    async putAtualizarPedidoSap(req, res) {
        try {
            const {  IDRESUMOPEDIDO } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/atualizar-linhas-pedido-sap.xsjs`, [{
                IDRESUMOPEDIDO,
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.putAtualizarPedidoSap:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }
   
    async putRemoverItemReferenciaPedido(req, res) {
        try {
            const { error, value } = await removeItemReferenciaPedidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
            });
            
            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }


            const response = await cadastroService.updateRemoverItemReferenciaPedido(
                value.IDRESUMOPEDIDO,
                value.IDDETALHEPEDIDO,
                value.STCANCELADO,
                value.IDRESPCANCELAMENTO,
                value.TXTOBSCANCELAMENTO,
                value.STPEDIDOPRIMARIO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no CadastroControllers.putRemoverItemReferenciaPedido:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async postVincularNFPedido(req, res) {
        try {
            const { 
                IDRESUMOPEDIDO,
                IDRESUMOENTRADA
            } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/vincula_nfpedido.xsjs`, [{
                IDRESUMOPEDIDO,
                IDRESUMOENTRADA
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.postVincularNFPedido:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async postFinalizarCadastro(req, res) {
        try {
            const { 
                IDRESUMOPEDIDO,
                IDANDAMENTO
            } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/finalizar-pedido.xsjs`, [{
                IDRESUMOPEDIDO,
                IDANDAMENTO
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.postFinalizarCadastro:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async postValidarPedidoParaAjusteCompras(req, res) {
        try {
            const { 
                IDRESUMOPEDIDO,
                IDFUNCIONARIO
            } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/valida-dados-pedido-para-ajuste-compras.xsjs`, [{
                IDRESUMOPEDIDO,
                IDFUNCIONARIO
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.postValidarPedidoParaAjusteCompras:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

    async postIncluirProdutosPDV(req, res) {
        try {
            const { IDRESUMOPEDIDO } =  req.body; 

            const response = await axios.post(`${url}/api/cadastro/incluir_todos_produtos_pdv.xsjs`, [{
                IDRESUMOPEDIDO
            }]);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no CadastroControllers.postIncluirProdutosPDV:", error);
            return res.status(500).json({ error: error.message });
        }
       
    }

}

export default new CadastroControllers();