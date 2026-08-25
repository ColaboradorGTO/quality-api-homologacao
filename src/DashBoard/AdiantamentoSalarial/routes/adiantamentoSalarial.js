import { Router } from 'express';
import DashBoardAdiantamentoControllers from '../controllers/index';

const DashBoardAdiantamentoRoutes = new Router();

DashBoardAdiantamentoRoutes.get('/adiantamento-loja', DashBoardAdiantamentoControllers.getListaAdiantamentoSalarialLoja)
DashBoardAdiantamentoRoutes.get('/adiantamento-funcionarios', DashBoardAdiantamentoControllers.getListaAdiantamentosFuncionarios)
DashBoardAdiantamentoRoutes.get('/adiantamentoSalarialFuncionarios', DashBoardAdiantamentoControllers.getListAdiantamentoLoja)
DashBoardAdiantamentoRoutes.get('/adiantamentoSalarialData', DashBoardAdiantamentoControllers.getListAdiantamentoSalarialData)
DashBoardAdiantamentoRoutes.get('/adiantamento-salarial-gerencia', DashBoardAdiantamentoControllers.getAdiantamentoSalarialFuncionario)
DashBoardAdiantamentoRoutes.get('/adiantamentos-salarial', DashBoardAdiantamentoControllers.getListaAdiantamentosSalarialDashBoard)
DashBoardAdiantamentoRoutes.put('/atualizacao-adiantamento-status', DashBoardAdiantamentoControllers.putAdiantamentoStatus)
DashBoardAdiantamentoRoutes.put('/adiantamento-salarial/:id', DashBoardAdiantamentoControllers.putAdiantamentoSalarial)
DashBoardAdiantamentoRoutes.post('/cadastrar-adiantamento-salarial', DashBoardAdiantamentoControllers.postAdiantamentoSalarial)

export default DashBoardAdiantamentoRoutes;
