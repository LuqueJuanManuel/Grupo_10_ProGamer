const {check} = require('express-validator');

module.exports =[
    check('user_category')
    .notEmpty().withMessage('El rol es obligatorio')
    .isInt().withMessage('El valor del rol debe ser un número entero')
    .isIn([0, 1, 2]).withMessage('El valor del rol debe estar entre 0 y 2')
];