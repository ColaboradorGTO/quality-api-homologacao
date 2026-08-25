import { Router } from 'express';
import DescontoControllers from '../controllers/desconto.js';

const FinanceiroDescontoRoutes = new Router();

FinanceiroDescontoRoutes.get('/desconto-vendas', DescontoControllers.getListaDescontoVendas)
FinanceiroDescontoRoutes.get('/desconto-motivo-vendas', DescontoControllers.getListaDescontoMotivoVendas)
FinanceiroDescontoRoutes.get('/desconto-vendas-simplificado', DescontoControllers.getListaDescontoVendasSimplificada)

export default FinanceiroDescontoRoutes;
