import { Router } from 'express' ;
import ProdutosInformaticaControllers from '../controllers/index.js'

const InformaticaProdutosRoutes = new Router();

InformaticaProdutosRoutes.get('/listaProdutoPreco', ProdutosInformaticaControllers.getListaProdutoPreco)
InformaticaProdutosRoutes.get('/listaProdutoPrecoInformatica', ProdutosInformaticaControllers.getListaProdutoPrecoInformatica)

export default InformaticaProdutosRoutes
