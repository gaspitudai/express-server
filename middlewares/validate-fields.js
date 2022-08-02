const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next(); // le dice que siga con otro middleware si no hay error, si no hay mas middlewares sigue con el controlador

}

module.exports = {
    validateFields
}