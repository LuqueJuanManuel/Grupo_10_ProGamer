const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { uploadImageProduct } = require("../middlewares/upload")

/* create */
router.get('/create', controller.create);
/* router.post('/', controller.store); */

/* edit */
router.get('/edit/:id', controller.edit);

router.put('/edit/:id', uploadImageProduct.single("image") , controller.update);

module.exports = router;