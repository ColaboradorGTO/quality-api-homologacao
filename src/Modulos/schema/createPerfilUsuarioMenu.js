import Joi from 'joi';
import perfilUsuarioMenuFields from './perfilUsuarioMenuFields.js';

const createPerfilUsuarioMenuSchema = Joi.object(perfilUsuarioMenuFields);

export default createPerfilUsuarioMenuSchema;
