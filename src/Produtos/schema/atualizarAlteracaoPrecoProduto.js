import Joi from 'joi';

const schemaAtualizarAlteracaoPrecoProduto = Joi.object({
    IDRESUMOALTERACAOPRECO: Joi.number().required()
        .messages({
            'any.required': 'IDRESUMOALTERACAOPRECO é obrigatório',
            'number.base': 'IDRESUMOALTERACAOPRECO deve ser um number'
        }),
    STAGENDAMENTOIMEDIATO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    STAGENDAMENTOPERSONALIZADO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    DTAGENDAMENTOPERSONALIZADO: Joi.string().allow('', null),
    STATIVO: Joi.string().allow('', null)
});

export default schemaAtualizarAlteracaoPrecoProduto;
