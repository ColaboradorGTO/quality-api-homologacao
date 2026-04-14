import { Router } from 'express';
import AlteracaoPrecoControllers from '../controllers/index.js';

const GerenciaAlteracaoPreco  = new Router();

GerenciaAlteracaoPreco.get('/listaAlteracaoPreco', AlteracaoPrecoControllers.getListaAlteracaoPreco)


export default GerenciaAlteracaoPreco;