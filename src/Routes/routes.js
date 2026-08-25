import { Router } from 'express';

import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/movimentoCaixaRoutes';
import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
import GerenciaClientes from '../Gerencia/cliente/routes/clientRoutes.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';
import AdministrativoCaixa from '../Administrativo/Caixa/routes/caixaRoutes.js';
import AdministrativoConta from '../Administrativo/Conta/routes/contaRoutes.js';
import AdministrativoDespesas from '../Administrativo/Despesa/routes/despesaRoutes.js';
import AdministrativoEstoque from '../Administrativo/Estoque/routes/index.js';
import AdministrativoExtrato from '../Administrativo/Extrato/routes/extratoRoutes.js';
import AdministrativoFatura from '../Administrativo/Fatura/routes/faturaRoutes.js';
import AdministrativoPagamentos from '../Administrativo/Pagamentos/routes/index.js';
import AdministrativoRecebimentos from '../Administrativo/Recebimentos/routes/index.js';
import AdministrativoDesconto from '../Administrativo/Desconto/routes/descontoRoutes.js';
import PermissaoClientes from '../Permissoes/routes/index.js';
import AdministrativoVendas from '../Administrativo/Vendas/routes/index.js';
import AdministrativoVouchers from '../Administrativo/Vouchers/routes/routes.js';
import CadastroRoutes from '../Cadastro/routes/cadastro.js';
import CategoriaReceitaRoutes from '../CategoriaReceita/routes/index.js';
import ComercialRoutes from '../Comercial/Comercial/routes/index.js';
import ComercialEstoqueRoutes from '../Comercial/estoque/routes/index.js';
import ComercialMetasRoutes from '../Comercial/metas/routes/index.js';
import ComercialPremiacaoRoutes from '../Comercial/premiacao/routes/index.js';
import ComercialProdutoRoutes from '../Comercial/Produto/routes/index.js';
import ComprasRoutes from '../Compras/routes/index.js';
import ConferenciaCegaRoutes from '../ConferenciaCega/routes/index.js';
import ConfiguracaoPIXRoutes from '../ConfiguracaoPIX/routes/index.js';
import DespesasRoutes from '../Despesas/routes/index.js';
import ContaBancoRoutes from '../ContaBanco/routes/index.js';
import ContabilidadeRoutes from '../Contabilidade/routes/index.js';
import DanfeRoutes from '../Danfe/routes/index.js';
import DashBoardAdiantamentoRoutes from '../DashBoard/AdiantamentoSalarial/routes/adiantamentoSalarial.js';
import DashBoardExtratoRoutes from '../DashBoard/Extrato/routes/index.js';
import EmpresasRoutes from '../Empresas/routes/empresa.js';
import DetalheFaturasRoutes from '../DetalheFaturas/routes/index.js';
import FuncionariosRoutes from '../Funcionarios/routes/funcionario.js';
import FinanceiroAdiantamentosRoutes from '../Financeiro/Adiantamentos/routes/routesAdiantamento.js';
import FinanceiroBancoRoutes from '../Financeiro/Banco/routes/bancoRoutes.js';
import FinanceiroCaixasRoutes from '../Financeiro/Caixas/routes/routesCaixa.js';
import FinanceiroDepositosRoutes from '../Financeiro/Depositos/routes/DepositosRoutes.js';
import FinanceiroDescontoRoutes from '../Financeiro/Desconto/routes/descontoRoutes.js';
import FinanceiroDespesasRoutes from '../Financeiro/Despesas/routes/despesasRoutes.js';
import FinanceiroDetalhesRoutes from '../Financeiro/Detalhes/routes/detalhesRoutes.js';
import FinanceiroEstabelecimentosRoutes from '../Financeiro/Estabelecimentos/routes/estabeecimentosRoutes.js';
import FinanceiroExtratoRoutes from '../Financeiro/Extrato/routes/extratoRoutes.js';
import FinanceiroFaturasRoutes from '../Financeiro/Faturas/routes/faturasRoutes.js';
import FinanceiroMalotesRoutes from '../Financeiro/Malotes/routes/maloteLojaSchema.js';
import FinanceiroPedidosRoutes from '../Financeiro/Pedidos/routes/pedidosRoutes.js';
import FinanceiroSaldosRoutes from '../Financeiro/Saldos/routes/index.js';
import FinanceiroVendasRoutes from '../Financeiro/Vendas/routes/routes.js';
import FianceiroVoucherRoutes from '../Financeiro/Voucher/routes/voucherRoutes.js';
import InformaticaCaixasRoutes from '../Informatica/caixas/routes/caixas.js';
import InformaticaClientesRoutes from '../Informatica/Clientes/routes/index.js';
import InformaticaNfceRoutes from '../Informatica/ConsultaNFCE/Routes/index.js';
import InformaticaCredSystemRoutes from '../Informatica/CredSystem/routes/index.js';
import InformaticaEmpresasRoutes from '../Informatica/Empresas/routes/index.js';
import InformaticaFuncionariosRoutes from '../Informatica/Funcionarios/routes/funcionarios.js';
import InformaticaProdutosRoutes from '../Informatica/Produtos/routes/index.js';
import InformaticaRelatorioBiRoutes from '../Informatica/RelatorioBI/routes/index.js';
import ListaPrecoRoutes from '../ListaPreco/routes/index.js';
import LogsRoutes from '../LogsUsuario/routes/index.js';
import MarketingRoutes from '../Marketing/routes/marketing.js';
import ModulosRoutes from '../Modulos/routes/index.js';
import PermissaoRoutes from '../Permissoes/routes/index.js';
import ProdutosRoutes from '../Produtos/routes/produto.js';
import PromocaoRoutes from '../Promocao/routes/index.js';
import RecursosHumanosRoutes from '../RecursosHumanos/routes/index.js';
import ResumoVoucherRoutes from '../ResumoVoucher/routes/resumoVoucher.js';
import ServiceLayerRoutes from '../ServiceLayer/routes/index.js';
import VendasRoutes from '../Vendas/routes/vendas.js';

