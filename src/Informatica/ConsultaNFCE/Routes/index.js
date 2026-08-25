import { Router } from 'express';
import ConsultaNfeController from '../controllers/consulta.js'; 

const InformaticaNfceRoutes = new Router();
InformaticaNfceRoutes.put('/resumo-voucher', ConsultaNfeController.putValidarVendaContigencia)

export default InformaticaNfceRoutes;

