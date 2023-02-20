const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { uploadImageProduct } = require("../middlewares/upload");
const productsAddValidator = require("../validations/productsAddValidator");

/* Home */
router.get('/home', controller.adminHome);


/* create */
router.get('/create', controller.create);

router.post('/create', uploadImageProduct.array("images"), productsAddValidator, controller.store)



/* edit */
router.get('/edit/:id', controller.edit);

router.put('/edit/:id', uploadImageProduct.single("image") , controller.update);



/* DELETE */
router.delete('/delete/:id', controller.destroy);

module.exports = router;