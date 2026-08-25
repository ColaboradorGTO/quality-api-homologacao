import { Router } from 'express';
import ModulosControllers from '../controllers/modulos.js';

const ModulosRoutes = new Router();

ModulosRoutes.get('/menus-usuario', ModulosControllers.getListaPerfilUsuario)
ModulosRoutes.get('/menus-usuario-excecao', ModulosControllers.getListaMenusPorUsuario)
ModulosRoutes.get('/menus-filho-usuario', ModulosControllers.getListaMenusFilhosUsuario)
ModulosRoutes.get('/menus', ModulosControllers.getListaSubMenusUsuario)
ModulosRoutes.put('/perfil-usuario/:id', ModulosControllers.putPerfilUsuarioMenu)
ModulosRoutes.put('/funcionario-departamento/:id', ModulosControllers.putFuncionarioDepartamento)
ModulosRoutes.post('/criar-perfil-usuario', ModulosControllers.postPerfilUsuarioMenu)
export default ModulosRoutes;
