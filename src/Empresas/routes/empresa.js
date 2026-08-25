import { Router } from 'express';
import EmpresaControllers from '../controllers/Empresas.js';

const EmpresasRoutes = new Router();

EmpresasRoutes.get('/empresas', EmpresaControllers.getAllEmpresas);
EmpresasRoutes.get('/grupoEmpresarial', EmpresaControllers.getAllGrupoEmpresarial);
EmpresasRoutes.get('/subGrupoEmpresarial', EmpresaControllers.getSelectLojaVouchers);
EmpresasRoutes.get('/listaEmpresas', EmpresaControllers.getListaEmpresas)
EmpresasRoutes.put('/empresas', EmpresaControllers.putListaEmpresas)

export default EmpresasRoutes;
