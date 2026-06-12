import { Router } from 'express';
import PedidosControllers from '../controllers/pedidos.js';

const FinanceiroPedidos = new Router();
FinanceiroPedidos.get('/pedido-compras', PedidosControllers.getListaPedidosCompras)


export default FinanceiroPedidos;