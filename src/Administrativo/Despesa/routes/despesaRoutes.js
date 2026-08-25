import { Router } from 'express';
import DespesasControllersADM from '../controller/despesaController';

const AdministrativoDespesas  = new Router();

AdministrativoDespesas.get('/despesasLojaADM', DespesasControllersADM.getListaDespesasLojaADM)
AdministrativoDespesas.get('/detalheDespesas', DespesasControllersADM.getDetalheDespesas)
 
export default AdministrativoDespesas;

