import { Router } from 'express';
import ContabilidadeControllers from '../controllers/Contabilidade.js';

const routes = new Router();

routes.get('/listaVendasContigencia', ContabilidadeControllers.getListaVendasContigencia)
routes.get('/vendasDetalheContigencia', ContabilidadeControllers.getListaDetalheVendasContigencia)
routes.get('/vendasPagamentoContigencia', ContabilidadeControllers.getListaPagamentoVendasContigencia)
routes.get('/vendasEstoqueComercial', ContabilidadeControllers.getListaVendasEstoqueComercial)
routes.get('/vendasProdutos', ContabilidadeControllers.getListaVendasPeriodo)
routes.get('/vendasProdutosConsolidado', ContabilidadeControllers.getListaVendasPeriodoConsolidado)

routes.get('/todas-empresas', ContabilidadeControllers.getTodasEmpresas)
routes.get('/alvaras', ContabilidadeControllers.getAlvaras)
routes.get('/alvaras-empresa', ContabilidadeControllers.getAlvaraEmpresas)
routes.get('/alvaras-empresa-detalhe', ContabilidadeControllers.getEmpresaAlvara)
routes.get('/vinculo-alvaras-empresa', ContabilidadeControllers.getVinculoAlvaraEmpresa)
routes.get('/visualizar-anexo-alvara', ContabilidadeControllers.getVisualizarAnexoAlvara)
routes.get('/status-alvara', ContabilidadeControllers.getStatusAlvara)

routes.put('/vinculoAlvarasEmpresa/:id', ContabilidadeControllers.putVinculoAlvarasEmpresas)
routes.put('/arquivosAnexosAlvara/:id', ContabilidadeControllers.putArquivosAnexosAlvara)
routes.post('/arquivosAnexosAlvara', ContabilidadeControllers.postArquivosAnexosAlvara)
routes.post('/vinculoAlvarasEmpresa', ContabilidadeControllers.postVinculoAlvarasEmpresas)

export default routes;