const { check } = require("express-validator");

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

    check("lastname")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),

    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Email inválido"),
]