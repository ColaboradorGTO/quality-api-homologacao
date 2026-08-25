import { Router } from 'express';
import CategoriaReceitaDespesasControllers from '../controllers/CategoriaReceitaDespesa.js';

const CategoriaReceitaRoutes = new Router();

CategoriaReceitaRoutes.get('/categoria-receita-despesa', CategoriaReceitaDespesasControllers.getListaCategoriaDespesas)
CategoriaReceitaRoutes.get('/categoriaReceitaDespesaFinanceira', CategoriaReceitaDespesasControllers.getListaCategoriaDespesasFinanceira)

export default CategoriaReceitaRoutes;