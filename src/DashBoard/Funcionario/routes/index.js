import { Router } from 'express';
import DashBoardFuncionariosControllers from '../controllers/funcionarios.js';
const routes = new Router();

routes.get('/funcionarios', DashBoardFuncionariosControllers.getListaFuncionarios)

export default routes;