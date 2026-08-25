import { Router } from 'express';
import PromocaoControllers from '../controllers/Promocao.js';

const routes = new Router();

routes.get('/promocoes-ativas', PromocaoControllers.getListaPromocoesAtivas)
routes.get('/produto-promocao-ativa', PromocaoControllers.getListaProdutosPromocoesAtiva)
routes.get('/produto-promocao-destino', PromocaoControllers.getListaProdutosDestinoPromocoesAtiva)
routes.get('/produto-subGrupo', PromocaoControllers.getListaProdutoSubGrupo)
routes.get('/produto-promocao-origem', PromocaoControllers.getListaProdutosOrigemPromocoesAtiva)
routes.get('/mecanicas-ativas', PromocaoControllers.getListaMecanicaAtivas)
routes.get('/detalhe-promocoes-ativas', PromocaoControllers.getListaDetalhesPromocoesAtivas)
routes.get('/empresa-promocoes-ativas', PromocaoControllers.getListaEmpresasPromocoesAtiva)

routes.put('/promocoes-ativas/:id', PromocaoControllers.putPromocao)
routes.put('/desativar-produto-promocao-destino', PromocaoControllers.putProdutoDestinoPromocao)
routes.put('/desativar-produto-promocao-origem', PromocaoControllers.putProdutoOrigemPromocao)
routes.put('/desativar-empresa-promocao', PromocaoControllers.putEmpresaPromocao)
routes.put('/desativar-status-promocao', PromocaoControllers.putStatusPromocao)
routes.put('/promocoes-ativas-subGrupo/:id', PromocaoControllers.putPromocaoSubGrupo)
routes.put('/criar-promocoes-ativas-subGrupo-produto/:id', PromocaoControllers.putPromocaoProdutoSubGrupo)

routes.post('/criar-promocoes-ativas', PromocaoControllers.postPromocao)
routes.post('/criar-promocoes-ativas-subGrupo-produto', PromocaoControllers.postPromocaoProdutoSubGrupo)
routes.post('/criar-promocoes-ativas-subGrupo', PromocaoControllers.postPromocaoSubGrupo)
routes.post('/criar-mecanica', PromocaoControllers.postMecanicaAtivas)
routes.post('/criar-produto-promocao-ativa', PromocaoControllers.postListaProdutosPromocoesAtiva)

export default routes;
