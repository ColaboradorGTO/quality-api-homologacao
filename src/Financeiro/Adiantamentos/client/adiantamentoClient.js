import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class AdiantamentosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarAdiantamentoStatus(
        IDADIANTAMENTOSALARIO,
        STATIVO
    ) {

        const response = await this.api.put(`/api/financeiro/atualizacao-adiantamento-status.xsjs`, {
            IDADIANTAMENTOSALARIO,
            STATIVO
        });
        return response.data;
    }

    async atualizarFecharCaixaZerado(
        ID
    ) {
        const response = await this.api.put(`/api/financeiro/fecha-caixas-zerados.xsjs`, {
            ID
        });
        return response.data;
    }

    async atualizarAdiantamentoDepartamento(
        IDADIANTAMENTO,
        DEPARTAMENTO,
        IDEMPRESA,
        NUCNPJEMPRESA,
        POSSUINOTAFISCAL,
        CNPJFATURAMENTO,
        VRSOLICITADO,
        DESCRICAO,
        ANEXOORCAMENTO,
        ANEXONOTAFISCAL,
        RAZAOSOCIALFATURAMENTO,
        STATUS,
        DSJUSTIFICATIVA,
        IDUSUARIOALTERACAO
    ) {

        const response = await this.api.put(`/api/financeiro/adiantamento-departamento.xsjs`, [{
            IDADIANTAMENTO,
            DEPARTAMENTO,
            IDEMPRESA,
            NUCNPJEMPRESA,
            POSSUINOTAFISCAL,
            CNPJFATURAMENTO,
            VRSOLICITADO,
            DESCRICAO,
            ANEXOORCAMENTO,
            ANEXONOTAFISCAL,
            RAZAOSOCIALFATURAMENTO,
            STATUS,
            DSJUSTIFICATIVA,
            IDUSUARIOALTERACAO
        }]);

        return response.data;
    }

    async atualizarPagamentoDepartamento(
        IDPAGAMENTO,
        IDADIANTAMENTO,
        VLPAGAMENTO,
        DATAPAGAMENTO,
        FORMAPAGAMENTO,
        ANEXOCOMPROVANTE,
        DSOBSERVACAO,
        STATUS,
        IDUSUARIOCRIACAO
    ) {

        const response = await this.api.put(`/api/financeiro/pagamento-adiantamento.xsjs`, [{
            IDPAGAMENTO,
            IDADIANTAMENTO,
            VLPAGAMENTO,
            DATAPAGAMENTO,
            FORMAPAGAMENTO,
            ANEXOCOMPROVANTE,
            DSOBSERVACAO,
            STATUS,
            IDUSUARIOCRIACAO
        }]);

        return response.data;
    }

    async criarAdiantamentoDepartamento(
        DEPARTAMENTO,
        IDEMPRESA,
        NUCNPJEMPRESA,
        POSSUINOTAFISCAL,
        CNPJFATURAMENTO,
        VRSOLICITADO,
        DESCRICAO,
        ANEXOORCAMENTO,
        ANEXONOTAFISCAL,
        RAZAOSOCIALFATURAMENTO,
        DSJUSTIFICATIVA,
        IDUSUARIOCRIACAO
    ) {

        const response = await this.api.post(`/api/financeiro/adiantamento-departamento.xsjs`, [{
            DEPARTAMENTO,
            IDEMPRESA,
            NUCNPJEMPRESA,
            POSSUINOTAFISCAL,
            CNPJFATURAMENTO,
            VRSOLICITADO,
            DESCRICAO,
            ANEXOORCAMENTO,
            ANEXONOTAFISCAL,
            RAZAOSOCIALFATURAMENTO,
            DSJUSTIFICATIVA,
            IDUSUARIOCRIACAO
        }]);

        return response.data;
    }
 
    async criarPagamentoDepartamento(
        IDADIANTAMENTO,
        VLPAGAMENTO,
        DATAPAGAMENTO,
        FORMAPAGAMENTO,
        ANEXOCOMPROVANTE,
        DSOBSERVACAO,
        STATUS,
        IDUSUARIOCRIACAO
    ) {

        const response = await this.api.post(`/api/financeiro/pagamento-adiantamento.xsjs`, [{
            IDADIANTAMENTO,
            VLPAGAMENTO,
            DATAPAGAMENTO,
            FORMAPAGAMENTO,
            ANEXOCOMPROVANTE,
            DSOBSERVACAO,
            STATUS,
            IDUSUARIOCRIACAO
        }]);

        return response.data;
    }

}

