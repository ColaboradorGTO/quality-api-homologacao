import { Router } from 'express';
import MovimentoCaixaControllers from '../controllers/MovimentoCaixa.js';

const GerenciaMovimentoCaixa  = new Router();

GerenciaMovimentoCaixa.get('/ajusteFisicoDinheiro', MovimentoCaixaControllers.getlistaCaixasMovimentojuste)
GerenciaMovimentoCaixa.get('/ajusteMovimento', MovimentoCaixaControllers.getlistaAjusteMovimentoCaixa)
GerenciaMovimentoCaixa.get('/movimento-caixa-gerencia', MovimentoCaixaControllers.getlistaCaixasMovimentoGerencia)
GerenciaMovimentoCaixa.get('/fechamento-caixa', MovimentoCaixaControllers.getListaFechamentoCaixa)

GerenciaMovimentoCaixa.put('/atualizacao-status', MovimentoCaixaControllers.putListaAtualizacaoStatus)
GerenciaMovimentoCaixa.put('/ajuste-recebimento', MovimentoCaixaControllers.putListaAjusteRecebimento)

export default GerenciaMovimentoCaixa;
