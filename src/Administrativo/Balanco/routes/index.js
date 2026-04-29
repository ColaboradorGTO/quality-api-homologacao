import { Router } from 'express';
import AdmBalancoControllers from '../controllers/balanco.js';

const AdministrativoBalanco = new Router();

AdministrativoBalanco.get('/detalheBalancoAvulso', AdmBalancoControllers.getListaDetalheBalancoAvulso)
AdministrativoBalanco.get('/coletor-balanco', AdmBalancoControllers.getListaColetorBalanco)
AdministrativoBalanco.get('/balanco-loja', AdmBalancoControllers.getListaBalancoLoja)
AdministrativoBalanco.get('/detalhe-balanco', AdmBalancoControllers.getListaDetalheBalancoLoja)
AdministrativoBalanco.get('/preparar-primeiro-balanco-loja', AdmBalancoControllers.getListaPrepararPrimeiroBalancoLoja)
AdministrativoBalanco.get('/prestacao-contas-balanco', AdmBalancoControllers.getListaPrestacaoContasBalanco)

AdministrativoBalanco.put('/detalhe-balanco/:id', AdmBalancoControllers.putListaDetalheBalanco)
AdministrativoBalanco.put('/prestacao-contas-balanco/:id', AdmBalancoControllers.putConfirmarPrestacaoContas) 
AdministrativoBalanco.put('/confirmar-consolidar-balanco/:id', AdmBalancoControllers.putConfirmarConsolidarBalanco)
AdministrativoBalanco.put('/consolidar-balanco', AdmBalancoControllers.putConsolidarBalanco)
AdministrativoBalanco.put('/preparar-primeiro-balanco-loja/:id', AdmBalancoControllers.putListaPrepararPrimeiroBalancoLoja)
AdministrativoBalanco.put('/detalhe-balanco/:id', AdmBalancoControllers.putListaDetalheBalanco)
AdministrativoBalanco.put('/detalhe-balanco-avulso/:id', AdmBalancoControllers.putListaDetalheBalancoAvulso)
AdministrativoBalanco.put('/criar-detalhe-balanco-avulso', AdmBalancoControllers.postDetalheBalancoAvulso)

export default AdministrativoBalanco;