import { Router } from 'express';
import FuncionarioController from "../controller/index"

const routes = new Router();

routes.get('/atualizarFuncionario', FuncionarioController.getListaAtualizarFuncionario)
routes.get('/funcionarios-loja', FuncionarioController.getListaFuncionariosLoja)
routes.get('/vendas-contigencia', FuncionarioController.getListaVendasContigenciaIformatica)
routes.put('/funcionarios-loja/:id', FuncionarioController.putFuncionarioLoja)
routes.post('/criar-funcionarios-loja', FuncionarioController.postFuncionarioLoja)
routes.put('/inativar-funcionario', FuncionarioController.putInativarFuncionario)
routes.put('/funcionarios-desconto/:id', FuncionarioController.putFuncionarioDesconto)

export default routes;