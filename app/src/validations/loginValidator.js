const {check, body} = require ('express-validator');
 const {User} = require ('../database/models'); 
const bcrypt = require ('bcryptjs');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debe ingresar un email').bail()
    .isEmail()
    .withMessage("Email inválido"),
    
    check('pass')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        return User.findOne({
            where:{
                email: req.body.email,
            }
        })
        .then(user =>{
            if(!bcrypt.compareSync(value, user.dataValues.pass)){
                return Promise.reject();
            }
        })
        .catch(() => Promise.reject("email o contraseña incorrecto"))
        
    }),
]