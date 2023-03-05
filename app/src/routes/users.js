const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { processLogin, login, register, processRegister } = require("../controllers/usersController");
const { avatarUsers } = require("../middlewares/avatarUsers")
const registerValidator = require("../validations/registerValidator")
const autMiddleware = require("../middlewares/autMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
 

// Ruta a Login //
router.get("/login",  login);

/* post login user */
router.post("/login", registerValidator,  processLogin);

/* Ruta a Register */
router.get("/register", register);

/* ruta a post register */
router.post("/register", avatarUsers.single(), registerValidator, processRegister);

module.exports = router;