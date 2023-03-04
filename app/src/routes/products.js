/* Requires */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const { uploadImageProduct } = require('../middlewares/upload');

/* Ruta a Products */
router.get("/", controller.index);

/* Ruta a ProductDetail */
router.get("/productDetail/:id", controller.productDetail); 

/* Ruta a categorias */

router.get("/categories/:id", controller.categories);

/* Ruta a ProductCart */
router.get("/productCart", controller.productCart);

/* Ruta a Search */

router.get("/search", controller.search);






module.exports = router;