import { Router } from 'express';
import ComercialControllers from '../controller/comercialControler.js';

const ComercialRoutes = new Router();

ComercialRoutes.get('/listaEmpresaComercial', ComercialControllers.getListaEmpresaComercial)
ComercialRoutes.get('/venda-marca-periodo-comercial', ComercialControllers.getListaVendasMarcaPorPeriodoComercial)
ComercialRoutes.get('/vendas-estoque-grupo-subGrupo', ComercialControllers.getListaVendasEstoqueGrupoSubGrupoComercial)
ComercialRoutes.get('/funcionario-relatorio', ComercialControllers.getListaColaboradorRelatorio)
ComercialRoutes.get('/custoPorLoja', ComercialControllers.getListaVendasCustoLojas)

export default ComercialRoutes;
