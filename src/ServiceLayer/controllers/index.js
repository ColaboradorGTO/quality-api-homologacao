import 'dotenv/config';
import { ServiceLayerService } from '../services/index.js';
import { ServiceLayerClient } from '../client/index.js';
import createMigrarProdutoAvulsoSchema from '../schema/createMigrarProdutoAvulso.js';
import createDepositoIntegracaoSchema from '../schema/createDepositoIntegracao.js';
import createAdiantamentoSalarialIntegracaoSchema from '../schema/createAdiantamentoSalarialIntegracao.js';
import createQuebraCaixaIntegracaoSchema from '../schema/createQuebraCaixaIntegracao.js';
import createPagamentoPixIntegracaoSchema from '../schema/createPagamentoPixIntegracao.js';
import createDespesaIntegracaoSchema from '../schema/createDespesaIntegracao.js';
import createVoucherIntegracaoSchema from '../schema/createVoucherIntegracao.js';

const url = process.env.API_URL;
const serviceLayerClient = new ServiceLayerClient(url);
const serviceLayerService = new ServiceLayerService(serviceLayerClient);

class ServiceLayerControllers {
    async postMigrarProdutoAvulso(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createMigrarProdutoAvulsoSchema.validate(dados, {
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

            const response = await serviceLayerService.createMigrarProdutoAvulso({
                IDDETALHEPRODUTOPEDIDO: value.IDDETALHEPRODUTOPEDIDO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postMigrarProdutoAvulso:', error);
            res.status(500).json({ error: 'Erro ao migrar produto avulso' });
            throw error;
        }
    }

    async postDepositoIntegrarNoSAP(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createDepositoIntegracaoSchema.validate(dados, {
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

            const response = await serviceLayerService.integrarDeposito({
                IDDEPOSITOLOJA: value.IDDEPOSITOLOJA
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postDepositoIntegrarNoSAP:', error);
            res.status(500).json({ error: 'Erro ao integrar depósito no SAP' });
            throw error;
        }
    }

    async postVoucher(req, res) {
        try {
            const { error } = createVoucherIntegracaoSchema.validate(req.body || {}, {
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

            const response = await serviceLayerService.createVoucher();

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postVoucher:', error);
            res.status(500).json({ error: 'Erro ao integrar voucher no SAP' });
            throw error;
        }
    }

    async postIntegrarAdiantamentoSalarial(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createAdiantamentoSalarialIntegracaoSchema.validate(dados, {
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

            const response = await serviceLayerService.createIntegrarAdiantamentoSalarial({
                IDADIANTAMENTOSALARIO: value.IDADIANTAMENTOSALARIO,
                IDFUNCIONARIO: value.IDFUNCIONARIO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postIntegrarAdiantamentoSalarial:', error);
            res.status(500).json({ error: 'Erro ao integrar adiantamento salarial no SAP' });
            throw error;
        }
    }

    async postIntegrarQuebraCaixaSAP(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createQuebraCaixaIntegracaoSchema.validate(dados, {
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

            const response = await serviceLayerService.createIntegrarQuebraCaixa({
                IDQUEBRACAIXA: value.IDQUEBRACAIXA,
                IDFUNCIONARIO: value.IDFUNCIONARIO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postIntegrarQuebraCaixaSAP:', error);
            res.status(500).json({ error: 'Erro ao integrar quebra de caixa no SAP' });
            throw error;
        }
    }

    async postIntegrarPagamentoPixSAP(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createPagamentoPixIntegracaoSchema.validate(dados, {
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

            const response = await serviceLayerService.createIntegrarPagamentoPix({
                IDVENDAPAGAMENTO: value.IDVENDAPAGAMENTO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postIntegrarPagamentoPixSAP:', error);
            res.status(500).json({ error: 'Erro ao integrar pagamento PIX no SAP' });
            throw error;
        }
    }

    async postIntegrarDespesaSAP(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body[0] : req.body;
            const { error, value } = createDespesaIntegracaoSchema.validate(dados, {
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

            const response = await serviceLayerService.createIntegrarDespesa({
                IDDESPESASLOJA: value.IDDESPESASLOJA,
                IDFUNCIONARIO: value.IDFUNCIONARIO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error('Erro no ServiceLayerControllers.postIntegrarDespesaSAP:', error);
            res.status(500).json({ error: 'Erro ao integrar despesa no SAP' });
            throw error;
        }
    }
}

export default new ServiceLayerControllers();
