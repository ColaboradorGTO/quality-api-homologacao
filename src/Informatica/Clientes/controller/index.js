import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

import { ClienteInformaticaClient } from "../client/index.js"
import { ClientesInformaticaServices } from "../service/index.js"

const clienteInformaticaClient = new ClienteInformaticaClient(url);
const clientesInformaticaServices = new ClientesInformaticaServices(clienteInformaticaClient);

class clientesInformaticaController {

    async getListaCliente(req, res) {
        let { idCliente } = req.query;

        try {
            idCliente = idCliente ? idCliente : '';

            const apiUrl = `${url}/api/informatica/cliente.xsjs?id=${idCliente}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar caixas." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaClienteIformatica(req, res) {
        let { idEmpresa, idCliente, idMarca, cpf, descCliente, tpCliente, status, page, pageSize } = req.query;


        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            idCliente = idCliente ? idCliente : '';
            idMarca = idMarca ? idMarca : '';
            cpf = cpf ? cpf : '';
            descCliente = descCliente ? descCliente : '';
            tpCliente = tpCliente ? tpCliente : '';
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';


            const apiUrl = `${url}/api/informatica/cliente.xsjs?idmarca=${idMarca}&idloja=${idEmpresa}&dscliente=${descCliente}&idcpfcnpj=${cpf}&idtipocliente=${tpCliente}&idstatus=${status}&id=${idCliente}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

}

export default new clientesInformaticaController();