import { Router } from 'express';
import MetasControllers from '../controller/MetaController.js';

const ComercialMetasRoutes = new Router();

ComercialMetasRoutes.get('/listaMetaVendas', MetasControllers.getListaMetasGrupo)
ComercialMetasRoutes.get('/meta-vendas', MetasControllers.getListaMetasVendas)
ComercialMetasRoutes.get('/meta-vendas-resumida', MetasControllers.getListaMetasVendasResumida)

export default ComercialMetasRoutes;
