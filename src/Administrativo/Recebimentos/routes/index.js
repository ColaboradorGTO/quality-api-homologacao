import { Router } from 'express';
import AdmRecebimentosControllers from '../controllers/recebimentos.js';

const AdministrativoRecebimentos = new Router();

AdministrativoRecebimentos.get('/recebimento', AdmRecebimentosControllers.getListaPagamentoVenda)
AdministrativoRecebimentos.get('/funcionario-recebimento', AdmRecebimentosControllers.getListaFuncionarioRecebimento)

export default AdministrativoRecebimentos;
