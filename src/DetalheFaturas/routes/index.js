import { Router } from 'express';
import DetalheFaturasControllers from '../controllers/Detalhes.js';

const DetalheFaturasRoutes = new Router();

DetalheFaturasRoutes.get('/detalheFaturaGerencia', DetalheFaturasControllers.getDetalheFatura)
DetalheFaturasRoutes.get('/detalhe-Fatura-id', DetalheFaturasControllers.getDetalheFaturaById)

DetalheFaturasRoutes.put('/atualizar-fatura', DetalheFaturasControllers.updateFatura) 
DetalheFaturasRoutes.put('/atualizar-detalhe-fatura-loja', DetalheFaturasControllers.putDetalheFaturaLoja)
DetalheFaturasRoutes.post('/criar-detalhe-fatura', DetalheFaturasControllers.postDetalheFaturaLoja) 

export default DetalheFaturasRoutes;
