import { Router } from 'express';
import DashBoardAdiantamentoControllers from '../controllers/index';
const routes = new Router();

routes.get('/adiantamento-loja', DashBoardAdiantamentoControllers.getListaAdiantamentoSalarialLoja)
routes.get('/adiantamento-funcionarios', DashBoardAdiantamentoControllers.getListaAdiantamentosFuncionarios)
routes.get('/adiantamentoSalarialFuncionarios', DashBoardAdiantamentoControllers.getListAdiantamentoLoja)
routes.get('/adiantamentoSalarialData', DashBoardAdiantamentoControllers.getListAdiantamentoSalarialData)
routes.get('/adiantamento-salarial-gerencia', DashBoardAdiantamentoControllers.getAdiantamentoSalarialFuncionario)
routes.get('/adiantamentos-salarial', DashBoardAdiantamentoControllers.getListaAdiantamentosSalarialDashBoard)
routes.put('/atualizacao-adiantamento-status', DashBoardAdiantamentoControllers.putAdiantamentoStatus)
routes.put('/adiantamento-salarial/:id', DashBoardAdiantamentoControllers.putAdiantamentoSalarial)
routes.post('/cadastrar-adiantamento-salarial', DashBoardAdiantamentoControllers.postAdiantamentoSalarial)

export default routes;