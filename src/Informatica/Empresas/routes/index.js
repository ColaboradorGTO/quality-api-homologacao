import { Router } from 'express' ;
import EmpresasInformaticaControllers from '../controller/index.js'

const InformaticaEmpresasRoutes = new Router();

InformaticaEmpresasRoutes.get('/vendas-loja-informatica', EmpresasInformaticaControllers.getListaVendasLojaInformatica)
InformaticaEmpresasRoutes.get('/listaEmpresasIformatica', EmpresasInformaticaControllers.getListaEmpresasInformatica)
InformaticaEmpresasRoutes.get('/marcasLista', EmpresasInformaticaControllers.getListaMarcas)
InformaticaEmpresasRoutes.get('/listaGrupoEmpresas', EmpresasInformaticaControllers.getListaGrupoEmpresas)
InformaticaEmpresasRoutes.get('/atualiza-empresa-diario', EmpresasInformaticaControllers.getListaAtualizaEmpresaDiario)
InformaticaEmpresasRoutes.get('/vendas-alloc', EmpresasInformaticaControllers.getListaVendasAlloc)

export default InformaticaEmpresasRoutes
