import { Router } from 'express';
import VoucherControllers from '../controllers/voucher.js'; 

const FianceiroVoucherRoutes = new Router();
FianceiroVoucherRoutes.get('/resumo-voucher', VoucherControllers.getListaResumoVoucherFinanceiro)

export default FianceiroVoucherRoutes;

