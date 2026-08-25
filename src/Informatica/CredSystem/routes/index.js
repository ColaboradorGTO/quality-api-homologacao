import { Router } from 'express' ;
import CredSystemInformaticaControllers from '../controller/index'

const InformaticaCredSystemRoutes = new Router();

InformaticaCredSystemRoutes.get('/uf-empresa', CredSystemInformaticaControllers.getListaCadastroClienteCredSystem)
InformaticaCredSystemRoutes.get('/lista-caixas', CredSystemInformaticaControllers.getListaMeioPagamentoCredSystem)
InformaticaCredSystemRoutes.get('/listaCaixasID', CredSystemInformaticaControllers.getListaParceriaCredSystem)

export default InformaticaCredSystemRoutes
