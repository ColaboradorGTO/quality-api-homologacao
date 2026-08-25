import { Router } from 'express';
import FaturasControllers from '../controllers/faturas.js';

const FinanceiroFaturasRoutes = new Router();

FinanceiroFaturasRoutes.get('/fatura-pix-periodo', FaturasControllers.getListaFaturasPixPeriodo)
FinanceiroFaturasRoutes.get('/detalhe-faturas', FaturasControllers.getDetalheFaturaFinanceiro)
FinanceiroFaturasRoutes.get('/venda-total-fatura-pix-empresa', FaturasControllers.getListaVendaFaturaPixPeriodo)
FinanceiroFaturasRoutes.get('/venda-total-fatura-pix-empresa-compensada', FaturasControllers.getListaVendaFaturaPixPeriodoCompensacao)
FinanceiroFaturasRoutes.get('/faturaPixPeriodo', FaturasControllers.getListaVendaFaturaPixPeriodo) 
FinanceiroFaturasRoutes.get('/faturaPixConsolidadoLoja', FaturasControllers.getListaFaturaPixConsolidadoLoja) 
FinanceiroFaturasRoutes.get('/previa-consolidacao-faturas', FaturasControllers.getPreviaFaturasConsolidadas) 
FinanceiroFaturasRoutes.get('/consolidacao-faturas', FaturasControllers.getConsolidacaoFaturas) 

FinanceiroFaturasRoutes.put('/atualizar-status-fatura-pix', FaturasControllers.putListaFaturaVendaPixStatusConferido) 
FinanceiroFaturasRoutes.put('/atualizar-recompra', FaturasControllers.putListaAtualizarRecompra) 
FinanceiroFaturasRoutes.put('/fatura-loja-atualizar', FaturasControllers.putListaAtualizarFatura) 
FinanceiroFaturasRoutes.put('/atualizarFatura/:id', FaturasControllers.putFaturaFinanceiro)

FinanceiroFaturasRoutes.put('/consolidacao-faturas/:id', FaturasControllers.putConsolidacaoFatura)
FinanceiroFaturasRoutes.post('/consolidacao-faturas', FaturasControllers.postConsolidacaoFatura)
FinanceiroFaturasRoutes.post('/consolidacao-faturas-integracao', FaturasControllers.postConsolidacaoFaturaSAP)

export default FinanceiroFaturasRoutes;

