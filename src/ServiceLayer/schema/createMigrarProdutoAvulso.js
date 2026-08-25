import Joi from 'joi';

const createMigrarProdutoAvulsoSchema = Joi.object({
    IDDETALHEPRODUTOPEDIDO: Joi.number().required()
        .messages({
            'number.base': 'IDDETALHEPRODUTOPEDIDO deve ser um número',
            'any.required': 'IDDETALHEPRODUTOPEDIDO é obrigatório'
        })
});

export default createMigrarProdutoAvulsoSchema;
