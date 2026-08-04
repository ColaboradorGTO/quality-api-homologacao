import { Router } from 'express' ;
import ProdutosInformaticaControllers from '../controllers/index.js'
const routes = new Router();

routes.get('/listaProdutoPreco', ProdutosInformaticaControllers.getListaProdutoPreco)
routes.get('/listaProdutoPrecoInformatica', ProdutosInformaticaControllers.getListaProdutoPrecoInformatica)

export default routes
