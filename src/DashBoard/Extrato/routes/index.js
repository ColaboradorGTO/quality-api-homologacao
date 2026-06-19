import { Router } from 'express';
import DashBoardExtratoControllers from '../controller/index.js';
const routes = new Router();

routes.get('/extrato-loja-periodo', DashBoardExtratoControllers.getListaExtratoDaLojaPeriodo)
routes.get('/extrato-loja-periodo-adm', DashBoardExtratoControllers.getListaExtratoDaLojaPeriodoADM)

export default routes;