import { Router } from 'express';
import DespesasControllers from '../controllers/depesas.js';

const FinanceiroDespesasRoutes = new Router();

FinanceiroDespesasRoutes.get('/despesa-loja', DespesasControllers.getListaDespesasLoja)
FinanceiroDespesasRoutes.put('/editar-despesa', DespesasControllers.putDespesasLoja)
FinanceiroDespesasRoutes.put('/editar-status-despesa/:id', DespesasControllers.putStatusDespesasLoja)
FinanceiroDespesasRoutes.post('/integrar-despesa', DespesasControllers.postIntegracaoDespesa)



export default FinanceiroDespesasRoutes;

