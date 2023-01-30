const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

/* Ruta a Register */
router.get("/", controller.register);

/* Ruta a Login */
router.get("/login", controller.login);




module.exports = router;