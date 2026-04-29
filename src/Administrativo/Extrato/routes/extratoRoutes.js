import { Router } from 'express';
import ExtratoControllers from '../controller/extratoController.js'

const AdministrativoExtrato = new Router();

AdministrativoExtrato.get('/extratoDaLojaDia', ExtratoControllers.getListaExtratoDaLojaDia)

export default AdministrativoExtrato;
