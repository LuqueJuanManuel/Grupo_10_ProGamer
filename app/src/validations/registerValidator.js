/* para la validaciones requerir express-validator */
const { check, body } = require("express-validator");
/* const { users }  = require("../database"); */
const { User } = require("../database/models")

module.exports = [
    /* nombre requerido */
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({
        min: 2,
    }).withMessage("El nombre tiene que tener mas de 2 caracteres"),
     /* apellido requerido */
    check("lastname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({
        min: 2,
    }).withMessage("El nombre tiene que tener mas de 2 caracteres"),
    /* email requerido */
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Email inválido"),
    /* el email no tiene que estar registrado previamente */
    body("email")
    .custom((value) => {
       return User.findOne({
            where:{
                email:value
            }
        })
    .then(user =>{
        if(user) return Promise.reject("email ya registrado")
    })
    .catch(error => console.log(error))
}),
    /* contraseña obligatoria */
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail()
    .isLength({
        min: 8,
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteres'),
    
    /* considencia de contraseñas */
    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')
   
]