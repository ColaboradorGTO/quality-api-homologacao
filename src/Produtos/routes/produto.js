import { Router } from 'express';
import ProdutoControllers from '../controllers/Produtos.js';

const ProdutosRoutes = new Router();

ProdutosRoutes.get('/parceiro-negocio', ProdutoControllers.getListaParceiroNegocio)
ProdutosRoutes.get('/produtoQuality', ProdutoControllers.getListaProdutosLojaQuality)
ProdutosRoutes.get('/produtoSap', ProdutoControllers.getListaProdutosLojaSap)
ProdutosRoutes.get('/produto-preco', ProdutoControllers.getListaProdutosPrecoInformatica)
ProdutosRoutes.get('/grupoProdutoSap', ProdutoControllers.getListaGrupoProdutoSap)
ProdutosRoutes.get('/produtoInformatica', ProdutoControllers.getListaProdutosInformaticaQuality)
ProdutosRoutes.get('/lista-produtos', ProdutoControllers.getListaProdutos)
ProdutosRoutes.get('/listaGrade', ProdutoControllers.getListaGrade)
ProdutosRoutes.get('/listas-de-precos-sap', ProdutoControllers.ListaProdutosEtiqueta)
ProdutosRoutes.get('/responsaveisAlteracaoPrecos', ProdutoControllers.getListaResponsavelAlteracaoPreco)
ProdutosRoutes.get('/lista-produtos-etiqueta-sap', ProdutoControllers.ListaProdutosEtiquetagem)
ProdutosRoutes.get('/alteracoes-de-precos-resumo', ProdutoControllers.getListaAlteracaoPrecoResumo)
ProdutosRoutes.get('/alteracoes-de-precos-detalhes', ProdutoControllers.getListaAlteracaoPrecoDetalhe)
ProdutosRoutes.get('/grupo-estrutura-mercadologica', ProdutoControllers.getProdutosEstruturaMercadologica)
ProdutosRoutes.get('/subgrupo-estrutura-mercadologica', ProdutoControllers.getProdutosSubGrupoEstruturaMercadologica)
ProdutosRoutes.get('/busca-produtos-para-alterar', ProdutoControllers.getListaProdutosParaAlterar)
ProdutosRoutes.get('/produtos-cadastrados-avulso', ProdutoControllers.getListaProdutosCadastradosAvulso)

ProdutosRoutes.put('/produto-avulso/:id', ProdutoControllers.putProdutoAvulso)
ProdutosRoutes.put('/alteracoes-de-precos-resumo/:id', ProdutoControllers.putAlteracoesPrecoProduto)
ProdutosRoutes.post('/criar-produto-avulso', ProdutoControllers.postProdutoAvulso)
ProdutosRoutes.post('/alteracao-preco-produto', ProdutoControllers.postAlteracoesPrecoProduto)

export default ProdutosRoutes;
