import { Router } from 'express';
import FuncionarioController from "../controller/index"

const InformaticaFuncionariosRoutes = new Router();

InformaticaFuncionariosRoutes.get('/atualizarFuncionario', FuncionarioController.getListaAtualizarFuncionario)
InformaticaFuncionariosRoutes.get('/funcionarios-loja', FuncionarioController.getListaFuncionariosLoja)
InformaticaFuncionariosRoutes.get('/vendas-contigencia', FuncionarioController.getListaVendasContigenciaIformatica)
InformaticaFuncionariosRoutes.put('/funcionarios-loja/:id', FuncionarioController.putFuncionarioLoja)
InformaticaFuncionariosRoutes.post('/criar-funcionarios-loja', FuncionarioController.postFuncionarioLoja)
InformaticaFuncionariosRoutes.put('/inativar-funcionario', FuncionarioController.putInativarFuncionario)
InformaticaFuncionariosRoutes.put('/funcionarios-desconto/:id', FuncionarioController.putFuncionarioDesconto)

export default InformaticaFuncionariosRoutes;