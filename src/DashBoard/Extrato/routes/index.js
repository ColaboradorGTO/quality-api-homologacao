import { Router } from 'express';
import DashBoardExtratoControllers from '../controller/index.js';

const DashBoardExtratoRoutes = new Router();

DashBoardExtratoRoutes.get('/extrato-loja-periodo', DashBoardExtratoControllers.getListaExtratoDaLojaPeriodo)
DashBoardExtratoRoutes.get('/extrato-loja-periodo-adm', DashBoardExtratoControllers.getListaExtratoDaLojaPeriodoADM)

export default DashBoardExtratoRoutes;