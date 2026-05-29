import { Router } from 'express';
import DetalhesControllers from '../controller/controller.js';

const FinanceiroDetalhes = new Router();

FinanceiroDetalhes.get('/detalheFechamento', DetalhesControllers.getListaDetalheFechamento)


export default FinanceiroDetalhes;