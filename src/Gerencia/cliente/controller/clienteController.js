import axios from "axios";
import 'dotenv/config';
import criarClienteSchema from "../schema/clienteSchema.js";
import { ClienteClient } from "../client/clienteClient.js";
import { ClienteService } from "../service/clienteService.js";
import atualizarClienteSchema from "../schema/atualizarClienteSchema.js";

const url = process.env.API_URL;
const despesasClient = new ClienteClient(url);
const despesasServices = new ClienteService(despesasClient);

class ClienteControllers {

    async getListaCliente(req, res) {
        let { idCliente, cpfoucnpj, page, pageSize } = req.query;

        idCliente = idCliente ? idCliente : ''
        cpfoucnpj = cpfoucnpj ? cpfoucnpj : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''

        try {
            const apiUrl = `${url}/api/cliente/todos.xsjs?byId=${idCliente}&numeroCpfCnpj=${cpfoucnpj}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no GerenciaControllers.getListaCliente verifique se os parâmetros estão sendo preenchidos:", error);
            return res.status(500).json({ error: "Erro ao conectar ao banco de dados." });
        }
    }

    async postCliente(req, res) {
        try {
            const { error, value } = criarClienteSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await despesasServices.createCliente(

                value.IDEMPRESA,
                value.DSNOMERAZAOSOCIAL,
                value.DSAPELIDONOMEFANTASIA,
                value.NUCPFCNPJ,
                value.NURGINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUINSCRICAOSUFRAMA,
                value.TPINDICADORINSCESTADUAL,
                value.STOPTANTESIMPLES,
                value.NUCEP,
                value.NUIBGE,
                value.EENDERECO,
                value.NUENDERECO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.EEMAIL,
                value.NUTELCOMERCIAL,
                value.NUTELCELULAR,
                value.DTNASCFUNDACAO,
                value.DSOBSERVACAO,
                value.NOCONTATOCLIENTE01,
                value.EEMAILCONTATOCLIENTE01,
                value.FONECONTATOCLIENTE01,
                value.DSCARGOCONTATOCLIENTE01,
                value.NOCONTATOCLIENTE02,
                value.EEMAILCONTATOCLIENTE02,
                value.FONSCARGOCONECONTATOCLIENTE02,
                value.DTATOCLIENTE02,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ClienteControllers.postCliente:', error);
            return res.status(500).json({ message: 'Erro no ClienteControllers.postCliente:' });
        }
    }

    async putCliente(req, res) {
        try {
            const { error, value } = atualizarClienteSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await despesasServices.updateCliente(

                value.IDEMPRESA,
                value.DSNOMERAZAOSOCIAL,
                value.DSAPELIDONOMEFANTASIA,
                value.NUCPFCNPJ,
                value.NURGINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUINSCRICAOSUFRAMA,
                value.TPINDICADORINSCESTADUAL,
                value.STOPTANTESIMPLES,
                value.NUCEP,
                value.NUIBGE,
                value.EENDERECO,
                value.NUENDERECO,
                String(value.ECOMPLEMENTO),
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.EEMAIL,
                value.NUTELCOMERCIAL,
                value.NUTELCELULAR,
                value.DTNASCFUNDACAO,
                value.DSOBSERVACAO,
                value.NOCONTATOCLIENTE01,
                value.EEMAILCONTATOCLIENTE01,
                value.FONECONTATOCLIENTE01,
                value.DSCARGOCONTATOCLIENTE01,
                value.NOCONTATOCLIENTE02,
                value.EEMAILCONTATOCLIENTE02,
                value.FONSCARGOCONECONTATOCLIENTE02,
                value.DTATOCLIENTE02,
                value.STATIVO,
                value.IDCLIENTE
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ClienteControllers.putCliente:', error);
            return res.status(500).json({ message: 'Erro no ClienteControllers.putCliente' });

        }
    }
}

export default new ClienteControllers();