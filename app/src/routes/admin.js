const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

/* Home */
router.get('/home', controller.adminHome);


/* create */
router.get('/create', controller.create);
/* router.post('/', controller.store); */

/* edit */
router.get('/edit', controller.edit);
//router.put('/edit/:id', controller.update);



/* DELETE */
router.delete('/delete/:id', controller.destroy);

module.exports = router;