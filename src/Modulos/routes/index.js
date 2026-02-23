import { Router } from 'express';
import ModulosControllers from '../controllers/modulos.js';


const routes = new Router();

routes.get('/menus-usuario', ModulosControllers.getListaMenusUsuario)
routes.get('/menus', ModulosControllers.getListaSubMenusUsuario)

export default routes;