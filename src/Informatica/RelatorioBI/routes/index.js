import { Router } from 'express' ;
import RelatorioBiController from '../controller/index.js'
const InformaticaRelatorioBiRoutes = new Router();

InformaticaRelatorioBiRoutes.get('/uf-empresa', RelatorioBiController.getListaLinkRelatorioBI)
InformaticaRelatorioBiRoutes.get('/lista-caixas', RelatorioBiController.getListaRelatorioBI)
InformaticaRelatorioBiRoutes.post('/listaCaixasID', RelatorioBiController.postLinkRelatorioBi)
InformaticaRelatorioBiRoutes.put('/criar-caixas', RelatorioBiController.putLinkRelatorioBi)
InformaticaRelatorioBiRoutes.post('/lista-caixas/:id', RelatorioBiController.postRelatorioBi)
InformaticaRelatorioBiRoutes.put('/atualiza-empresa-diario/:id', RelatorioBiController.putRelatorioBi)

export default InformaticaRelatorioBiRoutes
