import axios from "axios";
import 'dotenv/config';
import { EmpresaServices } from "../services/index.js";
import { EmpresaClient } from "../client/index.js";
import updateEmpresaSchema from "../schema/useUpdateEmpresa.js";
const url = process.env.API_URL;

const atualizarEmpresaClient = new EmpresaClient(url)
const updateEmpresaService = new EmpresaServices(atualizarEmpresaClient);

class EmpresaControllers {

    async getAllEmpresas(req, res) {
        let { idEmpresa, idSubGrupoEmpresa, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
             const response = await axios.get(`${url}/api/empresa.xsjs?id=${idEmpresa}`)
         //  const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador/api/empresa.xsjs?id=${idEmpresa}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no EmpresaControllers.getAllEmpresas:", error);
            throw error;
        }
    }
    async getListaEmpresas(req, res,) {
        let { idEmpresa } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            const apiUrl = `${url}/api/empresa.xsjs?id=${idEmpresa}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }

    async getAllGrupoEmpresarial(req, res,) {
        let { idEmpresa, pageNumber, dataPesquisa } = req.query;


        try {
            const response = await axios.get(`${url}/api/grupo-empresarial.xsjs`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }


    async getSelectLojaVouchers(req, res,) {
        let { idGrupoEmpresarial, pageNumber, dataPesquisa } = req.query;

        idGrupoEmpresarial = Number(idGrupoEmpresarial) ? idGrupoEmpresarial : '';

        try {
            const response = await axios.get(`${url}/api/empresa.xsjs?idSubGrupoEmpresa=${idGrupoEmpresarial}`)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }

    }
    async getById(req, res) {

    }

    async putListaEmpresas(req, res) {
        try {


            const { error, value } = updateEmpresaSchema.validate(req.body, {
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

            const response = await updateEmpresaService.updateEmpresa({

                STGRUPOEMPRESARIAL: value.STGRUPOEMPRESARIAL,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL: value.IDSUBGRUPOEMPRESARIAL,
                NORAZAOSOCIAL: value.NORAZAOSOCIAL,
                NOFANTASIA: value.NOFANTASIA,
                NUCNPJ: value.NUCNPJ,
                NUINSCESTADUAL: value.NUINSCESTADUAL,
                NUINSCMUNICIPAL: value.NUINSCMUNICIPAL,
                CNAE: value.CNAE,
                EENDERECO: value.EENDERECO,
                ECOMPLEMENTO: value.ECOMPLEMENTO,
                EBAIRRO: value.EBAIRRO,
                ECIDADE: value.ECIDADE,
                SGUF: value.SGUF,
                NUUF: value.NUUF,
                NUCEP: value.NUCEP,
                NUIBGE: value.NUIBGE,
                EEMAILPRINCIPAL: value.EEMAILPRINCIPAL,
                EEMAILCOMERCIAL: value.EEMAILCOMERCIAL,
                EEMAILFINANCEIRO: value.EEMAILFINANCEIRO,
                EEMAILCONTABILIDADE: value.EEMAILCONTABILIDADE,
                NUTELPUBLICO: value.NUTELPUBLICO,
                NUTELCOMERCIAL: value.NUTELCOMERCIAL,
                NUTELFINANCEIRO: value.NUTELFINANCEIRO,
                NUTELGERENCIA: value.NUTELGERENCIA,
                EURL: value.EURL,
                PATHIMG: value.PATHIMG,
                NUCNAE: value.NUCNAE,
                STECOMMERCE: value.STECOMMERCE,
                DTULTATUALIZACAO: value.DTULTATUALIZACAO,
                STATIVO: value.STATIVO,
                ALIQPIS: value.ALIQPIS,
                ALIQCOFINS: value.ALIQCOFINS,
                IDEMPRESA: value.IDEMPRESA

            });


            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no EmpresaControllers.putListaEmpresas:", error);
            res.status(500).json({ error: "Erro ao atualizar empresa" });
            throw error;
        }
    }
}

export default new EmpresaControllers();