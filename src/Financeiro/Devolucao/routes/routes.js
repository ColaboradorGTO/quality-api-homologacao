import { Router } from 'express';
import DevolucaoControllers from '../controllers/devolucao.js';

const FinanceiroDevolucaoRoutes = new Router();

FinanceiroDevolucaoRoutes.get('/motivo-devolucao', DevolucaoControllers.getListaMotivosDevolucao)
FinanceiroDevolucaoRoutes.get('/atualizar-motivo-devolucao', DevolucaoControllers.putMotivoDevolucao)
FinanceiroDevolucaoRoutes.get('/criar-motivo-devolucao', DevolucaoControllers.postMotivoDevolucao)

export default FinanceiroDevolucaoRoutes;