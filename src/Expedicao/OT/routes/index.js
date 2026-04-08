import { Router } from 'express';
import OrdemTransferenciaControllers from '../controllers/index.js';


const routes = new Router();

routes.get('/listaProdutos', ExpedicaoControllers.getListaProdutosExpedicao)
routes.get('/resumoOrdemTransferenciaExpedicao', ExpedicaoControllers.getListaOrdemTransferenciaExpedicao)
routes.get('/detalhe-ordem-transferencia', ExpedicaoControllers.getListaDetalheOT)

routes.get('/statusDivergencia', ExpedicaoControllers.getListaSD)
routes.get('/statusOrdemTransferencia', ExpedicaoControllers.getListaStatusOT)
routes.get('/faturasOT', ExpedicaoControllers.getListaFaturasOT)
routes.get('/rotinaMovimentacao', ExpedicaoControllers.getListaRotinaMovimentacao)
routes.get('/otTransferencia', ExpedicaoControllers.getListaOTDepLoja)
routes.get('/impressao-etiqueta-ot', ExpedicaoControllers.getListaImpressaoEtiquetaOT)
routes.get('/consulta-nfe-saida-tranferencia', ExpedicaoControllers.getListaNFESaidaTransferencia)
routes.put('/updateOrdemTransferencia', ExpedicaoControllers.updateOrdemTransferencia)
routes.put('/updateStatusDivergencia', ExpedicaoControllers.updateAlterarSD)

routes.put('/inserirSD', ExpedicaoControllers.storeInserirSD)

routes.get('/resumo-ordem-transferencia', ExpedicaoControllers.getListaOrdemTransferencia)
routes.put('/resumo-ordem-transferencia/:id', ExpedicaoControllers.putResumoOrdemTransferencia)
routes.post('/criar-resumo-ordem-transferencia', ExpedicaoControllers.postResumoOrdemTransferencia)
routes.post('/consulta-nfe-saida-tranferencia-varias', ExpedicaoControllers.postConsultaNFESaidaTrasferenciaVarias)

export default routes;