import { Router } from 'express';
import PremiacaoControllers from '../controller/ControllerPermiacao';

const routes = new Router();

routes.get('/listaPremiacoes', PremiacaoControllers.getListaPremiacoesPeriodo)
routes.get('/lista-premios-gerente', PremiacaoControllers.getListaPremiosGerente)
routes.get('/lista-premiacao-cadastrada', PremiacaoControllers.getListaPremiacaoCadastrada)
routes.get('/cadastra-premiacoes', PremiacaoControllers.postCadastrarPremiacoes)

export default routes;