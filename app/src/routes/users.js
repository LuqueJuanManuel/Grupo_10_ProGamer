const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { processLogin, login, register, processRegister, userHome, userEdit } = require("../controllers/usersController");
const { avatarUsers } = require("../middlewares/avatarUsers");
const registerValidator = require("../validations/registerValidator");
const userInSession = require("../middlewares/userInSession");
 

// Ruta a Login //
router.get("/login",  login);

/* post login user */
router.post("/login",  processLogin);

/* Ruta a Register */
router.get("/register", register);

/* ruta a post register */
router.post("/register", avatarUsers.single("avatar"), registerValidator, processRegister);

/* pre visualizacion de las vistas  */
router.get('/userHome', userHome);

router.get('/userHome', userEdit);

module.exports = router;