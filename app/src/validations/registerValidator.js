/* para la validaciones requerir express-validator */
const { check, body } = require("express-validator");
const { users } = require("../database/users.json");
const bcrypt = require("bcryptjs");

module.exports = [
    /* nombre requerido */
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
     /* apellido requerido */
    check("lastname")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),
    /* email requerido */
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Email inválido"),
    /* el email no tiene que estar registrado previamente */
    body("email")
    .custom((value) => {
        let user = users.find(user => user.email === value);

        return user === undefined;
    })
    .withMessage("Email ya registrado"),
    
    /* contraseña obligatoria */
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail()
    .isLength({
        min: 6,
    })
    .withMessage('La contraseña debe tener como mínimo 6 caracteres'),
    /* considencia de contraseñas */
    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')
   
]