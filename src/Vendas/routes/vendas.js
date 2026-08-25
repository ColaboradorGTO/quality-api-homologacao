import { Router } from 'express';
import VendasControllers from '../controllers/Vendas.js';

const VendasRoutes = new Router();

VendasRoutes.get('/movimentacao-saldo', VendasControllers.getListaVendasSaldo);
VendasRoutes.get('/rotatividadeVendas', VendasControllers.getListaRotatividade);
VendasRoutes.get('/listaDetalheVendaCliente', VendasControllers.getListaDetalheVendaCliente);
VendasRoutes.get('/venda-xml', VendasControllers.getListaVendaXML);
VendasRoutes.get('/venda-cliente', VendasControllers.getListaVendaClienteGerencia);
VendasRoutes.get('/vendas-prazo-excedido', VendasControllers.getListaVendasPrazoExcedido);
VendasRoutes.get('/vendas-gnre', VendasControllers.getListaVendasGnre);

VendasRoutes.post('/alterar-vendas-prazo-excedido', VendasControllers.postAlterarVendasPrazoExcedido);

export default VendasRoutes;
