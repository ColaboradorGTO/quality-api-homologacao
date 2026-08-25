import { Router } from 'express';
import DetalhesControllers from '../controller/controller.js';

const FinanceiroDetalhesRoutes = new Router();

FinanceiroDetalhesRoutes.get('/detalheFechamento', DetalhesControllers.getListaDetalheFechamento)


export default FinanceiroDetalhesRoutes;