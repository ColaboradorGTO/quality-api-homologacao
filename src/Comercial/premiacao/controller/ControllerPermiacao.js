import axios from "axios";
import 'dotenv/config';
import createPremiacaoSchema from "../schema/shemaCadastrarpremiacoes.js";
import { PremiacaoClient } from "../client/index.js";
import { PremiacaoServices } from "../service/index.js";

const url = process.env.API_URL;

const premiacaoClient = new PremiacaoClient(url)
const premiacaoService = new PremiacaoServices(premiacaoClient);


class PremiacaoControllers {

    async getListaPremiacoesPeriodo(req, res) {
        let { page, pageSize } = req.query;
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/comercial/lista-premiacoes.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaPremiosGerente(req, res) {
        let { idSubGrupo, dataPesquisaInicio, dataPesquisaFim, funcao, page, pageSize } = req.query;

        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        funcao = funcao ? funcao : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/lista-premios-gerente.xsjs?idPremioSubGrupoEmp=${idSubGrupo}&DTInicPremio=${dataPesquisaInicio}&DTFimPremio=${dataPesquisaFim}&noFunc=${funcao}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }


    async getListaPremiacaoCadastrada(req, res) {
        let { idSubGrupo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/comercial/lista_premiacaocad.xsjs?idPremioSubGrupoEmp=${idSubGrupo}&DTInicPremio=${dataPesquisaInicio}&DTFimPremio=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ComercialControllers.getListaPremiacaoCadastrada:", error);
            throw error;
        }

    }

    async postCadastrarPremiacoes(req, res) {
        try {

            const { error, value } = createPremiacaoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await premiacaoService.createCadastroPremiacoes({

                DTPREMIOINICIO: value.DTPREMIOINICIO,
                DTPREMIOFIM: value.DTPREMIOFIM,
                IDSUBGRUPOEMPRESARIAL: value.IDSUBGRUPOEMPRESARIAL,
                NOFUNCAO: value.NOFUNCAO,
                NOINDICADOR: value.NOINDICADOR,
                TPAPURACAO: value.TPAPURACAO,
                VRBONUSSENIOR: value.VRBONUSSENIOR,
                VRBONUSPLENO: value.VRBONUSPLENO,
                VRBONUSJUNIOR: value.VRBONUSJUNIOR,
                VRBONUSTODOS: value.VRBONUSTODOS,
                STATIVO: value.STATIVO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ContabilidadeControllers.putNcmExcecao:", error);
            res.status(500).json({ error: "Erro ao atualizar putNcmExcecao" });
            throw error;
        }
    }

}

export default new PremiacaoControllers();