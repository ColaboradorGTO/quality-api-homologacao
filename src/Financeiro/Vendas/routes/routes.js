import { Router } from 'express';
import FinanceiroVendasControllers from '../controllers/vendas';

const VendasRoutes = new Router();
VendasRoutes.get('/vendaLojaPeriodo', FinanceiroVendasControllers.getListaVendasLojaPeriodo)
VendasRoutes.get('/venda-digital', FinanceiroVendasControllers.getListaVendasDigital)
VendasRoutes.get('/venda-digital-marca', FinanceiroVendasControllers.getListaVendasDigitalMarca)
VendasRoutes.get('/venda-conciliacao', FinanceiroVendasControllers.getListaVendasConciliar)
VendasRoutes.get('/venda-total', FinanceiroVendasControllers.getListaVendasTotal)
VendasRoutes.get('/remessa-vendas', FinanceiroVendasControllers.getListaRemessaVendas)
VendasRoutes.get('/venda-pagamentos', FinanceiroVendasControllers.getListaVendasPagamentos)
VendasRoutes.get('/vendaPixConsolidado', FinanceiroVendasControllers.getListaVendasPixConsolidado)
VendasRoutes.get('/venda-pix-periodo', FinanceiroVendasControllers.getListaVendasPixPeriodo)
VendasRoutes.get('/venda-total-empresa', FinanceiroVendasControllers.getListaVendasEmpresa)
VendasRoutes.get('/venda-recebido-eletronico', FinanceiroVendasControllers.getListaRecebimentosEletronico)
VendasRoutes.get('/venda-total-recebido-periodo', FinanceiroVendasControllers.getListaRecebimentos)
VendasRoutes.get('/vendas-marca-periodo', FinanceiroVendasControllers.getListaVendasMarca)
VendasRoutes.get('/vendas-total-mes', FinanceiroVendasControllers.getListaVendasTotalMes)
VendasRoutes.get('/vendas-total-loja-hora', FinanceiroVendasControllers.getListaVendasTotalLojaHora)
VendasRoutes.get('/vendas-total-loja-hora-ano-passado', FinanceiroVendasControllers.getListaVendasTotalLojaHoraAnoPassado)
VendasRoutes.get('/vendas-total-to', FinanceiroVendasControllers.getListaVendasTotalTO)
VendasRoutes.get('/vendaMarcaPeriodoFinanceiro', FinanceiroVendasControllers.getListaVendasMarcaFinanceiro)
VendasRoutes.get('/vendaMarcaRob', FinanceiroVendasControllers.getListaVendasMarcaROB)
VendasRoutes.get('/vendaMarcaMarckup', FinanceiroVendasControllers.getListaVendasMarcaMarckup)
VendasRoutes.get('/venda-detalhe-recebimento-eletronico', FinanceiroVendasControllers.getListaDetalheRecebimentosEletronico)
VendasRoutes.get('/resumoVendaFinanceiro', FinanceiroVendasControllers.getListaVendasResumidaFinanceiro)
VendasRoutes.put('/venda-pix-status-conferido', FinanceiroVendasControllers.putListaVendaPixStatusConferido)



export default VendasRoutes;