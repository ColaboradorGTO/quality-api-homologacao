import { Router } from 'express' ;
import clientesInformaticaController from '../controller/index'

const InformaticaClientesRoutes = new Router();

InformaticaClientesRoutes.get('/clientes', clientesInformaticaController.getListaCliente)
InformaticaClientesRoutes.get('/lista-cliente', clientesInformaticaController.getListaClienteIformatica)

export default InformaticaClientesRoutes
