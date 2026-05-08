import { Router } from 'express';
import PermissaoControllers from '../controller/index.js';

const PermissaoClientes = new Router();

PermissaoClientes.get('/menu-pai', PermissaoControllers.getMenuPai)
PermissaoClientes.get('/listaMenusFilhos', PermissaoControllers.getListaMenusFilhos)
PermissaoClientes.put('/perfil-usuario/:id', PermissaoControllers.putPerfilUsuarioMenu)
PermissaoClientes.put('/funcionario-departamento/:id', PermissaoControllers.putFuncionarioDepartamento)
PermissaoClientes.put('/perfil-usuario/:id', PermissaoControllers.putAtualizarMenuFilho)
PermissaoClientes.post('/criar-perfil-usuario', PermissaoControllers.postPerfilUsuarioMenu)
PermissaoClientes.post('/criar-menu-filho', PermissaoControllers.postCriarMenuFilho)

export default PermissaoClientes;


