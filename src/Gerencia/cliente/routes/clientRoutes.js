import { Router } from 'express';
import ClienteControllers from '../controller/clienteController.js';

const GerenciaClientes = new Router();

GerenciaClientes.get('/clientes', ClienteControllers.getListaCliente)
GerenciaClientes.post('/criar-cliente', ClienteControllers.postCliente)
GerenciaClientes.put('/todos-cliente/:id', ClienteControllers.putCliente)

export default GerenciaClientes;


