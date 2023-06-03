const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { processLogin, login, register, processRegister, userHome, userEdit, userEditUpdate, logOut, userDestroy, googleLogin } = require("../controllers/usersController");
const { avatarUsers } = require("../middlewares/avatarUsers");
const registerValidator = require("../validations/registerValidator");
const userInSession = require("../middlewares/userInSession");
const loginValidator = require("../validations/loginValidator");
const userEditValidator = require('../validations/userEditValidator');
const sessionUserCheck = require("../middlewares/sessionUserCheck");
const userInSessionCheck = require("../middlewares/userInSessionCheck");
const passport = require('passport');
require('../middlewares/passportConfig')(passport);

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

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

/* ruta delete usuario */
router.delete('/userHome/delete/:id', userDestroy)

/* ruta a logOut */
router.get("/logOut", logOut)

// Ruta de inicio de sesión con Google
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] })
);
// Ruta de redireccionamiento después de iniciar sesión
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    googleLogin
);

module.exports = router;