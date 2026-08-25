import { Router } from 'express';
import ExtratosControllers from '../controllers/extrato.js';

const FinanceiroExtratoRoutes  = new Router();

FinanceiroExtratoRoutes.get('/lista-extrato-periodo', ExtratosControllers.getListaExtratoDaLojaPeriodoFinanceiro)
FinanceiroExtratoRoutes.post('/ajuste-extrato', ExtratosControllers.postListaAjusteExtrato)
FinanceiroExtratoRoutes.put('/ajuste-extrato/:id', ExtratosControllers.putListaAjusteExtrato)



export default FinanceiroExtratoRoutes;
