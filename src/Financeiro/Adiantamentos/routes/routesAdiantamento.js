import { Router } from 'express';
import AdiantamentosControllers from '../controllers/adiantamentos.js';

const FinanceiroAdiantamentosRoutes = new Router();

FinanceiroAdiantamentosRoutes.get('/adiantamento-salarial', AdiantamentosControllers.getListaAdiantamentoSalarialFinanceiro)
FinanceiroAdiantamentosRoutes.get('/lista-caixas-movimento', AdiantamentosControllers.getListaCaixasMovmentoFinanceiro)
FinanceiroAdiantamentosRoutes.get('/lista-caixas-status', AdiantamentosControllers.getListaCaixaStatus)
FinanceiroAdiantamentosRoutes.get('/lista-caixas-zerados', AdiantamentosControllers.getListaCaixaZerados)
FinanceiroAdiantamentosRoutes.put('/atualizacaoAdiantamentoStatus', AdiantamentosControllers.putAdiantamentoStatus)
FinanceiroAdiantamentosRoutes.put('/fechar-caixas-zerados', AdiantamentosControllers.putFecharCaixaZerado)

export default FinanceiroAdiantamentosRoutes;
