import { Router } from 'express';
import MetasControllers from '../controller/MetaController.js';

const routes = new Router();

routes.get('/listaMetaVendas', MetasControllers.getListaMetasGrupo)
routes.get('/meta-vendas', MetasControllers.getListaMetasVendas)
routes.get('/meta-vendas-resumida', MetasControllers.getListaMetasVendasResumida)

export default routes;