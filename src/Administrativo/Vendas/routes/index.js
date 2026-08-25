import { Router } from 'express';
import AdmVendasControllers from '../controllers/admVendas.js';

const AdministrativoVendas = new Router();

AdministrativoVendas.get('/venda-total-forma-pagamento', AdmVendasControllers.getRecebimentosFormaPagamento)
AdministrativoVendas.get('/venda-total-recebido-periodo-adm', AdmVendasControllers.getListaVendaTotalRecebido)
AdministrativoVendas.get('/vendaVendedor', AdmVendasControllers.getVendaVendedor)
AdministrativoVendas.get('/vendaAtiva', AdmVendasControllers.getVendaAtiva)
AdministrativoVendas.get('/vendaContigencia', AdmVendasControllers.getListaVendasContigenciaPorEmpresa)
AdministrativoVendas.get('/vendaCanceladaEmpresa', AdmVendasControllers.getVendaCancelada30Minutos)
AdministrativoVendas.get('/vendaCancelada', AdmVendasControllers.getVendaCancelada)
AdministrativoVendas.get('/vendaCanceladaResumo', AdmVendasControllers.getVendaCanceladaResumo)
AdministrativoVendas.get('/listaDetalheVenda', AdmVendasControllers.getListaVendasDetalheAlterar)
AdministrativoVendas.get('/resumoVendaConvenio', AdmVendasControllers.getResumoVendaConvenio)

AdministrativoVendas.get('/resumoVenda', AdmVendasControllers.getResumoVenda)
AdministrativoVendas.get('/recebimento-resumo', AdmVendasControllers.getRetornoListaPagamentoVenda)
AdministrativoVendas.get('/resumoVendaConveniodesconto', AdmVendasControllers.getResumoVendaConvenioDesconto)
AdministrativoVendas.get('/vendaCanceladaWeb', AdmVendasControllers.getVendaCanceladaWeb)
AdministrativoVendas.get('/vendaCanceladaEmitidaPDV', AdmVendasControllers.getVendaCanceladaEmitidaPDV)
AdministrativoVendas.get('/vendaAtivaCliente', AdmVendasControllers.getListaClientesVendas)
AdministrativoVendas.get('/vendaAtivaResumo', AdmVendasControllers.getVendaAtivaResumo)
AdministrativoVendas.get('/vendaAtivaAction', AdmVendasControllers.getVendaAtivaAction)
AdministrativoVendas.get('/venda-ativa', AdmVendasControllers.getListaVendaAtiva);
AdministrativoVendas.get('/lista-venda', AdmVendasControllers.getListaVendasById)
AdministrativoVendas.get('/vendaConvenio', AdmVendasControllers.getVendaConvenio)
AdministrativoVendas.get('/lista-venda-cliente', AdmVendasControllers.getListaVendaCliente);
AdministrativoVendas.put('/alterar-venda-pagamento/:id', AdmVendasControllers.putAlterarVendasPagamento);
AdministrativoVendas.put('/atualiza-recebimento-venda/:id', AdmVendasControllers.putAlterarVendaRecebimento);
AdministrativoVendas.put('/venda-vendedor/:id', AdmVendasControllers.putVendaVendedor);
AdministrativoVendas.put('/venda-cancelamento/:id', AdmVendasControllers.putVendaCancelamento);
AdministrativoVendas.post('/alterar-venda-pagamento', AdmVendasControllers.postAlterarVendasPagamento);

// AdministrativoVendas.get('/alterar-venda-pagamento', AdmVendasControllers.getListaAlterarVendasPagamento);
AdministrativoVendas.get('/venda-vendedor-adm', AdmVendasControllers.getVendaVendedorAction);




export default AdministrativoVendas;
