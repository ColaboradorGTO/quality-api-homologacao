import { Router } from 'express';
import CaixasControllers from '../controllers/caixas.js';

const FinanceiroCaixas = new Router();

FinanceiroCaixas.get('/lista-caixas-movimento', CaixasControllers.getListaCaixasMovmentoFinanceiro)
FinanceiroCaixas.get('/lista-caixas-status', CaixasControllers.getListaCaixaStatus)
FinanceiroCaixas.get('/lista-caixas-zerados', CaixasControllers.getListaCaixaZerados)


FinanceiroCaixas.put('/fechar-caixas-zerados', CaixasControllers.putFecharCaixaZerado)

export default FinanceiroCaixas;
