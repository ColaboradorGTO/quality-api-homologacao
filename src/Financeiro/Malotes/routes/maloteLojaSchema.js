import { Router } from 'express';
import MaloteFinanceiroController from '../controllers/index.js';

const FinanceiroMalotes = new Router();
FinanceiroMalotes.get('/malotes-loja', MaloteFinanceiroController.getListasMalotesLojas)
FinanceiroMalotes.get('/malotes-por-loja', MaloteFinanceiroController.getListaMalortesPorLoja)
FinanceiroMalotes.get('/detalhe-malotes-por-loja', MaloteFinanceiroController.getListaDetalhesMalortesPorLoja)
FinanceiroMalotes.get('/pendencias-malotes', MaloteFinanceiroController.getListaPendenciasMalotes)
FinanceiroMalotes.get('/historicos-malotes', MaloteFinanceiroController.getListasHistoricosMalotes)

FinanceiroMalotes.post('/criar-malotes-por-loja', MaloteFinanceiroController.postMalotesPorLoja)
FinanceiroMalotes.put('/malotes-loja/:id', MaloteFinanceiroController.putMalotesLoja)


export default FinanceiroMalotes;