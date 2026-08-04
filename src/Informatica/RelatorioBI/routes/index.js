import { Router } from 'express' ;
import RelatorioBiController from '../controller/index.js'
const routes = new Router();

routes.get('/uf-empresa', RelatorioBiController.getListaLinkRelatorioBI)
routes.get('/lista-caixas', RelatorioBiController.getListaRelatorioBI)
routes.post('/listaCaixasID', RelatorioBiController.postLinkRelatorioBi)
routes.put('/criar-caixas', RelatorioBiController.putLinkRelatorioBi)
routes.post('/lista-caixas/:id', RelatorioBiController.postRelatorioBi)
routes.put('/atualiza-empresa-diario/:id', RelatorioBiController.putRelatorioBi)

export default routes
