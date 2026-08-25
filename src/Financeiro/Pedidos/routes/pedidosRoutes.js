import { Router } from 'express';
import PedidosControllers from '../controllers/pedidos.js';

const FinanceiroPedidosRoutes = new Router();
FinanceiroPedidosRoutes.get('/pedido-compras', PedidosControllers.getListaPedidosCompras)
FinanceiroPedidosRoutes.get('/financeiro-lista-pedidos', PedidosControllers.getListaPedidosFinanceiro)

export default FinanceiroPedidosRoutes;