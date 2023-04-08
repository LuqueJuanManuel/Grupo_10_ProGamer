const {check} = require("express-validator");

module.exports = [
/* si la vadilacion falla tira el siguiente mensaje */
    check("name")
    .notEmpty().withMessage("el nombre es obligatorio").bail()
    .isLength({min:3,max:20}).withMessage("el nombre debe tener entre 3 y 20 caracteres"),
    check("category").notEmpty().withMessage("debe ingresar una categoria"),
    check("brand")
    .notEmpty().withMessage("debe ingresar una marca"),
    check("description")
    .notEmpty().withMessage("la descripcion es obligatoria").bail()
    .isLength({min:5}).withMessage("la descripcion debe tener un minimo de 5 caracteres"),
    check("price")
    .isInt({min:1}).withMessage("no se puede regalar el producto"),
    check("discount")
    .isLength({min:0, max:99}).withMessage("el descuento no puede ser del 100%"),
    check("stock")
    .notEmpty().isInt({min:1}).withMessage("el stock es obligatorio")
];