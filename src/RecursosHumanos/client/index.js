import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class RecursosHumanosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarFuncionarioLoja(
        ID,
        IDFUNCIONARIO,
        IDSUBGRUPOEMPRESARIAL,
        IDEMPRESA,
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        DSFUNCAO,
        VALORSALARIO,
        PERC,
        STATIVO,
        DSTIPO,
        VALORDISPONIVEL,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        DATA_ADMISSAO,
        TELEFONE,
        DEPARTAMENTO

    ) {

        const response = await this.api.post(`${url}/api/informatica/funcionario-loja.xsjs`, [{
            ID,
            IDFUNCIONARIO,
            IDSUBGRUPOEMPRESARIAL,
            IDEMPRESA,
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            DSFUNCAO,
            VALORSALARIO,
            PERC,
            STATIVO,
            DSTIPO,
            VALORDISPONIVEL,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            DATA_ADMISSAO,
            TELEFONE,
            DEPARTAMENTO
        }])
        return response.data;
    }

    async atualizarFuncionarioLoja(
        DATA_ADMISSAO,
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        IDEMPRESA,
        IDSUBGRUPOEMPRESARIAL,
        IDFUNCIONARIO,
        DSTIPO,
        PERC,
        VALORSALARIO,
        VALORDISPONIVEL,
        IDPERFIL,
        DSFUNCAO,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        STATIVO,
        IDFUNCIONARIOULTALTERACAO,
        MOTIVODESC,
        ID,
        TELEFONE,
        DEPARTAMENTO
    ) {

        const response = await this.api.put(`${url}/api/informatica/funcionario-loja.xsjs`, [{
            DATA_ADMISSAO,
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            IDEMPRESA,
            IDSUBGRUPOEMPRESARIAL,
            IDFUNCIONARIO,
            DSTIPO,
            PERC,
            VALORSALARIO,
            VALORDISPONIVEL,
            IDPERFIL,
            DSFUNCAO,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            STATIVO,
            IDFUNCIONARIOULTALTERACAO,
            MOTIVODESC,
            ID,
            TELEFONE,
            DEPARTAMENTO
        }])
        return response.data;
    }

    async atualizarInativarFuncionario(
        DATAULTIMAALTERACAO,
        STATIVO,
        DATA_DEMISSAO,
        ID
    ) {

        const response = await this.api.put(`${url}/api/informatica/funcionario-inativa.xsjs`, {
            DATAULTIMAALTERACAO,
            DATA_DEMISSAO,
            STATIVO,
            ID
        })
        return response.data;
    }

    async atualizarFuncionarioDesconto(
        DTINICIODESC,
        DTFIMDESC,
        PERCDESCUSUAUTORIZADO,
        TXTMOTIVODESCONTO,
        IDFUNCALTERACAO,
        ID
    ) {

        const response = await this.api.put(`${url}/api/informatica/funcionario-desconto.xsjs`, [{
            DTINICIODESC,
            DTFIMDESC,
            PERCDESCUSUAUTORIZADO,
            TXTMOTIVODESCONTO,
            IDFUNCALTERACAO,
            ID
        }])
        return response.data;
    }

}