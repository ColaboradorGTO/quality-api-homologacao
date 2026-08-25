export class DepositoService {
    constructor(client) {
        this.client = client;
    }

    async createDeposito({
        DTDEPOSITO,
        DTMOVIMENTOCAIXA,
        IDEMPRESA,
        IDUSR,
        IDCONTABANCO,
        VRDEPOSITO,
        DSHISTORIO,
        NUDOCDEPOSITO,
        DSPATHDOCDEPOSITO,
        STATIVO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO,
    }) {
        if (!DTDEPOSITO) {
            throw new Error("DTDEPOSITO é Obrigatorio.")
        }

        if (!DTMOVIMENTOCAIXA) {
            throw new Error("DTMOVIMENTOCAIXA é Obrigatorio.")
        }

        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA é Obrigatorio.")
        }

        if (!IDUSR) {
            throw new Error("IDUSR é Obrigatorio.")
        }

        if (!IDCONTABANCO) {
            throw new Error("IDCONTABANCO é Obrigatorio.")
        }

        const result = await this.client.criarDeposito(
            DTDEPOSITO,
            DTMOVIMENTOCAIXA,
            IDEMPRESA,
            IDUSR,
            IDCONTABANCO,
            VRDEPOSITO,
            DSHISTORIO,
            NUDOCDEPOSITO,
            DSPATHDOCDEPOSITO,
            STATIVO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO,
        )
       
        return result;
    }

    async updateDeposito({
        IDDEPOSITOLOJA,
        IDEMPRESA,
        IDUSR,
        IDCONTABANCO,
        DTDEPOSITO,
        DTMOVIMENTOCAIXA,
        DSHISTORIO,
        NUDOCDEPOSITO,
        VRDEPOSITO,
        STATIVO,
        STCANCELADO
    }) {
        if (!IDDEPOSITOLOJA) {
            throw new Error("IDDEPOSITOLOJA é Obrigatorio.")
        }

        const result = await this.client.atualizarDeposito(
            IDDEPOSITOLOJA,
            IDEMPRESA,
            IDUSR,
            IDCONTABANCO,
            DTDEPOSITO,
            DTMOVIMENTOCAIXA,
            DSHISTORIO,
            NUDOCDEPOSITO,
            VRDEPOSITO,
            STATIVO,
            STCANCELADO
        )
        return result;
    }

    async updateStatusConferido({
        IDDEPOSITOLOJA,
        STCONFERIDO,
        DTCOMPENSACAO
    }) {
        if (!IDDEPOSITOLOJA) {
            throw new Error("IDDEPOSITOLOJA é Obrigatorio.")
        }

        const result = await this.client.atualizarStatusConferido(
            IDDEPOSITOLOJA,
            STCONFERIDO,
            DTCOMPENSACAO
        );
        return result;
    }

    async updateStatusDepositoLoja({
        IDDEPOSITOLOJA,
        STCANCELADO
    }) {
        if (!IDDEPOSITOLOJA) {
            throw new Error("IDDEPOSITOLOJA é Obrigatorio.")
        }

        const result = await this.client.atualizarStatusDepositoLoja(
            IDDEPOSITOLOJA,
            STCANCELADO
        );
        return result;
    }
}
