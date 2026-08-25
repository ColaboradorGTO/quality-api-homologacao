import { Router } from 'express';
import OrdemTransferenciaControllers from '../controllers/index.js';


const ExpedicaoOTRoutes = new Router();

ExpedicaoOTRoutes.get('/listaProdutos', OrdemTransferenciaControllers.getListaProdutosExpedicao)
ExpedicaoOTRoutes.get('/resumoOrdemTransferenciaExpedicao', OrdemTransferenciaControllers.getListaOrdemTransferenciaExpedicao)
ExpedicaoOTRoutes.get('/detalhe-ordem-transferencia', OrdemTransferenciaControllers.getListaDetalheOT)

ExpedicaoOTRoutes.get('/statusDivergencia', OrdemTransferenciaControllers.getListaSD)
ExpedicaoOTRoutes.get('/statusOrdemTransferencia', OrdemTransferenciaControllers.getListaStatusOT)
ExpedicaoOTRoutes.get('/faturasOT', OrdemTransferenciaControllers.getListaFaturasOT)
ExpedicaoOTRoutes.get('/rotinaMovimentacao', OrdemTransferenciaControllers.getListaRotinaMovimentacao)
ExpedicaoOTRoutes.get('/otTransferencia', OrdemTransferenciaControllers.getListaOTDepLoja)
ExpedicaoOTRoutes.get('/impressao-etiqueta-ot', OrdemTransferenciaControllers.getListaImpressaoEtiquetaOT)
ExpedicaoOTRoutes.get('/consulta-nfe-saida-tranferencia', OrdemTransferenciaControllers.getListaNFESaidaTransferencia)
ExpedicaoOTRoutes.put('/updateOrdemTransferencia', OrdemTransferenciaControllers.updateOrdemTransferencia)
ExpedicaoOTRoutes.put('/updateStatusDivergencia', OrdemTransferenciaControllers.updateAlterarSD)

ExpedicaoOTRoutes.put('/inserirSD', OrdemTransferenciaControllers.storeInserirSD)

ExpedicaoOTRoutes.get('/resumo-ordem-transferencia', OrdemTransferenciaControllers.getListaOrdemTransferencia)
ExpedicaoOTRoutes.put('/resumo-ordem-transferencia/:id', OrdemTransferenciaControllers.putResumoOrdemTransferencia)
ExpedicaoOTRoutes.post('/criar-resumo-ordem-transferencia', OrdemTransferenciaControllers.postResumoOrdemTransferencia)
ExpedicaoOTRoutes.post('/consulta-nfe-saida-tranferencia-varias', OrdemTransferenciaControllers.postConsultaNFESaidaTrasferenciaVarias)

export default ExpedicaoOTRoutes;