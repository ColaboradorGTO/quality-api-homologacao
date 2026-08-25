import { Router } from 'express';
import ComercialProdutoControllers from '../controllers/index.js';

const ComercialProdutoRoutes = new Router();

ComercialProdutoRoutes.get('/lista-marca-produto', ComercialProdutoControllers.getListaMarcaProduto)
ComercialProdutoRoutes.get('/lista-fornecedor-produto', ComercialProdutoControllers.getListaFornecedorProduto)
ComercialProdutoRoutes.get('/grupo-produto', ComercialProdutoControllers.getListaGrupoProduto)
ComercialProdutoRoutes.get('/subgrupo-produto', ComercialProdutoControllers.getListaSubGrupoProduto)
ComercialProdutoRoutes.get('/vendas-por-produtos', ComercialProdutoControllers.getListaVendasPorProduto)
ComercialProdutoRoutes.get('/vendas-vendedor-estrutura', ComercialProdutoControllers.getListaVendasVendedorEstrutura)
ComercialProdutoRoutes.get('/produtos-mais-vendidos', ComercialProdutoControllers.getListaProdutosMaisVendidosEstrutura)
ComercialProdutoRoutes.get('/vendas-por-estrutura', ComercialProdutoControllers.getListaVendasIndicadoresEstrutura)
ComercialProdutoRoutes.get('/listaVendasPorProduto', ComercialProdutoControllers.getListaVendasEstruturaProdutos)
ComercialProdutoRoutes.get('/colaboradorProdutosVendidos', ComercialProdutoControllers.getListaColaboradorProdutosVendidos)
ComercialProdutoRoutes.get('/listaProdutoSap', ComercialProdutoControllers.getListaProdutoSap)
ComercialProdutoRoutes.get('/funcionario-loja-comercial/:id', ComercialProdutoControllers.putFuncionarios)

export default ComercialProdutoRoutes;
