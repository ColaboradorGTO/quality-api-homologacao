import { Router } from 'express';
import DanfeControllers from '../controllers/danfe.js';

const DanfeRoutes = new Router();

DanfeRoutes.get('/listaVendasContigencia', DanfeControllers.gerarDanfeLocal)

export default DanfeRoutes;
