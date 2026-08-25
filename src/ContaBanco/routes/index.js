import { Router } from 'express';
import ContaBancoControllers from '../controllers/ContaBanco.js';


const ContaBancoRoutes = new Router();

ContaBancoRoutes.get('/contaBanco', ContaBancoControllers.getListaContaBanco)

export default ContaBancoRoutes;