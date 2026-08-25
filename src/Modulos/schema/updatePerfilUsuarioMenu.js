import Joi from 'joi';
import perfilUsuarioMenuFields from './perfilUsuarioMenuFields.js';

const updatePerfilUsuarioMenuSchema = Joi.object({
    ...perfilUsuarioMenuFields,
    IDMENUFILHO: Joi.number().required()
});

export default updatePerfilUsuarioMenuSchema;
