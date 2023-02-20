const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { uploadImageProduct } = require("../middlewares/upload")
/* validacion de edicion de productos */
const productEditValidator = require('../validations/productEditValidator');

/* create */
router.get('/create', controller.create);
/* router.post('/', controller.store); */

/* edit */
router.get('/edit/:id', controller.edit);

router.put('/edit/:id', uploadImageProduct.single("image") , productEditValidator, controller.update);

module.exports = router;