import { Router } from 'express' ;
import CredSystemInformaticaControllers from '../controller/index'
const routes = new Router();

routes.get('/uf-empresa', CredSystemInformaticaControllers.getListaCadastroClienteCredSystem)
routes.get('/lista-caixas', CredSystemInformaticaControllers.getListaMeioPagamentoCredSystem)
routes.get('/listaCaixasID', CredSystemInformaticaControllers.getListaParceriaCredSystem)

export default routes
