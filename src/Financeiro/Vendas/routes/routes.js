import { Router } from 'express';
import FinanceiroVendasControllers from '../controllers/vendas';

const FinanceiroVendasRoutes = new Router();
FinanceiroVendasRoutes.get('/vendaLojaPeriodo', FinanceiroVendasControllers.getListaVendasLojaPeriodo)
FinanceiroVendasRoutes.get('/venda-digital', FinanceiroVendasControllers.getListaVendasDigital)
FinanceiroVendasRoutes.get('/venda-digital-marca', FinanceiroVendasControllers.getListaVendasDigitalMarca)
FinanceiroVendasRoutes.get('/venda-conciliacao', FinanceiroVendasControllers.getListaVendasConciliar)
FinanceiroVendasRoutes.get('/venda-total', FinanceiroVendasControllers.getListaVendasTotal)
FinanceiroVendasRoutes.get('/remessa-vendas', FinanceiroVendasControllers.getListaRemessaVendas)
FinanceiroVendasRoutes.get('/venda-pagamentos', FinanceiroVendasControllers.getListaVendasPagamentos)
FinanceiroVendasRoutes.get('/vendaPixConsolidado', FinanceiroVendasControllers.getListaVendasPixConsolidado)
FinanceiroVendasRoutes.get('/venda-pix-periodo', FinanceiroVendasControllers.getListaVendasPixPeriodo)
FinanceiroVendasRoutes.get('/venda-total-empresa', FinanceiroVendasControllers.getListaVendasEmpresa)
FinanceiroVendasRoutes.get('/venda-recebido-eletronico', FinanceiroVendasControllers.getListaRecebimentosEletronico)
FinanceiroVendasRoutes.get('/venda-total-recebido-periodo', FinanceiroVendasControllers.getListaRecebimentos)
FinanceiroVendasRoutes.get('/vendas-marca-periodo', FinanceiroVendasControllers.getListaVendasMarca)
FinanceiroVendasRoutes.get('/vendas-total-mes', FinanceiroVendasControllers.getListaVendasTotalMes)
FinanceiroVendasRoutes.get('/vendas-total-loja-hora', FinanceiroVendasControllers.getListaVendasTotalLojaHora)
FinanceiroVendasRoutes.get('/vendas-total-loja-hora-ano-passado', FinanceiroVendasControllers.getListaVendasTotalLojaHoraAnoPassado)
FinanceiroVendasRoutes.get('/vendas-total-to', FinanceiroVendasControllers.getListaVendasTotalTO)
FinanceiroVendasRoutes.get('/vendaMarcaPeriodoFinanceiro', FinanceiroVendasControllers.getListaVendasMarcaFinanceiro)
FinanceiroVendasRoutes.get('/vendaMarcaRob', FinanceiroVendasControllers.getListaVendasMarcaROB)
FinanceiroVendasRoutes.get('/vendaMarcaMarckup', FinanceiroVendasControllers.getListaVendasMarcaMarckup)
FinanceiroVendasRoutes.get('/venda-detalhe-recebimento-eletronico', FinanceiroVendasControllers.getListaDetalheRecebimentosEletronico)
FinanceiroVendasRoutes.get('/resumoVendaFinanceiro', FinanceiroVendasControllers.getListaVendasResumidaFinanceiro)
FinanceiroVendasRoutes.put('/venda-pix-status-conferido', FinanceiroVendasControllers.putListaVendaPixStatusConferido)



export default FinanceiroVendasRoutes;