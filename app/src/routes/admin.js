const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { uploadImageProduct } = require("../middlewares/upload");
const productsAddValidator = require("../validations/productsAddValidator");
const sessionAdminCheck = require("../middlewares/sessionAdminCheck")
const adminRolValidator = require('../validations/adminRolValidator');

/* Home */
router.get('/home', sessionAdminCheck, controller.adminHome);

/* validacion de edicion de productos */
const productEditValidator = require("../validations/productsEditValidator");

/* create */
router.get('/create', sessionAdminCheck, controller.create);

router.post('/create', uploadImageProduct.array("image"), productsAddValidator, controller.store)



/* edit */
router.get('/edit/:id', sessionAdminCheck, controller.edit);

router.put('/edit/:id', uploadImageProduct.array("image") , productEditValidator, controller.update);



/* DELETE */
router.delete('/delete/:id', controller.destroy);
/* Users */
router.get('/home/roledit', controller.UserRol);
router.put('/home/roledit/:id',adminRolValidator, controller.UserRolEdit);

module.exports = router;