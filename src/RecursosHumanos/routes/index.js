import { Router } from 'express';
import RecursosHumanosControllers from '../controller/ControllerRecursosHumanos';
const routes = new Router();

routes.post('/criarFuncionariosLojaRH', RecursosHumanosControllers.postFuncionarioLojaRH);

routes.put('/funcionarioLojaRH', RecursosHumanosControllers.putFuncionarioLojaRH);
routes.put('/inativarFuncionarioRH', RecursosHumanosControllers.putInativarFuncionarioRH);
routes.put('/funcionarioDescontoRH', RecursosHumanosControllers.putFuncionarioDescontoRH);

export default routes;