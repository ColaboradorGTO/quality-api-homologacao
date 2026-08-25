import { Router } from 'express';
import EstabelecimentoControllers from '../controllers/estabelecimento.js';

const FinanceiroEstabelecimentosRoutes = new Router();

FinanceiroEstabelecimentosRoutes.get('/estabelecimento', EstabelecimentoControllers.getListaEstabelecimentos)

export default FinanceiroEstabelecimentosRoutes;

