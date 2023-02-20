const { check } = require("express-validator");

module.exports = [
    check("name")
    .notEmpty().withMessage("El nombre es obligatorio").bail()
    .isLength({ min: 3, max: 20 }).withMessage("El nombre debe tener entre 3 y 20 caracteres"),

check("category")
    .notEmpty().withMessage("Debes indicar la categoría"),

check("brand")
    .notEmpty().withMessage("Debes indicar la marca"),

check("description")
    .notEmpty().withMessage("La descripción es obligatoria").bail()
    .isLength({ min: 5}).withMessage("La descripción debe tener mínimo 20 caracteres"),

check("price")
    .isInt({min:1}).withMessage("Debes indicar un precio"),

check("discount")
    .isInt({min:0,max:99}).withMessage("El descuento no puede ser más del 100%")
]