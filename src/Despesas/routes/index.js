import { Router } from 'express';
import DespesasLojaControllers from '../controllers/DespesasLoja.js';

const DespesasRoutes = new Router();

DespesasRoutes.get('/despesas-loja-empresa', DespesasLojaControllers.getListaDespesasLojaEmpresa)
DespesasRoutes.get('/despesa-Loja-todos', DespesasLojaControllers.getListaTodasDespesasLojas)
DespesasRoutes.get('/despesa-lojas-dash', DespesasLojaControllers.getListaDespesasLojaDashBoard)
DespesasRoutes.get('/despesasEmpresas', DespesasLojaControllers.getListaDespesasEmpresaGerencia)

DespesasRoutes.post('/cadastrar-despesa-loja', DespesasLojaControllers.postCadastrarDespesasLoja)

export default DespesasRoutes;