const routes = Router();

//Administrativo 
routes.use(AdministrativoBalanco);
routes.use(AdministrativoCaixa);
routes.use(AdministrativoConta);
routes.use(AdministrativoDesconto);
routes.use(AdministrativoDespesas);
routes.use(AdministrativoEstoque);
routes.use(AdministrativoExtrato);
routes.use(AdministrativoFatura);
routes.use(AdministrativoPagamentos);
routes.use(AdministrativoRecebimentos);
routes.use(AdministrativoVendas);
routes.use(AdministrativoVouchers);

//Gerencia
routes.use(GerenciaAlteracaoPreco);
routes.use(GerenciaMovimentoCaixa);
routes.use(GerenciaMalote);
routes.use(GerenciaClientes);

//Permissão
routes.use(PermissaoClientes);

//Cadastro
routes.use(CadastroRoutes);

//CategoriaReceita
routes.use(CategoriaReceitaRoutes);

//Comercial
routes.use(ComercialRoutes);
routes.use(ComercialEstoqueRoutes);
routes.use(ComercialMetasRoutes);
routes.use(ComercialPremiacaoRoutes);
routes.use(ComercialProdutoRoutes);

//Compras
routes.use(ComprasRoutes);

//Conferencia Cega
routes.use(ConferenciaCegaRoutes);

//ConfiguracaoPIX
routes.use(ConfiguracaoPIXRoutes);

//Despesa
routes.use(DespesasRoutes);

//ContasBanco
routes.use(ContaBancoRoutes);

//Contabilidade
routes.use(ContabilidadeRoutes);

//Danfe
routes.use(DanfeRoutes);

//Dashboard
routes.use(DashBoardAdiantamentoRoutes);
routes.use(DashBoardExtratoRoutes);

//DetalhesFaturas
routes.use(DetalheFaturasRoutes);

//Empresa
routes.use(EmpresasRoutes);

//Financeiro
routes.use(FinanceiroAdiantamentosRoutes);
routes.use(FinanceiroBancoRoutes);
routes.use(FinanceiroCaixasRoutes);
routes.use(FinanceiroDepositosRoutes);
routes.use(FinanceiroDespesasRoutes);
routes.use(FinanceiroDescontoRoutes);
routes.use(FinanceiroDetalhesRoutes);
routes.use(FinanceiroEstabelecimentosRoutes);
routes.use(FinanceiroExtratoRoutes);
routes.use(FinanceiroFaturasRoutes);
routes.use(FinanceiroMalotesRoutes);
routes.use(FinanceiroPedidosRoutes);
routes.use(FinanceiroSaldosRoutes);
routes.use(FinanceiroVendasRoutes);
routes.use(FianceiroVoucherRoutes);

//Funcionarios
routes.use(FuncionariosRoutes);

//Informatica
routes.use(InformaticaCaixasRoutes);
routes.use(InformaticaClientesRoutes);
routes.use(InformaticaNfceRoutes);
routes.use(InformaticaCredSystemRoutes);
routes.use(InformaticaEmpresasRoutes);
routes.use(InformaticaFuncionariosRoutes);
routes.use(InformaticaProdutosRoutes);
routes.use(InformaticaRelatorioBiRoutes);

//ListaPreco
routes.use(ListaPrecoRoutes);

//Logs
routes.use(LogsRoutes);

//Marketing
routes.use(MarketingRoutes);

//Modulos
routes.use(ModulosRoutes);

//Permicoes
routes.use(PermissaoRoutes);

//Produtos
routes.use(ProdutosRoutes);

//Promocao
routes.use(PromocaoRoutes);

//RecursosHumanos
routes.use(RecursosHumanosRoutes);

//ResumoVoucher
routes.use(ResumoVoucherRoutes);

//ServiceLayer
routes.use(ServiceLayerRoutes);

//Vendas
routes.use(VendasRoutes);


export default routes;
