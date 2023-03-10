 /* Si el usuario tiene iniciada session: no lo deja entrar lo redirije a la Home */
 /* En caso de que no tenga Sesion, lo deja pasar */
 /* Middleware para implementar en login y register */
 
module.exports = (req, res, next) =>  req.session.user ? res.redirect("/") : next();