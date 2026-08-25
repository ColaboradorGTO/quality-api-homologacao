import { Router } from 'express';
import ContabilidadeControllers from '../controllers/Contabilidade.js';

const ContabilidadeRoutes = new Router();

ContabilidadeRoutes.get('/listaVendasContigencia', ContabilidadeControllers.getListaVendasContigencia)
ContabilidadeRoutes.get('/vendasDetalheContigencia', ContabilidadeControllers.getListaDetalheVendasContigencia)
ContabilidadeRoutes.get('/vendasPagamentoContigencia', ContabilidadeControllers.getListaPagamentoVendasContigencia)
ContabilidadeRoutes.get('/vendasEstoqueComercial', ContabilidadeControllers.getListaVendasEstoqueComercial)
ContabilidadeRoutes.get('/vendasProdutos', ContabilidadeControllers.getListaVendasPeriodo)
ContabilidadeRoutes.get('/vendasProdutosConsolidado', ContabilidadeControllers.getListaVendasPeriodoConsolidado)

ContabilidadeRoutes.get('/todas-empresas', ContabilidadeControllers.getTodasEmpresas)
ContabilidadeRoutes.get('/alvaras', ContabilidadeControllers.getAlvaras)
ContabilidadeRoutes.get('/alvaras-empresa', ContabilidadeControllers.getAlvaraEmpresas)
ContabilidadeRoutes.get('/alvaras-empresa-detalhe', ContabilidadeControllers.getEmpresaAlvara)
ContabilidadeRoutes.get('/vinculo-alvaras-empresa', ContabilidadeControllers.getVinculoAlvaraEmpresa)
ContabilidadeRoutes.get('/visualizar-anexo-alvara', ContabilidadeControllers.getVisualizarAnexoAlvara)
ContabilidadeRoutes.get('/status-alvara', ContabilidadeControllers.getStatusAlvara)
ContabilidadeRoutes.get('/buscar-produtos', ContabilidadeControllers.getBuscarProdutos)
ContabilidadeRoutes.get('/ncm-excecao', ContabilidadeControllers.getNcmExcecao)
ContabilidadeRoutes.post('/cadastrar-ncm-excecao', ContabilidadeControllers.postNcmExcecao)
ContabilidadeRoutes.put('/ncm-excecao/:id', ContabilidadeControllers.putNcmExcecao)

ContabilidadeRoutes.put('/vinculoAlvarasEmpresa/:id', ContabilidadeControllers.putVinculoAlvarasEmpresas)
ContabilidadeRoutes.put('/arquivosAnexosAlvara/:id', ContabilidadeControllers.putArquivosAnexosAlvara)
ContabilidadeRoutes.post('/arquivosAnexosAlvara', ContabilidadeControllers.postArquivosAnexosAlvara)
ContabilidadeRoutes.post('/vinculoAlvarasEmpresa', ContabilidadeControllers.postVinculoAlvarasEmpresas)

export default ContabilidadeRoutes;
