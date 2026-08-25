import Joi from 'joi';

const consultarConfiguracaoPixPDVSchema = Joi.object({
    idEmpresa: Joi.alternatives()
        .try(
            Joi.number().integer().positive(),
            Joi.string().trim().allow('')
        )
        .default('')
        .messages({
            'alternatives.types': 'idEmpresa deve ser um número válido.'
        })
});

export default consultarConfiguracaoPixPDVSchema;
