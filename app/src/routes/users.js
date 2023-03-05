const express = require("express");
const { check } = require("express-validator");
const { processLogin } = require("../controllers/usersController");
const router = express.Router();
const controller = require("../controllers/usersController");
const autMiddleware = require("../middlewares/autMiddleware");
/*  */
const guestMiddleware = require("../middlewares/guestMiddleware");

/* post login user */
router.post("/login", processLogin);

/* Ruta a Register */ //
router.get("/register", controller.register);

// Ruta a Login //
/* router.get("/login", autMiddleware , controller.login);

router.post("/login", [
   check("email").isEmail(),
   check("password").isLength({min:8}).withMessage("la contraseña debe tener mas de 8 caracteres") 
]
, controller.processLogin)

 */


module.exports = router;