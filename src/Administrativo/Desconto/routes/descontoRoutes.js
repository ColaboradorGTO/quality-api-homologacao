import { Router } from 'express';
import AdmDescontoControllers from '../controllers/desconto.js';

const AdministrativoDesconto = new Router();

AdministrativoDesconto.get('/desconto-motivo-vendas-adm', AdmDescontoControllers.getListaDescontoMotivoVendas)

export default AdministrativoDesconto;