const {check, body} = require ('express-validator');
/* const {users} = require ('../dataBase'); */
const bcrypt = require ('bcryptjs');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debe ingresar un email').bail()
    .isEmail()
    .withMessage("Email inválido"),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value);
        return user !== undefined;
    })
    .withMessage('El email no esta registrado'),

    check('pass')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        let user = users.find(user => user.email === req.body.email);
        return bcrypt.compareSync(value, user.pass);
        /* return user.pass === value; */
    })
    .withMessage('contraseña invalida')
]