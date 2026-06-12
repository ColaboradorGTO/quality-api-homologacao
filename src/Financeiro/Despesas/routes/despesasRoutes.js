import { Router } from 'express';
import DespesasControllers from '../controllers/depesas.js';

const FinanceiroDespesas = new Router();

FinanceiroDespesas.get('/despesa-loja', DespesasControllers.getListaDespesasLoja)
FinanceiroDespesas.put('/editar-despesa', DespesasControllers.putDespesasLoja)
FinanceiroDespesas.put('/editar-status-despesa/:id', DespesasControllers.putStatusDespesasLoja)


export default FinanceiroDespesas;

