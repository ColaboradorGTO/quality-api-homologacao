import { Router } from 'express';
import SaldosControllers from '../controllers/saldos';

const SaldosRoutes = new Router();
SaldosRoutes.get('/movimento-saldo-bonificacao', SaldosControllers.getListaExtratoBonificacaoById)
SaldosRoutes.get('/saldo-loja-por-grupo', SaldosControllers.getListaSaldoExtratoLoja)
SaldosRoutes.put('/criar-movimento-saldo-bonificacao', SaldosControllers.createMovimentoSaldoBonificacao)


export default SaldosRoutes;