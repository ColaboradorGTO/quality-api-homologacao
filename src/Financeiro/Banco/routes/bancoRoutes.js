import { Router } from 'express';
import BancoControllers from '../controller/controller.js';

const FinanceiroBanco = new Router();

FinanceiroBanco.get('/banco', BancoControllers.getListaBanco)
FinanceiroBanco.get('/conta-banco', BancoControllers.getListaContaBanco)
FinanceiroBanco.put('/conta-banco/:id', BancoControllers.putContaBanco)
FinanceiroBanco.post('/cadastrar-conta-banco', BancoControllers.postContaBanco)

export default FinanceiroBanco;

