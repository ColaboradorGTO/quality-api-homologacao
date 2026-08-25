import { Router } from 'express' ;
import CaixaControllers from '.././controllers/controllersCaixas'

const InformaticaCaixasRoutes = new Router();

InformaticaCaixasRoutes.get('/uf-empresa', CaixaControllers.getUf)
InformaticaCaixasRoutes.get('/lista-caixas', CaixaControllers.getListaCaixas)
InformaticaCaixasRoutes.get('/listaCaixasID', CaixaControllers.getListaCaixasID)
InformaticaCaixasRoutes.post('/criar-caixas', CaixaControllers.postCaixaLojas)
InformaticaCaixasRoutes.put('/lista-caixas/:id', CaixaControllers.putCaixaLoja)
InformaticaCaixasRoutes.put('/atualiza-empresa-diario/:id', CaixaControllers.putAtualizaEmpresaDiario)
InformaticaCaixasRoutes.put('/atualizar-todos-caixa', CaixaControllers.putAtualizarTodosCaixas)

export default InformaticaCaixasRoutes
