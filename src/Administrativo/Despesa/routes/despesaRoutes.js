import { Router } from 'express';
import DespesasControllers from '../controller/despesasController.js';

const AdministrativoDespesas  = new Router();

AdministrativoDespesas.get('/despesasLojaADM', DespesasControllers.getListaDespesasLojaADM)
AdministrativoDespesas.get('/detalheDespesas', DespesasControllers.getDetalheDespesas)
 
export default AdministrativoDespesas;

