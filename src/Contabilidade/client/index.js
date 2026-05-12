import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class ContabilidadeClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarVinculoAlvaraEmpresa(
        IDVINCULO,
        STATIVO,
        DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO,
        ARQUIVOSALVARA,

    ) {

        const response = await this.api.put(`${url}/api/contabilidade/vinculo-alvaras-empresa.xsjs`, [{
            IDVINCULO,
            STATIVO,
            DTINICIOCOMPETENCIA,
            DTFIMCOMPETENCIA,
            IDSTATUSANDAMENTO,
            DESCRICAODETALHEANDAMENTO,
            METRAGEMEMPRESA,
            NUMEROPROJETOAPROVADO,
            IDFUNCIONARIO,
            ARQUIVOSALVARA,
        }])
        return response.data;
    }

    async criarVinculoAlvaraEmpresa(
        IDEMPRESA,
        IDALVARA,
        STATIVO,
        DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO,
        ARQUIVOSALVARA
    ) {

        const response = await this.api.post(`${url}/api/contabilidade/vinculo-alvaras-empresa.xsjs`, [{
            IDEMPRESA,
            IDALVARA,
            STATIVO,
            DTINICIOCOMPETENCIA,
            DTFIMCOMPETENCIA,
            IDSTATUSANDAMENTO,
            DESCRICAODETALHEANDAMENTO,
            METRAGEMEMPRESA,
            NUMEROPROJETOAPROVADO,
            IDFUNCIONARIO,
            ARQUIVOSALVARA
        }])
        return response.data;
    }

    async atualizarArquivosAnexosAlvara(
        IDVINCULOALVARAEMPRESA,
        IDARQUIVOSALVARA,
        IDFUNCIONARIO,
        ARQUIVOSALVARA,
        cancelar
    ) {

        const response = await this.api.put(`${url}/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs?cancelar=${cancelar}`, [{
            IDVINCULOALVARAEMPRESA,
            IDARQUIVOSALVARA,
            IDFUNCIONARIO,
            ARQUIVOSALVARA,
            cancelar
        }])
        return response.data;
    }

    async criarArquivosAnexosAlvara(
        IDFUNCIONARIO,
        IDVINCULOALVARAEMPRESA,
        ARQUIVOSALVARA

    ) {

        const response = await this.api.post(`${url}/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs`, [{
            IDFUNCIONARIO,
            IDVINCULOALVARAEMPRESA,
            ARQUIVOSALVARA
        }])
        return response.data;
    }
}