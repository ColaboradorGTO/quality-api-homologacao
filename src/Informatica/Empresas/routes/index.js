import { Router } from 'express' ;
import EmpresasInformaticaControllers from '../controller/index.js'
const routes = new Router();

routes.get('/vendas-loja-informatica', EmpresasInformaticaControllers.getListaVendasLojaInformatica)
routes.get('/listaEmpresasIformatica', EmpresasInformaticaControllers.getListaEmpresasInformatica)
routes.get('/marcasLista', EmpresasInformaticaControllers.getListaMarcas)
routes.get('/listaGrupoEmpresas', EmpresasInformaticaControllers.getListaGrupoEmpresas)
routes.get('/atualiza-empresa-diario', EmpresasInformaticaControllers.getListaAtualizaEmpresaDiario)
routes.get('/vendas-alloc', EmpresasInformaticaControllers.getListaVendasAlloc)

export default routes
