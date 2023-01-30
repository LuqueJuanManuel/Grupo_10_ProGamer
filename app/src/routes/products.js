const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

/* Ruta a ProductDetail */
router.get("/", controller.productDetail); 

/* Ruta a ProductCart */
router.get("/productCart", controller.productCart)




module.exports = router;