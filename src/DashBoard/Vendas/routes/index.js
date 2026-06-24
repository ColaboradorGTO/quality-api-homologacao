import { Router } from 'express';
import DashBoardVendasControllers from '../controllers/venda.js';

const routes = new Router();

routes.get('/resumo-venda-convenio-desconto', DashBoardVendasControllers.getVendasConvenioDescontoFuncionario)
routes.get('/detalhe-venda', DashBoardVendasControllers.getRetornoVendasAtivasDetalheProduto)
routes.get('/resumo-venda-caixa-detalhado', DashBoardVendasControllers.getListaVendaDetalhe)
routes.get('/venda-resumido', DashBoardVendasControllers.getListaVendasLojaResumidoGerencia)
routes.get('/vendasVendedorPeriodoLojaGerencia', DashBoardVendasControllers.getListaVendasVendedorPeriodoGerencia)
routes.get('/vendas-recebimentos', DashBoardVendasControllers.getListaRecebimento)
routes.get('/lista-caixas-movimento-gerencia', DashBoardVendasControllers.getListaCaixaMovimentosGerencia)
routes.get('/resumo-venda-convenio', DashBoardVendasControllers.getListaResumoVendasConvenio)
routes.get('/resumo-venda-caixa', DashBoardVendasControllers.getListaResumoVendasCaixas)
routes.get('/lista-caixas-fechados-nao-conferido', DashBoardVendasControllers.getListaCaixasFechados)
routes.get('/resumoVendaGerencia', DashBoardVendasControllers.getResumoVendaGerencia)
routes.get('/resumoVendaCaixaDetalhado', DashBoardVendasControllers.getRetornoListaVendaDetalhe)
routes.get('/detalheVenda', DashBoardVendasControllers.getRetornoListaVendasAtivasDetalheProduto)
routes.get('/resumoVendaConvenioDescontoFN', DashBoardVendasControllers.getRetornoListaVendasConvenioDescontoFuncionario)
routes.get('/resumoVendaConvenioDesc', DashBoardVendasControllers.getRetornoListaVendasConvenioDesconto)
routes.get('/vendedor', DashBoardVendasControllers.getListaVendasVendedorGerencia)
routes.get('/vendasAtivasResumoGerencia', DashBoardVendasControllers.getListaResumoVendasAtivaGerencia)
routes.get('/listaVendasGerencia', DashBoardVendasControllers.getListaVendasGerencia)
routes.get('/vendasCanceladasResumoGerencia', DashBoardVendasControllers.getListaResumoVendasCanceladasGerencia)

export default routes;
