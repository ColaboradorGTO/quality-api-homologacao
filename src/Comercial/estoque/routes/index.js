import { Router } from 'express';
import EstoqueControllersComercial from '../controller/controllerEstoque.js';

const routes = new Router();

routes.get('/listaProdutoSap', EstoqueControllersComercial.getListaProdutoSap)
routes.get('/produtosPrecosEstoquesLojas', EstoqueControllersComercial.getListaProdutosEstoquePrecoLoja)
routes.get('/vendasEstoqueProduto', EstoqueControllersComercial.getListaVendasPosicionamentoEstoquePeriodos)
routes.get('/vendasPosicionamentoEstoque', EstoqueControllersComercial.getListaVendasPosicionamentoEstoque)

export default routes;