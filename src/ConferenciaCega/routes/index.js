import { Router } from 'express';
import ConferenciaCegaControllers from '../controllers/ConferenciaCega.js';

const routes = new Router();

routes.get('/listaOrdemTransferenciaConferenciaCega', ConferenciaCegaControllers.getListaOrdemTransferenciaConferenciaCega)
routes.get('/detalhe-ordem-transferencia-cega', ConferenciaCegaControllers.getDetalheOrdemTransferenciaConferenciaCega)
routes.get('/status-divergencia', ConferenciaCegaControllers.getListaStatusOTConfrecencia)

routes.put('/resumo-ordem-transferencia/:id', ConferenciaCegaControllers.putResumoOrdemTransferencia)
routes.post('/inserir-status-divergencia', ConferenciaCegaControllers.postStatusDivergencia)
routes.put('/status-divergencia/:id', ConferenciaCegaControllers.putStatusDivergencia)
export default routes;