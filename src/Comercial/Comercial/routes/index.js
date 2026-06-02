import { Router } from 'express';
import ComercialControllers from '../controller/comercialControler.js';

const routes = new Router();

routes.get('/listaEmpresaComercial', ComercialControllers.getListaEmpresaComercial)
routes.get('/venda-marca-periodo-comercial', ComercialControllers.getListaVendasMarcaPorPeriodoComercial)
routes.get('/vendas-estoque-grupo-subGrupo', ComercialControllers.getListaVendasEstoqueGrupoSubGrupoComercial)
routes.get('/funcionario-relatorio', ComercialControllers.getListaColaboradorRelatorio)
routes.get('/custoPorLoja', ComercialControllers.getListaVendasCustoLojas)

export default routes;