export class RelatorioBIService {
    constructor(client) {
        this.client = client;
    }

    async createLinkRelatorioBi({
        IDRELATORIOBI,
        IDEMPRESA,
        LINK,
        STATIVO
    }) {

        if (!IDRELATORIOBI) {
            throw new Error('IDRELATORIOBI obrigatorio');
        }
        if (!IDEMPRESA) {
            throw new Error('IDEMPRESA obrigatorio');
        }
        if (!LINK) {
            throw new Error('LINK obrigatorio');
        }
        if (!STATIVO) {
            throw new Error('STATIVO obrigatorio');
        }

        const result = await this.client.criarLinkRelatoioBI(
            IDRELATORIOBI,
            IDEMPRESA,
            LINK,
            STATIVO
        );
        return result
    }

    async updateLinkRelatorioBi({
        IDRELATORIOBI,
        IDEMPRESA,
        LINK,
        STATIVO,
        IDRELATORIOBIANTIGO
    }) {

        if (!IDRELATORIOBI) {
            throw new Error('IDRELATORIOBI obrigatorio ');
        }
        if (!IDEMPRESA) {
            throw new Error('IDEMPRESA obrigatorio');
        }
        if (!LINK) {
            throw new Error('LINK obrigatorio');
        }
        if (!STATIVO) {
            throw new Error('STATIVO obrigatorio');
        }
        if (!IDRELATORIOBIANTIGO) {
            throw new Error('IDRELATORIOBIANTIGO obrigatorio');
        }

        const result = await this.client.atualizarLinkRelatoioBI(
            IDRELATORIOBI,
            IDEMPRESA,
            LINK,
            STATIVO,
            IDRELATORIOBIANTIGO
        );
        return result
    }

    async createRelatorioBi({
        DSRELATORIOBI,
        STATIVO
    }) {

        if (!DSRELATORIOBI) {
            throw new Error('DSRELATORIOBI obrigatorio');
        }
        if (!STATIVO) {
            throw new Error('STATIVO obrigatorio');
        }

        const result = await this.client.criarRelatorioBi(
            DSRELATORIOBI,
            STATIVO
        );
        return result
    }

    async updateRelatorioBi({
        DSRELATORIOBI,
        STATIVO,
        IDRELATORIOBI
    }) {

        if (!IDRELATORIOBI) {
            throw new Error('IDRELATORIOBI obrigatorio');
        }
        if (!DSRELATORIOBI) {
            throw new Error('DSRELATORIOBI obrigatorio');
        }
        if (!STATIVO) {
            throw new Error('STATIVO obrigatorio');
        }

        const result = await this.client.atualizarRelatorioBi(
            DSRELATORIOBI,
            STATIVO,
            IDRELATORIOBI
        );
        return result
    }


}