import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ClienteClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async criarCliente(
        IDEMPRESA,
        DSNOMERAZAOSOCIAL,
        DSAPELIDONOMEFANTASIA,
        NUCPFCNPJ,
        NURGINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUINSCRICAOSUFRAMA,
        TPINDICADORINSCESTADUAL,
        STOPTANTESIMPLES,
        NUCEP,
        NUIBGE,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        EEMAIL,
        NUTELCOMERCIAL,
        NUTELCELULAR,
        DTNASCFUNDACAO,
        DSOBSERVACAO,
        NOCONTATOCLIENTE01,
        EEMAILCONTATOCLIENTE01,
        FONECONTATOCLIENTE01,
        DSCARGOCONTATOCLIENTE01,
        NOCONTATOCLIENTE02,
        EEMAILCONTATOCLIENTE02,
        FONSCARGOCONECONTATOCLIENTE02,
        DTATOCLIENTE02,
        STATIVO
    ) {

        const response = await this.api.post(`${url}/api/cliente/todos.xsjs`, [{
            IDEMPRESA,
            DSNOMERAZAOSOCIAL,
            DSAPELIDONOMEFANTASIA,
            NUCPFCNPJ,
            NURGINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUINSCRICAOSUFRAMA,
            TPINDICADORINSCESTADUAL,
            STOPTANTESIMPLES,
            NUCEP,
            NUIBGE,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            EEMAIL,
            NUTELCOMERCIAL,
            NUTELCELULAR,
            DTNASCFUNDACAO,
            DSOBSERVACAO,
            NOCONTATOCLIENTE01,
            EEMAILCONTATOCLIENTE01,
            FONECONTATOCLIENTE01,
            DSCARGOCONTATOCLIENTE01,
            NOCONTATOCLIENTE02,
            EEMAILCONTATOCLIENTE02,
            FONSCARGOCONECONTATOCLIENTE02,
            DTATOCLIENTE02,
            STATIVO
        }]);
        return response.data;
    }

    async atualizarCliente(
        IDEMPRESA,
        DSNOMERAZAOSOCIAL,
        DSAPELIDONOMEFANTASIA,
        NUCPFCNPJ,
        NURGINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUINSCRICAOSUFRAMA,
        TPINDICADORINSCESTADUAL,
        STOPTANTESIMPLES,
        NUCEP,
        NUIBGE,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        EEMAIL,
        NUTELCOMERCIAL,
        NUTELCELULAR,
        DTNASCFUNDACAO,
        DSOBSERVACAO,
        NOCONTATOCLIENTE01,
        EEMAILCONTATOCLIENTE01,
        FONECONTATOCLIENTE01,
        DSCARGOCONTATOCLIENTE01,
        NOCONTATOCLIENTE02,
        EEMAILCONTATOCLIENTE02,
        FONSCARGOCONECONTATOCLIENTE02,
        DTATOCLIENTE02,
        STATIVO,
        IDCLIENTE
    ) {

        const response = await this.api.put(`${url}/api/cliente/todos.xsjs`, [{
            IDEMPRESA,
            DSNOMERAZAOSOCIAL,
            DSAPELIDONOMEFANTASIA,
            NUCPFCNPJ,
            NURGINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUINSCRICAOSUFRAMA,
            TPINDICADORINSCESTADUAL,
            STOPTANTESIMPLES,
            NUCEP,
            NUIBGE,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            EEMAIL,
            NUTELCOMERCIAL,
            NUTELCELULAR,
            DTNASCFUNDACAO,
            DSOBSERVACAO,
            NOCONTATOCLIENTE01,
            EEMAILCONTATOCLIENTE01,
            FONECONTATOCLIENTE01,
            DSCARGOCONTATOCLIENTE01,
            NOCONTATOCLIENTE02,
            EEMAILCONTATOCLIENTE02,
            FONSCARGOCONECONTATOCLIENTE02,
            DTATOCLIENTE02,
            STATIVO,
            IDCLIENTE
        }]);
        return response.data;
    }
}