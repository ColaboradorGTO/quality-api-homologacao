import { Router } from 'express';
import DepositosLojaControllers from '../controllers/DepositosLoja.js';

const routes = new Router();

routes.get('/depositosLoja', DepositosLojaControllers.getListaDepositosLojaEmpresa)
routes.get('/deposito-loja-empresa', DepositosLojaControllers.getListaDepositosLojaEmpresa)

routes.post('/cadastrar-deposito-loja', DepositosLojaControllers.postDepositoLoja)
routes.put('/deposito-loja/:id', DepositosLojaControllers.putListaDepositosLoja)
routes.put('/atualizacao-status-conferido/:id', DepositosLojaControllers.putAtualizarStatusConferido)
routes.put('/deposito-loja-atualizacao-status/:id', DepositosLojaControllers.putAtualizarStatusDepositoLoja)

export default routes;
