import { Router } from 'express';
import PremiacaoControllers from '../controller/ControllerPermiacao';

const ComercialPremiacaoRoutes = new Router();

ComercialPremiacaoRoutes.get('/listaPremiacoes', PremiacaoControllers.getListaPremiacoesPeriodo)
ComercialPremiacaoRoutes.get('/lista-premios-gerente', PremiacaoControllers.getListaPremiosGerente)
ComercialPremiacaoRoutes.get('/lista-premiacao-cadastrada', PremiacaoControllers.getListaPremiacaoCadastrada)
ComercialPremiacaoRoutes.get('/cadastra-premiacoes', PremiacaoControllers.postCadastrarPremiacoes)

export default ComercialPremiacaoRoutes;
