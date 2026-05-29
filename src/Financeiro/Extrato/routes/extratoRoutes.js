import { Router } from 'express';
import ExtratosControllers from '../controllers/extrato.js';

const FinanceiroExtrato  = new Router();

FinanceiroExtrato.get('/lista-extrato-periodo', ExtratosControllers.getListaExtratoDaLojaPeriodoFinanceiro)
FinanceiroExtrato.post('/ajuste-extrato', ExtratosControllers.postListaAjusteExtrato)
FinanceiroExtrato.put('/ajuste-extrato/:id', ExtratosControllers.putListaAjusteExtrato)



export default FinanceiroExtrato;

