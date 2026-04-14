import { Router } from 'express';

import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/movimentoCaixaRoutes';
import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
import GerenciaClientes from '../Gerencia/cliente/routes/clientRoutes.js';

const routes = Router();


//Gerencia
routes.use(GerenciaAlteracaoPreco);
routes.use(GerenciaMovimentoCaixa);
routes.use(GerenciaMalote);
routes.use(GerenciaClientes);