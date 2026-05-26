import { Router } from 'express';
import DepositosControllers from '../controllers/depositos.js';

const FinanceiroDepositos = new Router();

FinanceiroDepositos.get('/deposito-loja-conciliar-banco', DepositosControllers.getListaConciliarBanco)
FinanceiroDepositos.get('/deposito-loja', DepositosControllers.getListaDepositosLoja)
FinanceiroDepositos.get('/deposito-loja-consolidado', DepositosControllers.getListaConciliarBancoConsolidado)
FinanceiroDepositos.put('/atualizar-deposito-loja/:id', DepositosControllers.putDepositoLojaCancelar)

export default FinanceiroDepositos;


