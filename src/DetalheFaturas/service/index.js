export class DetalheFaturasService {
    constructor(client) {
        this.client = client;
    }

    async updateFatura({ faturas }) {
        if (!Array.isArray(faturas) || faturas.length === 0) {
            throw new Error('Os dados da fatura são obrigatórios.');
        }
        return this.client.atualizarFatura(faturas);
    }

    async createDetalheFatura({
        IDEMPRESA, IDFUNCIONARIO, IDDETALHEFATURALOCAL, IDCAIXAWEB, IDCAIXALOCAL,
        NUESTABELECIMENTO, NUCARTAO, DTPROCESSAMENTO, HRPROCESSAMENTO, NUNSU,
        NUNSUHOST, IDMOVIMENTOCAIXAWEB, NUCODAUTORIZACAO, VRRECEBIDO,
        DTHRMIGRACAO, STCANCELADO, IDUSRCACELAMENTO
    }) {
        if (!IDEMPRESA) throw new Error('IDEMPRESA é obrigatório.');
        if (!IDFUNCIONARIO) throw new Error('IDFUNCIONARIO é obrigatório.');
        if (!NUCODAUTORIZACAO) throw new Error('NUCODAUTORIZACAO é obrigatório.');

        return this.client.criarDetalheFatura(
            IDEMPRESA, IDFUNCIONARIO, IDDETALHEFATURALOCAL, IDCAIXAWEB, IDCAIXALOCAL,
            NUESTABELECIMENTO, NUCARTAO, DTPROCESSAMENTO, HRPROCESSAMENTO, NUNSU,
            NUNSUHOST, IDMOVIMENTOCAIXAWEB, NUCODAUTORIZACAO, VRRECEBIDO,
            DTHRMIGRACAO, STCANCELADO, IDUSRCACELAMENTO
        );
    }

    async updateDetalheFatura({
        IDDETALHEFATURA, TXTMOTIVOCANCELAMENTO, STCANCELADO, IDUSRCACELAMENTO
    }) {
        if (!IDDETALHEFATURA) throw new Error('IDDETALHEFATURA é obrigatório.');
        if (!TXTMOTIVOCANCELAMENTO) throw new Error('TXTMOTIVOCANCELAMENTO é obrigatório.');
        if (!STCANCELADO) throw new Error('STCANCELADO é obrigatório.');
        if (!IDUSRCACELAMENTO) throw new Error('IDUSRCACELAMENTO é obrigatório.');

        return this.client.atualizarDetalheFatura(
            IDDETALHEFATURA, TXTMOTIVOCANCELAMENTO, STCANCELADO, IDUSRCACELAMENTO
        );
    }
}
