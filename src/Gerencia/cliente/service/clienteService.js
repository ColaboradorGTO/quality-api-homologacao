export class ClienteService {
    constructor(client) {
        this.client = client;
    }

    async createCliente(
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

        if (!IDEMPRESA) {
            throw new Error('IDEMPRESA obrigatorio');
        }

        if (!DSNOMERAZAOSOCIAL) {
            throw new Error('DSNOMERAZAOSOCIAL obrigatorio');
        }


        const result = await this.client.criarCliente(
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
        )
        return result;
    }

    async updateCliente(
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
        if (!IDEMPRESA) {
            throw new Error('IDEMPRESA obrigatorio');
        }

        if (!DSNOMERAZAOSOCIAL) {
            throw new Error('DSNOMERAZAOSOCIAL obrigatorio');
        }

        if (!IDCLIENTE) {
            throw new Error('IDCLIENTE obrigatorio');
        }
        const result = await this.client.atualizarCliente(
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
        )
        return result;
    }
}