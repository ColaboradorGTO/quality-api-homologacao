import { Router } from 'express';
import AdiantamentosControllers from '../controllers/adiantamentos.js';

const FianceiroAdiantamentos = new Router();

FianceiroAdiantamentos.get('/adiantamento-salarial', AdiantamentosControllers.getListaAdiantamentoSalarialFinanceiro)
FianceiroAdiantamentos.get('/lista-caixas-movimento', AdiantamentosControllers.getListaCaixasMovmentoFinanceiro)
FianceiroAdiantamentos.get('/lista-caixas-status', AdiantamentosControllers.getListaCaixaStatus)
FianceiroAdiantamentos.get('/lista-caixas-zerados', AdiantamentosControllers.getListaCaixaZerados)
FianceiroAdiantamentos.put('/atualizacaoAdiantamentoStatus', AdiantamentosControllers.putAdiantamentoStatus)

export default FianceiroAdiantamentos;

