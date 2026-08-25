import { Router } from 'express';
import DepositosControllers from '../controllers/depositos.js';

const FinanceiroDepositosRoutes = new Router();

FinanceiroDepositosRoutes.get('/deposito-loja-conciliar-banco', DepositosControllers.getListaConciliarBanco)
FinanceiroDepositosRoutes.get('/deposito-loja', DepositosControllers.getListaDepositosLoja)
FinanceiroDepositosRoutes.get('/deposito-loja-consolidado', DepositosControllers.getListaConciliarBancoConsolidado)
FinanceiroDepositosRoutes.put('/atualizar-deposito-loja/:id', DepositosControllers.putDepositoLojaCancelar)

export default FinanceiroDepositosRoutes;


