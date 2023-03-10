const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { processLogin, login, register, processRegister, userHome, userEdit, userEditUpdate, logOut } = require("../controllers/usersController");
const { avatarUsers } = require("../middlewares/avatarUsers");
const registerValidator = require("../validations/registerValidator");
const userInSession = require("../middlewares/userInSession");
const loginValidator = require("../validations/loginValidator");
const userEditValidator = require('../validations/userEditValidator');
const sessionUserCheck = require("../middlewares/sessionUserCheck");
const userInSessionCheck = require("../middlewares/userInSessionCheck");

// Ruta a Login //
router.get("/login", sessionUserCheck, login);

/* post login user */
router.post("/login", loginValidator,  processLogin);

/* Ruta a Register */
router.get("/register", sessionUserCheck, register);

/* ruta a post register */
router.post("/register", avatarUsers.single("avatar"), registerValidator, processRegister);

/* pre visualizacion de las vistas  */
router.get('/userHome', userInSessionCheck, userHome);

/* get edit form */
router.get('/userHome/userEdit', userInSessionCheck, userEdit);

/* put user edit update */
router.put('/userHome/userEdit',avatarUsers.single("avatar"),userEditValidator, userInSessionCheck, userEditUpdate)

/* ruta a logOut */
router.get("/logOut", logOut)

module.exports = router;