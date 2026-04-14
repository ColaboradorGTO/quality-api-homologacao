export class MovimentoCaixaService {
    constructor(client) {
        this.client = client;
    }

    async updateStatus(
        IDSUPERVISOR,
        STCONFERIDO,
        ID
    ) {
        if (!ID) {
            throw new Error('ID é obrigatório.');
        }

        if (!IDSUPERVISOR) {
            throw new Error('IDSUPERVISOR é obrigatório.');
        }

        const result = await this.client.atuaizarStatus(IDSUPERVISOR, STCONFERIDO, ID);

        return result;
    }

    async updateListaAjusteRecebimento(

        TXT_OBS,
        VRAJUSTDINHEIRO,
        VRAJUSTTEF,
        VRAJUSTPOS,
        VRAJUSTCONVENIO,
        VRAJUSTVOUCHER,
        VRAJUSTFATURA,
        VRAJUSTPIX,
        VRAJUSTPL,
        VRQUEBRACAIXA,
        ID
    ) {
        if (!ID) {
            throw new Error('ID é obrigatório.');
        }

        const result = await this.client.atualizarListaAjusteRecebimento(
            TXT_OBS,
            VRAJUSTDINHEIRO,
            VRAJUSTTEF,
            VRAJUSTPOS,
            VRAJUSTCONVENIO,
            VRAJUSTVOUCHER,
            VRAJUSTFATURA,
            VRAJUSTPIX,
            VRAJUSTPL,
            VRQUEBRACAIXA,
            ID
        );
        return result;
    }
}