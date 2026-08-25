import { Router } from 'express';
import PermissaoControllers from '../controller/index.js';

const PermissaoRoutes = new Router();

PermissaoRoutes.get('/menu-pai', PermissaoControllers.getMenuPai)
PermissaoRoutes.get('/listaMenusFilhos', PermissaoControllers.getListaMenusFilhos)
PermissaoRoutes.put('/perfil-usuario/:id', PermissaoControllers.putPerfilUsuarioMenu)
PermissaoRoutes.put('/funcionario-departamento/:id', PermissaoControllers.putFuncionarioDepartamento)
PermissaoRoutes.put('/perfil-usuario/:id', PermissaoControllers.putAtualizarMenuFilho)
PermissaoRoutes.post('/criar-perfil-usuario', PermissaoControllers.postPerfilUsuarioMenu)
PermissaoRoutes.post('/criar-menu-filho', PermissaoControllers.postCriarMenuFilho)

export default PermissaoRoutes;


