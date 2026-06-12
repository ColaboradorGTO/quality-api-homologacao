import { Router } from 'express';
import FaturasControllers from '../controllers/faturas.js';

const FinanceiroFaturas = new Router();

FinanceiroFaturas.get('/fatura-pix-periodo', FaturasControllers.getListaFaturasPixPeriodo)
FinanceiroFaturas.get('/detalhe-faturas', FaturasControllers.getDetalheFaturaFinanceiro)
FinanceiroFaturas.get('/venda-total-fatura-pix-empresa', FaturasControllers.getListaVendaFaturaPixPeriodo)
FinanceiroFaturas.get('/venda-total-fatura-pix-empresa-compensada', FaturasControllers.getListaVendaFaturaPixPeriodoCompensacao)
FinanceiroFaturas.get('/faturaPixPeriodo', FaturasControllers.getListaVendaFaturaPixPeriodo) 
FinanceiroFaturas.get('/faturaPixConsolidadoLoja', FaturasControllers.getListaFaturaPixConsolidadoLoja) 
FinanceiroFaturas.get('/previa-consolidacao-faturas', FaturasControllers.getPreviaFaturasConsolidadas) 
FinanceiroFaturas.get('/consolidacao-faturas', FaturasControllers.getConsolidacaoFaturas) 

FinanceiroFaturas.put('/atualizar-status-fatura-pix', FaturasControllers.putListaFaturaVendaPixStatusConferido) 
FinanceiroFaturas.put('/atualizar-recompra', FaturasControllers.putListaAtualizarRecompra) 
FinanceiroFaturas.put('/fatura-loja-atualizar', FaturasControllers.putListaAtualizarFatura) 
FinanceiroFaturas.put('/atualizarFatura/:id', FaturasControllers.putFaturaFinanceiro)

FinanceiroFaturas.put('/consolidacao-faturas/:id', FaturasControllers.putConsolidacaoFatura)
FinanceiroFaturas.post('/consolidacao-faturas', FaturasControllers.postConsolidacaoFatura)
FinanceiroFaturas.post('/consolidacao-faturas-integracao', FaturasControllers.postConsolidacaoFaturaSAP)

export default FinanceiroFaturas;

