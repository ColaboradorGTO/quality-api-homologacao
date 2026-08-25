import { Router } from 'express';
import CadastroControllers from '../controllers/Cadastro.js';

const CadastroRoutes = new Router();

CadastroRoutes.get('/cadastrar-produto-Pedido', CadastroControllers.getListaProdutoCriadoPedidoCompra)
CadastroRoutes.get('/categoriasProdutos', CadastroControllers.getListaCategorias)
CadastroRoutes.get('/tipoProduto', CadastroControllers.getListaTipoProdutos)
CadastroRoutes.get('/tipoFiscalProduto', CadastroControllers.getListaTipoFiscalProdutos)
CadastroRoutes.get('/consultaProdutos', CadastroControllers.getConsultaProdutos)
CadastroRoutes.get('/nota-fiscal-entrada', CadastroControllers.getListaNotaFiscalEntrada)
CadastroRoutes.get('/ncm', CadastroControllers.getListaNCM)
CadastroRoutes.get('/cadastro-nfpedido', CadastroControllers.getListaCadastroNFPedido)
CadastroRoutes.get('/uso-principal', CadastroControllers.getListaUsoPrincipal)
CadastroRoutes.get('/pedidos-sem-vinculo-nfe', CadastroControllers.getListaPedidosSemVinculoNFE)
CadastroRoutes.get('/desvincular-pedidos-nfe', CadastroControllers.getListaDesVincularPedidosNFE)
CadastroRoutes.get('/produto-nf-pedidos', CadastroControllers.getListaProdutoNFPedido)
CadastroRoutes.get('/produtoAvulso', CadastroControllers.getListaProdutosAvulso)

CadastroRoutes.put('/status-produto-avulso/:id', CadastroControllers.putStatusProdutoAvulso)
CadastroRoutes.put('/incluir-produto-avulso/:id', CadastroControllers.putIncluirProdutoAvulso)
CadastroRoutes.put('/nf-avulsa/:id', CadastroControllers.putNFAvulsa)
CadastroRoutes.put('/desvincular-nf-pedido', CadastroControllers.putDesvincularNFPedido)
CadastroRoutes.put('/cancelar-nf-entrada', CadastroControllers.putCancelarNFEntrada)

CadastroRoutes.post('/vincular-nf-pedido', CadastroControllers.postVincularNFPedido)

export default CadastroRoutes;
