import { Router } from 'express';
import VoucherControllers from '../controllers/voucher.js'; 

const FianceiroVoucher = new Router();
FianceiroVoucher.get('/resumo-voucher', VoucherControllers.getListaResumoVoucherFinanceiro)

export default FianceiroVoucher;

