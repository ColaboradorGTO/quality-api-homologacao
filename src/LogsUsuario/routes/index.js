import { Router } from 'express' ;
import LogsControllers from '../controllers/log.js'
const LogsRoutes = new Router();

LogsRoutes.get('/uf-empresa', LogsControllers.getListaLogsUsuario)
LogsRoutes.get('/lista-caixas', LogsControllers.createLogsUsuario)

export default LogsRoutes
