import { Router } from 'express';
import RecursosHumanosControllers from '../controller/ControllerRecursosHumanos';

const RecursosHumanosRoutes = new Router();

RecursosHumanosRoutes.post('/criarFuncionariosLojaRH', RecursosHumanosControllers.postFuncionarioLojaRH);
RecursosHumanosRoutes.put('/funcionarioLojaRH', RecursosHumanosControllers.putFuncionarioLojaRH);
RecursosHumanosRoutes.put('/inativarFuncionarioRH', RecursosHumanosControllers.putInativarFuncionarioRH);
RecursosHumanosRoutes.put('/funcionarioDescontoRH', RecursosHumanosControllers.putFuncionarioDescontoRH);

export default RecursosHumanosRoutes;