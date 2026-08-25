export class PromocaoService {
    constructor(client) {
        this.client = client;
    }

    async updatePromocao({
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDPRODUTO,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDEMPRESA,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDPRODUTODESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTOORIGEM
    }) {
        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarPromocao(
            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDPRODUTO,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDEMPRESA,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDPRODUTODESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTOORIGEM
        );
    }

    async updateProdutoDestinoPromocao({
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTODESTINO
    }) {

        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarProdutoDestinoPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTODESTINO
        );
    }

    async updateProdutoOrigemPromocao({
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTOORIGEM
    }) {
        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarProdutoOrigemPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTOORIGEM
        );
    }

    async updateEmpresaPromocao({
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    }) {
        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarEmpresaPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        );
    }

    async updateStatusPromocao({
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    }) {
        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarStatusPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        );
    }

    async updatePromocaoSubGrupo({
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDEMPRESA,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDSUBGRUPOEMDESTINO,
        IDSUBGRUPOEMORIGEM

    }) {
        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarPromocaoSubGrupo(
            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDEMPRESA,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDSUBGRUPOEMDESTINO,
            IDSUBGRUPOEMORIGEM
        );
    }

    async updatePromocaoProdutoSubGrupo({
        IDRESUMOPROMOCAOMARKETING,
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        STATIVO,
        STPRODUTO,
        STESTRUTURA,
        STESTRUTURAPRODUTO,
        IDEMPRESA,
        IDPRODUTO,
        detalhesDestino,
        detalhesOrigem
    }) {

        if (!IDRESUMOPROMOCAOMARKETING)
            throw new Error('IDRESUMOPROMOCAOMARKETING é obrigatório.');

        return this.client.atualizarPromocaoProdutoSubGrupo(
            IDRESUMOPROMOCAOMARKETING,
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            STATIVO,
            STPRODUTO,
            STESTRUTURA,
            STESTRUTURAPRODUTO,
            IDEMPRESA,
            IDPRODUTO,
            detalhesDestino,
            detalhesOrigem
        );
    }

    async createListaProdutosPromocao({ dados }) {
        if (!Array.isArray(dados) || dados.length === 0) throw new Error('Os produtos são obrigatórios.');
        return this.client.criarListaProdutosPromocao(dados);
    }

    async createPromocao({ dados }) {
        if (!Array.isArray(dados) || dados.length === 0) throw new Error('Os dados da promoção são obrigatórios.');
        return this.client.criarPromocao(dados);
    }

    async createPromocaoSubGrupo({
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDEMPRESA,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTO,
        IDPRODUTODESTINO,
        IDPRODUTOORIGEM
    }) {
        if (!IDSUBGRUPOEMDESTINO)
            throw new Error('IDSUBGRUPOEMDESTINO é obrigatório.');

        if (!IDSUBGRUPOEMORIGEM)
            throw new Error('IDSUBGRUPOEMORIGEM é obrigatório.');

        return this.client.criarPromocaoSubGrupo(
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDEMPRESA,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTO,
            IDPRODUTODESTINO,
            IDPRODUTOORIGEM
        );
    }

    async createPromocaoProdutoSubGrupo({
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        STATIVO,
        STPRODUTO,
        STESTRUTURA,
        STESTRUTURAPRODUTO,
        IDEMPRESA,
        IDPRODUTO,
        detalhesDestino,
        detalhesOrigem
    }) {
        return this.client.criarPromocaoProdutoSubGrupo(
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            STATIVO,
            STPRODUTO,
            STESTRUTURA,
            STESTRUTURAPRODUTO,
            IDEMPRESA,
            IDPRODUTO,
            detalhesDestino,
            detalhesOrigem
        );
    }

    async createMecanica({
        DESCRICAO,
        APLICACAODESTINO,
        MECANICA,
        TIPODESCONTO
    }) {
        return this.client.criarMecanica(
            DESCRICAO,
            APLICACAODESTINO,
            MECANICA,
            TIPODESCONTO
        );
    }
}
