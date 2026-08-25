import { Router } from 'express';
import ServiceLayerControllers from '../controllers/index.js';

const ServiceLayerRoutes = new Router();

ServiceLayerRoutes.post('/deposito-integracao', ServiceLayerControllers.postDepositoIntegrarNoSAP);
ServiceLayerRoutes.post('/adiantamentos-salariais-integracao', ServiceLayerControllers.postIntegrarAdiantamentoSalarial);
ServiceLayerRoutes.post('/quebras-de-caixas-integracao', ServiceLayerControllers.postIntegrarQuebraCaixaSAP);
ServiceLayerRoutes.post('/pix-integracao', ServiceLayerControllers.postIntegrarPagamentoPixSAP);
ServiceLayerRoutes.post('/migrar-produto-avulso', ServiceLayerControllers.postMigrarProdutoAvulso);
ServiceLayerRoutes.post('/integrar-despesa', ServiceLayerControllers.postIntegrarDespesaSAP);

export default ServiceLayerRoutes;
