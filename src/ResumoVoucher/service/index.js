export class ResumoVoucherService {
    constructor(client) {
        this.client = client;
    }

    async autorizacaoAtualizarStatusVoucherService({
        MATRICULA,
        SENHA,
    }) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }

        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }

        const result = await this.client.autorizacaoAtualizarStatusVoucher(
            MATRICULA,
            SENHA,
        )
        return result;
    }

    async createAuthFuncionarioCreateVoucher({
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVENDA,
        STTIPOTROCA,
    }) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }

        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }

        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }

        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }

        if (!IDVENDA) {
            throw new Error("IDVENDA is required, services");
        }

        const result = await this.client.criarAuthFuncionarioCreateVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVENDA,
            STTIPOTROCA,
        )
        return result;
    }

    async createAuthFuncionarioPrintVoucher({
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER,
    }) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }

        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }

        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }

        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }

        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }

        const result = await this.client.criarAuthFuncionarioPrintVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER,
        )
        return result;
    }

    async createAuthFuncionarioUpdateVoucher({
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER,
    }) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }

        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }

        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }

        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }

        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }

        const result = await this.client.criarAuthFuncionarioUpdateVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER,
        )
        return result;
    }

    async createAuthAutorizarExecaoVenda({
        MATRICULA,
        SENHA,
    }) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }

        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }

        const result = await this.client.criarAuthAutorizarExecaoVenda({
            MATRICULA,
            SENHA,
    })
        return result;
    }

    async createResumoVoucher({
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
        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }

        if (!IDEMPRESAORIGEM) {
            throw new Error("IDEMPRESAORIGEM is required, services");
        }

        const result = await this.client.criarResumoVoucher({
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
        })
        return result;
    }

    async updateResumoVoucher({
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
        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }

        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }

        const result = await this.client.atualizarResumoVoucher({
            STATIVO,
            STCANCELADO,
            DSMOTIVOTROCASTATUS,
            IDGRUPOEMPRESARIAL,
            IDEMPRESALOGADA,
            STSTATUS,
            STTIPOTROCA,
            IDFUNCIONARIO,
            IDVOUCHER
        })
        return result;
    }

}    