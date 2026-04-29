import { Router } from 'express';
import FaturaControllers from '../controller/faturaController.js';

const AdministrativoFatura = new Router();

AdministrativoFatura.get('/detalheFatura', FaturaControllers.getDetalheFatura)

export default AdministrativoFatura;

