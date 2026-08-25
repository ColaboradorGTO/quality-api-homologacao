import { Router } from 'express' ;
import ListaPrecoControllers from '../controllers/index.js'
const ListaPrecoRoutes = new Router();

ListaPrecoRoutes.get('/uf-empresa', ListaPrecoControllers.getListaPrecoPorMarca)
ListaPrecoRoutes.get('/lista-caixas', ListaPrecoControllers.putListasDePrecos)
ListaPrecoRoutes.post('/listaCaixasID', ListaPrecoControllers.postListasDePrecos)

export default ListaPrecoRoutes
