import { Router } from 'express';
import ResumoVoucherControllers from '../controllers/index.js';

const ResumoVoucherRoutes = new Router();

ResumoVoucherRoutes.get('/detalheVoucherDados', ResumoVoucherControllers.getListaDetalheVoucherDados)
ResumoVoucherRoutes.get('/detalheNumeroVoucherDados', ResumoVoucherControllers.getDetalheNumeroVoucherDados)
ResumoVoucherRoutes.get('/detalhesVouchersId', ResumoVoucherControllers.getDetalheIDVoucherDadosModal)
ResumoVoucherRoutes.get('/detalheIDVoucherDados', ResumoVoucherControllers.getDetalheIDVoucherDados)
ResumoVoucherRoutes.get('/resumoDetalheVoucher', ResumoVoucherControllers.getResumoDetalheVoucher)
ResumoVoucherRoutes.get('/detalhe-voucher', ResumoVoucherControllers.getListaVoucherGerencia)
ResumoVoucherRoutes.get('/empresasVoucher', ResumoVoucherControllers.getListaEmpresasVoucher)

ResumoVoucherRoutes.post('/auth-funcionario-status', ResumoVoucherControllers.autorizacaoEditarStatusVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-create-voucher', ResumoVoucherControllers.postAuthFuncionarioCreateVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-print-voucher', ResumoVoucherControllers.postAuthFuncionarioPrintVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-update-voucher', ResumoVoucherControllers.postAuthFuncionarioUpdateVoucher)


export default ResumoVoucherRoutes;