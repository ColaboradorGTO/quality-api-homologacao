import { Router } from 'express';
import AdmBalancoControllers from '../controllers/balanco.js';

const AdministrativoBalanco = new Router();

AdministrativoBalanco.get('/balanco-loja', AdmBalancoControllers.getListaBalancoLoja)
AdministrativoBalanco.get('/coletor-balanco', AdmBalancoControllers.getListaColetorBalanco)
AdministrativoBalanco.get('/preparar-primeiro-balanco-loja', AdmBalancoControllers.getListaPrepararPrimeiroBalancoLoja)
AdministrativoBalanco.get('/detalhe-balanco', AdmBalancoControllers.getListaDetalheBalancoLoja)
AdministrativoBalanco.get('/consolidar-balanco', AdmBalancoControllers.getListaConsolidarBalanco)
AdministrativoBalanco.get('/prestacao-contas-balanco', AdmBalancoControllers.getListaPrestacaoContasBalanco)
AdministrativoBalanco.get('/detalheBalancoAvulso', AdmBalancoControllers.getListaDetalheBalancoAvulso)
AdministrativoBalanco.get('/pesqBalanco', AdmBalancoControllers.getPesqBalanco)
AdministrativoBalanco.get('/novo-previa-balanço', AdmBalancoControllers.getListaPreviaBalanco)
AdministrativoBalanco.get('/detalheBalancoAvulso', AdmBalancoControllers.getDetalheBalancoAvulso)
AdministrativoBalanco.put('/consolidar-balanco', AdmBalancoControllers.putConsolidarBalanco)
AdministrativoBalanco.put('/preparar-primeiro-balanco-loja/:id', AdmBalancoControllers.putListaPrepararPrimeiroBalancoLoja)
AdministrativoBalanco.put('/detalhe-balanco/:id', AdmBalancoControllers.putListaDetalheBalanco)
AdministrativoBalanco.put('/detalhe-balanco-avulso/:id', AdmBalancoControllers.putListaDetalheBalancoAvulso)
AdministrativoBalanco.put('/criar-detalhe-balanco-avulso', AdmBalancoControllers.postDetalheBalancoAvulso)
AdministrativoBalanco.put('/coletor-balanco/:id', AdmBalancoControllers.putColetorBalanco)
AdministrativoBalanco.put('/prestacao-contas-balanco/:id', AdmBalancoControllers.putConfirmarPrestacaoContas) 
AdministrativoBalanco.put('/confirmar-consolidar-balanco/:id', AdmBalancoControllers.putConfirmarConsolidarBalanco)

export default AdministrativoBalanco;