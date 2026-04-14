import { Router } from 'express';
import MaloteControllers from '../controller/maloteController.js';

const GerenciaMalote = new Router();

GerenciaMalote.get('/detalhe-malotes-por-loja', MaloteControllers.getListaDetalhesMalotesPorLoja)
GerenciaMalote.get('/malotes-por-loja', MaloteControllers.getListaMalotesPorLoja)
GerenciaMalote.post('/criar-malotes-por-loja', MaloteControllers.postMalotesPorLoja)
GerenciaMalote.put('/malotes-por-loja/:id', MaloteControllers.putMalotesPorLoja)

export default GerenciaMalote;

