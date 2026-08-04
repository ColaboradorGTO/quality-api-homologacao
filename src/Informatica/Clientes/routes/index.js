import { Router } from 'express' ;
import clientesInformaticaController from '../controller/index'
const routes = new Router();

routes.get('/clientes', clientesInformaticaController.getListaCliente)
routes.get('/lista-cliente', clientesInformaticaController.getListaClienteIformatica)


export default routes
