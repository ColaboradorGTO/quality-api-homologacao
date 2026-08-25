import { Router } from 'express';
import SaldosControllers from '../controllers/saldos';

const FinanceiroSaldosRoutes = new Router();
FinanceiroSaldosRoutes.get('/movimento-saldo-bonificacao', SaldosControllers.getListaExtratoBonificacaoById)
FinanceiroSaldosRoutes.get('/saldo-loja-por-grupo', SaldosControllers.getListaSaldoExtratoLoja)
FinanceiroSaldosRoutes.put('/criar-movimento-saldo-bonificacao', SaldosControllers.createMovimentoSaldoBonificacao)


export default FinanceiroSaldosRoutes;