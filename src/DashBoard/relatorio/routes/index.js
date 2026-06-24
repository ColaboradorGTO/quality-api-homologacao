import { Router } from 'express';
import DashBoardRelatorioControllers from '../controller/index.js';
const routes = new Router();

routes.get('/relatorioBI', DashBoardRelatorioControllers.getListaRelatorioBIGerencia)

export default routes;