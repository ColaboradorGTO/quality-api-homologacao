import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class FuncionarioClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarFuncionario(
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        IDEMPRESA,
        IDSUBGRUPOEMPRESARIAL,
        DSFUNCAO,
        IDFUNCIONARIO,
        DSTIPO,
        PERC,
        VALORSALARIO,
        VALORDISPONIVEL,
        TXTMOTIVODESCONTO,
        IDFUNCALTERACAO,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        DATA_ADMISSAO,
        TELEFONE,
        DEPARTAMENTO,
        ID
    ) {
        const response = await this.api.put(`${url}/api/informatica/funcionario-loja.xsjs`, [{
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            IDEMPRESA,
            IDSUBGRUPOEMPRESARIAL,
            DSFUNCAO,
            IDFUNCIONARIO,
            DSTIPO,
            PERC,
            VALORSALARIO,
            VALORDISPONIVEL,
            TXTMOTIVODESCONTO,
            IDFUNCALTERACAO,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            DATA_ADMISSAO,
            TELEFONE,
            DEPARTAMENTO,
            ID
        }])
        return response.data;
    }

    async criarFuncionario(
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
        }]);
        return response.data;
    }

    async atualizarFuncionarioDesconto(
        DTINICIODESC,
        DTFIMDESC,
        PERCDESCUSUAUTORIZADO,
        MOTIVODESC,
        IDFUNCALTERACAO,
        ID
    ) {
        const response = await this.api.put(`${url}/api/informatica/funcionario-desconto.xsjs`, [{
            DTINICIODESC,
            DTFIMDESC,
            PERCDESCUSUAUTORIZADO,
            MOTIVODESC,
            IDFUNCALTERACAO,
            ID
        }]);
        return response.data;
    }

    async inativarFuncionario(
        DATAULTIMAALTERACAO,
        DATA_DEMISSAO,
        STATIVO,
        ID
    ) {
        const response = await this.api.put(`${url}/api/informatica/funcionario-inativa.xsjs`, {
            DATAULTIMAALTERACAO,
            DATA_DEMISSAO,
            STATIVO,
            ID
        });
        return response.data;
    }


}

