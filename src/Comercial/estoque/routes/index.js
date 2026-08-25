import { Router } from 'express';
import EstoqueControllersComercial from '../controller/controllerEstoque.js';

const ComercialEstoqueRoutes = new Router();

ComercialEstoqueRoutes.get('/listaProdutoSap', EstoqueControllersComercial.getListaProdutoSap)
ComercialEstoqueRoutes.get('/produtosPrecosEstoquesLojas', EstoqueControllersComercial.getListaProdutosEstoquePrecoLoja)
ComercialEstoqueRoutes.get('/vendasEstoqueProduto', EstoqueControllersComercial.getListaVendasPosicionamentoEstoquePeriodos)
ComercialEstoqueRoutes.get('/vendasPosicionamentoEstoque', EstoqueControllersComercial.getListaVendasPosicionamentoEstoque)

export default ComercialEstoqueRoutes;
