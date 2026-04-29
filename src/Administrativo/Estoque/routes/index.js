import { Router } from 'express';
import EstoqueControllers from '../controllers/estoque.js'

const AdministrativoEstoque = new Router();

AdministrativoEstoque.get('/inventariomovimento', EstoqueControllers.getListaEstoqueAtual)
AdministrativoEstoque.get('/ultimaPosicaoEstoque', EstoqueControllers.getListaEstoqueUltimaPosicao)
AdministrativoEstoque.get('/estoqueAtual', EstoqueControllers.getEstoqueAtual)

export default AdministrativoEstoque;
