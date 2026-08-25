import { Router } from 'express';
import ConferenciaCegaControllers from '../controllers/ConferenciaCega.js';

const ConferenciaCegaRoutes = new Router();

ConferenciaCegaRoutes.get('/listaOrdemTransferenciaConferenciaCega', ConferenciaCegaControllers.getListaOrdemTransferenciaConferenciaCega)
ConferenciaCegaRoutes.get('/detalhe-ordem-transferencia-cega', ConferenciaCegaControllers.getDetalheOrdemTransferenciaConferenciaCega)
ConferenciaCegaRoutes.get('/status-divergencia', ConferenciaCegaControllers.getListaStatusOTConfrecencia)

ConferenciaCegaRoutes.put('/resumo-ordem-transferencia/:id', ConferenciaCegaControllers.putResumoOrdemTransferencia)
ConferenciaCegaRoutes.post('/inserir-status-divergencia', ConferenciaCegaControllers.postStatusDivergencia)
ConferenciaCegaRoutes.put('/status-divergencia/:id', ConferenciaCegaControllers.putStatusDivergencia)
export default ConferenciaCegaRoutes;
