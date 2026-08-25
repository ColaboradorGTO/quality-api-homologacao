export class ServiceLayerService {
    constructor(client) {
        this.client = client;
    }

    async createMigrarProdutoAvulso({ IDDETALHEPRODUTOPEDIDO }) {
        if (!IDDETALHEPRODUTOPEDIDO) {
            throw new Error('IDDETALHEPRODUTOPEDIDO é obrigatório.');
        }

        const result = await this.client.migrarProdutoAvulso(IDDETALHEPRODUTOPEDIDO);
        return result;
    }

    async integrarDeposito({ IDDEPOSITOLOJA }) {
        if (!IDDEPOSITOLOJA) {
            throw new Error('IDDEPOSITOLOJA é obrigatório.');
        }

        const result = await this.client.integrarDeposito(IDDEPOSITOLOJA);
        return result;
    }

    async createVoucher() {
        const result = await this.client.gerarVoucher();
        return result;
    }

    async createIntegrarAdiantamentoSalarial({
        IDADIANTAMENTOSALARIO,
        IDFUNCIONARIO
    }) {
        if (!IDADIANTAMENTOSALARIO) {
            throw new Error('IDADIANTAMENTOSALARIO é obrigatório.');
        }

        if (!IDFUNCIONARIO) {
            throw new Error('IDFUNCIONARIO é obrigatório.');
        }

        const result = await this.client.integrarAdiantamentoSalarial(
            IDADIANTAMENTOSALARIO,
            IDFUNCIONARIO
        );
        return result;
    }

    async createIntegrarQuebraCaixa({ IDQUEBRACAIXA, IDFUNCIONARIO }) {
        if (!IDQUEBRACAIXA) {
            throw new Error('IDQUEBRACAIXA é obrigatório.');
        }

        if (!IDFUNCIONARIO) {
            throw new Error('IDFUNCIONARIO é obrigatório.');
        }

        const result = await this.client.integrarQuebraCaixa(
            IDQUEBRACAIXA,
            IDFUNCIONARIO
        );
        return result;
    }

    async createIntegrarPagamentoPix({ IDVENDAPAGAMENTO }) {
        if (!IDVENDAPAGAMENTO) {
            throw new Error('IDVENDAPAGAMENTO é obrigatório.');
        }

        const result = await this.client.integrarPagamentoPix(IDVENDAPAGAMENTO);
        return result;
    }

    async createIntegrarDespesa({ IDDESPESASLOJA, IDFUNCIONARIO }) {
        if (!IDDESPESASLOJA) {
            throw new Error('IDDESPESASLOJA é obrigatório.');
        }

        if (!IDFUNCIONARIO) {
            throw new Error('IDFUNCIONARIO é obrigatório.');
        }

        const result = await this.client.integrarDespesa(
            IDDESPESASLOJA,
            IDFUNCIONARIO
        );
        return result;
    }
}
