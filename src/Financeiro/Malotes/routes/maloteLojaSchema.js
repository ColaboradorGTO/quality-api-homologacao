import { Router } from 'express';
import MaloteFinanceiroController from '../controllers/index.js';

const FinanceiroMalotesRoutes = new Router();
FinanceiroMalotesRoutes.get('/malotes-loja', MaloteFinanceiroController.getListasMalotesLojas)
FinanceiroMalotesRoutes.get('/malotes-por-loja', MaloteFinanceiroController.getListaMalortesPorLoja)
FinanceiroMalotesRoutes.get('/detalhe-malotes-por-loja', MaloteFinanceiroController.getListaDetalhesMalortesPorLoja)
FinanceiroMalotesRoutes.get('/pendencias-malotes', MaloteFinanceiroController.getListaPendenciasMalotes)
FinanceiroMalotesRoutes.get('/historicos-malotes', MaloteFinanceiroController.getListasHistoricosMalotes)

FinanceiroMalotesRoutes.post('/criar-malotes-por-loja', MaloteFinanceiroController.postMalotesPorLoja)
FinanceiroMalotesRoutes.put('/malotes-loja/:id', MaloteFinanceiroController.putMalotesLoja)


export default FinanceiroMalotesRoutes;