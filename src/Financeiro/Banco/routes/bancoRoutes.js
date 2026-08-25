import { Router } from 'express';
import BancoControllers from '../controller/controller.js';

const FinanceiroBancoRoutes = new Router();

FinanceiroBancoRoutes.get('/banco', BancoControllers.getListaBanco)
FinanceiroBancoRoutes.get('/conta-banco', BancoControllers.getListaContaBanco)
FinanceiroBancoRoutes.put('/conta-banco/:id', BancoControllers.putContaBanco)
FinanceiroBancoRoutes.post('/cadastrar-conta-banco', BancoControllers.postContaBanco)

export default FinanceiroBancoRoutes;
