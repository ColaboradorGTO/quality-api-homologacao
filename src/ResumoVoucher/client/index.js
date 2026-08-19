import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ResumoVoucherClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async autorizacaoAtualizarStatusVoucher(
        MATRICULA,
        SENHA,
    ) {

        const response = await this.api.post(`${url}/api/resumo-voucher/autFuncionario.xsjs`, [{
            MATRICULA,
            SENHA,
        }]);
        return response.data;
    }

    async criarAuthFuncionarioCreateVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVENDA,
        STTIPOTROCA,
    ) {

        const response = await this.api.post(`${url}/api/resumo-voucher/auth-funcionario-create-voucher.xsjs`, {
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVENDA,
            STTIPOTROCA,
        });
        return response.data;
    }

    async criarAuthFuncionarioPrintVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER,
    ) {

        const response = await this.api.post(`${url}/api/resumo-voucher/auth-funcionario-print-voucher.xsjs`, {
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER,
        });
        return response.data;
    }

    async criarAuthFuncionarioUpdateVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER,
    ) {

        const response = await this.api.post(`${url}/api/resumo-voucher/auth-funcionario-update-voucher.xsjs`, {
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER,
        });
        return response.data;
    }

    async criarAuthAutorizarExecaoVenda({ 
        MATRICULA,
        SENHA,
    }) {

        const response = await this.api.post(`${url}/api/resumo-voucher/autFuncionarioExcecaoVenda.xsjs`, {
            MATRICULA,
            SENHA,
        });
        return response.data;
    }

    async criarResumoVoucher({
        IDGRUPOEMPRESARIAL,
        IDEMPRESAORIGEM,
        IDCAIXAORIGEM,
        IDNFEDEVOLUCAO,
        IDUSRINVOUCHER,
        IDVENDEDOR,
        IDCLIENTE,
        NUCPF,
        VRVOUCHER,
        IDRESUMOVENDAWEB,
        STTIPOTROCA,
        MOTIVOTROCA,
        IDUSRLIBERACAOCRIACAO,
        detVoucher,
        produtosVoucher,
    }) {

        const response = await this.api.post(`${url}/api/resumo-voucher/todos-web.xsjs`, [{
            IDGRUPOEMPRESARIAL,
            IDEMPRESAORIGEM,
            IDCAIXAORIGEM,
            IDNFEDEVOLUCAO,
            IDUSRINVOUCHER,
            IDVENDEDOR,
            IDCLIENTE,
            NUCPF,
            VRVOUCHER,
            IDRESUMOVENDAWEB,
            STTIPOTROCA,
            MOTIVOTROCA,
            IDUSRLIBERACAOCRIACAO,
            detVoucher,
            produtosVoucher,
        }]);
        return response.data;
    }

    async atualizarResumoVoucher({
        STATIVO,
        STCANCELADO,
        DSMOTIVOTROCASTATUS,
        IDGRUPOEMPRESARIAL,
        IDEMPRESALOGADA,
        STSTATUS,
        STTIPOTROCA,
        IDFUNCIONARIO,
        IDVOUCHER
    }) {

        const response = await this.api.put(`${url}/api/resumo-voucher/todos-web.xsjs`, [{
            STATIVO,
            STCANCELADO,
            DSMOTIVOTROCASTATUS,
            IDGRUPOEMPRESARIAL,
            IDEMPRESALOGADA,
            STSTATUS,
            STTIPOTROCA,
            IDFUNCIONARIO,
            IDVOUCHER
        }]);
        return response.data;
    }

}