import { Router } from 'express';
import DescontoControllers from '../controllers/desconto.js';

const FinanceiroDesconto = new Router();

FinanceiroDesconto.get('/desconto-vendas', DescontoControllers.getListaDescontoVendas)
FinanceiroDesconto.get('/desconto-motivo-vendas', DescontoControllers.getListaDescontoMotivoVendas)
FinanceiroDesconto.get('/desconto-vendas-simplificado', DescontoControllers.getListaDescontoVendasSimplificada)

export default FinanceiroDesconto;

