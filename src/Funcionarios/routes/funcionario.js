import { Router } from 'express';
import FuncionariosControllers from '../controllers/index.js';

const FuncionariosRoutes = new Router();

FuncionariosRoutes.get('/autorizarVoucher', FuncionariosControllers.getAutorizacaoVoucherFuncionarios)
FuncionariosRoutes.get('/funcionario-ativo-por-empresa', FuncionariosControllers.getListaFuncionariosAtivos)
FuncionariosRoutes.get('/todos-funcionario', FuncionariosControllers.getListaTodosFuncionarios)

export default FuncionariosRoutes;
