/* checkea si el usuario esta en sesion */
/* Este middleware: si el usuario esta en session lo deja pasar/entrar, si no esta logueado lo redirije al Login */
module.exports = (req, res, next) => req.session.user ? next() : res.redirect("/users/login");