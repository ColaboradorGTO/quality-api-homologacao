import { Router } from 'express';
import AdmPagamentosControllers from '../controllers/pagamentos.js'

const AdministrativoPagamentos = new Router();

AdministrativoPagamentos.get('/forma-pagamentos', AdmPagamentosControllers.getListaFormaPagamento)
AdministrativoPagamentos.get('/pagamento-tef', AdmPagamentosControllers.getListaPagamentoTef)
AdministrativoPagamentos.get('/pagamento-pos', AdmPagamentosControllers.getListaPagamentoPos)

export default AdministrativoPagamentos;

