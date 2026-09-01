import multer from 'multer';

const tiposPermitidos = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const fileFilter = (req, file, cb) => {
    if (tiposPermitidos.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Arquivo inválido. Envie apenas PDF ou imagem (JPEG, PNG, WEBP).'));
    }
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
});

export const uploadAnexo = {
    single: (fieldName) => (req, res, next) => {
        upload.single(fieldName)(req, res, (error) => {
            if (error) {
                return res.status(400).json({ message: error.message || 'Erro ao processar o arquivo enviado.' });
            }
            next();
        });
    }
};
