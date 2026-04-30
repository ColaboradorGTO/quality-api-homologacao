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
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import admVouchersRoutes from '../Administrativo/Vouchers/routes/routes.js';
import AdministrativoDesconto from '../Administrativo/Desconto/routes/descontoRoutes.js';

const routes = Router();


//Gerencia
routes.use(GerenciaAlteracaoPreco);
routes.use(GerenciaMovimentoCaixa);
routes.use(GerenciaMalote);
routes.use(GerenciaClientes);


//Administrativo 
routes.use(AdministrativoBalanco)
routes.use(AdministrativoCaixa)
routes.use(AdministrativoConta)
routes.use(AdministrativoDesconto)
routes.use(AdministrativoDespesas)
routes.use(AdministrativoEstoque)
routes.use(AdministrativoExtrato)
routes.use(AdministrativoFatura)
routes.use(AdministrativoPagamentos)
routes.use(AdministrativoRecebimentos)
routes.use(admVendasRoutes)
routes.use(admVouchersRoutes)

