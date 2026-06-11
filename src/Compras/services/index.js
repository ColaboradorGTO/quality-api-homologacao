export class ComprasService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO) {
        if(!IDRESUMOPEDIDO) {
            throw new Error('ID do resumo do pedido é obrigatório.');
        }

        if(!IDRESPCANCELAMENTO) {
            throw new Error('ID do responsável pelo cancelamento é obrigatório.');
        }

        const response = await this.client.atualizarStatusPedido(IDRESUMOPEDIDO, IDANDAMENTO, IDRESPCANCELAMENTO, DSMOTIVOCANCELAMENTO, DTCANCELAMENTO, STCANCELADO);
        return response.data;
    }
}