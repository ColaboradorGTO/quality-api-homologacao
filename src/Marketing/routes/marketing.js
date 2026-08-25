import { Router } from 'express';
import MarketingControllers from '../controllers/Marketing.js';

const MarketingRoutes = new Router();

MarketingRoutes.get('/produto-promocao', MarketingControllers.getListaProdutosPromocao)
MarketingRoutes.get('/listaPromocao', MarketingControllers.getListaPromocao)
MarketingRoutes.get('/campanha', MarketingControllers.getListaCampanha)
MarketingRoutes.get('/campanha-cliente', MarketingControllers.getListaCampanhaCliente)

MarketingRoutes.put('/campanha/:id', MarketingControllers.putCampanhaEmpresa)
MarketingRoutes.put('/campanha-cliente/:id', MarketingControllers.putCampanhaCliente)
MarketingRoutes.put('/produto-promocao/:id', MarketingControllers.putProdutoPromocao)

MarketingRoutes.post('/cadastrar-campanha-cliente', MarketingControllers.postCampanhaCliente)
MarketingRoutes.post('/cadastra-campanha', MarketingControllers.postCampanhaEmpresa)
MarketingRoutes.post('/cadastrar-produto-promocao', MarketingControllers.postProdutoPromocao)

export default MarketingRoutes;