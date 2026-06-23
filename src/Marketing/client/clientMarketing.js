
import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class MarketingClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarCampanhaCliente(
        IDCAMPANHA,
        NUCPFCNPJ,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE,
        NOME,
        ID
    ) {
        const response = await this.api.put(`${url}/api/campanha/campanha-cliente.xsjs`, [{
            IDCAMPANHA,
            NUCPFCNPJ,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE,
            NOME,
            ID
        }])
        return response.data;
    }

    async atualizarProdutoPromocao(
        IDPRODUTO,
        IDGRUPOEMPRESARIAL,
        NUNCM,
        NUCEST,
        NUCST_ICMS,
        NUCFOP,
        PERC_OUT,
        NUCODBARRAS,
        DSNOME,
        STGRADE,
        UND,
        PRECOCUSTO,
        PRECOVENDA,
        QTDENTRADA,
        QTDCOMERCIALIZADA,
        QTDPERDA,
        QTDDISPONIVEL,
        PERCICMS,
        PERCISS,
        PERCPIS,
        PERCCOFINS,
        COD_CSOS,
        PERCCSOSC,
        NUCST_IPI,
        NUCST_PIS,
        NUCST_COFINS,
        PERCIPI,
        DTULTALTERACAO,
        STPESAVEL,
        GRP_MATERIAIS

    ) {
        const response = await this.api.put(`${url}/api/produto-promocao.xsjs`, [{
            IDPRODUTO,
            IDGRUPOEMPRESARIAL,
            NUNCM,
            NUCEST,
            NUCST_ICMS,
            NUCFOP,
            PERC_OUT,
            NUCODBARRAS,
            DSNOME,
            STGRADE,
            UND,
            PRECOCUSTO,
            PRECOVENDA,
            QTDENTRADA,
            QTDCOMERCIALIZADA,
            QTDPERDA,
            QTDDISPONIVEL,
            PERCICMS,
            PERCISS,
            PERCPIS,
            PERCCOFINS,
            COD_CSOS,
            PERCCSOSC,
            NUCST_IPI,
            NUCST_PIS,
            NUCST_COFINS,
            PERCIPI,
            DTULTALTERACAO,
            STPESAVEL,
            GRP_MATERIAIS

        }])
        return response.data;
    }

    async atualizarProdutoEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO

    ) {
        const response = await this.api.put(`${url}/api/campanha/todos.xsjs`, [{
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO

        }])
        return response.data;
    }

    async criarProdutoEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        EMPRESAS

    ) {
        const response = await this.api.post(`${url}/api/campanha/todos.xsjs`, [{
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            EMPRESAS

        }])
        return response.data;
    }

    async criarCampanhaClient(
        IDCAMPANHA,
        NUCPFCNPJ,
        NOME,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE

    ) {
        const response = await this.api.post(`${url}/api/campanha/campanha-cliente.xsjs`, [{
            IDCAMPANHA,
            NUCPFCNPJ,
            NOME,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE

        }])
        return response.data;
    }

    async criarProdutoPromocao(
        DSPROMO,
        VRPERCDESCONTO,
        VRPRECODESCONTO,
        VRAPARTIRDE,
        VRLIMITEDE,
        QTDAPARTIRDE,
        QTDLIMITEDE,
        DTINICIOPROMO,
        DTFIMPROMO,
        STATIVO,
        IDGRUPO,
        PRODUTOS,
        EMPRESAS

    ) {
        const response = await this.api.post(`${url}/api/produto-promocao.xsjs`, [{
            DSPROMO,
            VRPERCDESCONTO,
            VRPRECODESCONTO,
            VRAPARTIRDE,
            VRLIMITEDE,
            QTDAPARTIRDE,
            QTDLIMITEDE,
            DTINICIOPROMO,
            DTFIMPROMO,
            STATIVO,
            IDGRUPO,
            PRODUTOS,
            EMPRESAS

        }])
        return response.data;
    }
}


