const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

/* create */
router.get('/create', controller.create);
/* router.post('/', controller.store); */

/* edit */


module.exports = router;