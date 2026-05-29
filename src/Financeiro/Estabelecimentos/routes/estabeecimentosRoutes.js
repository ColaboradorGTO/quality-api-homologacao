import { Router } from 'express';
import EstabelecimentoControllers from '../controllers/estabelecimento.js';

const FinanceiroEstabelecimentos = new Router();

FinanceiroEstabelecimentos.get('/estabelecimento', EstabelecimentoControllers.getListaEstabelecimentos)

export default FinanceiroEstabelecimentos;

