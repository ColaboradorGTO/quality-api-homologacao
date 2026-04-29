import { Router } from 'express';
import ContaControllers from '../controller/contaController.js'

const AdministrativoConta  = new Router();

AdministrativoConta.get('/prestacaoContasBalanco', ContaControllers.getListaPrestacaoDeContas)

export default AdministrativoConta;