import { Router } from 'express';
import AdiantamentosControllers from '../controllers/adiantamentos.js';

const FianceiroAdiantamentos = new Router();

FianceiroAdiantamentos.get('/adiantamento-salarial', AdiantamentosControllers.getListaAdiantamentoSalarialFinanceiro)
FianceiroAdiantamentos.put('/atualizacaoAdiantamentoStatus', AdiantamentosControllers.putAdiantamentoStatus)

export default FianceiroAdiantamentos;

