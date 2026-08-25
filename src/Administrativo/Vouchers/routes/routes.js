import { Router } from 'express';
import AdmVouchersControllers from '../controllers/index.js';


const AdministrativoVouchers = new Router();

AdministrativoVouchers.post('/editar-voucher/:id', AdmVouchersControllers.putEditarVoucher);
// admVendasRoutes.get('/lista-venda-cliente', AdmVendasControllers.getListaVendaCliente);

export default AdministrativoVouchers;