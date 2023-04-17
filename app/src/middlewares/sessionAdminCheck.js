/* Si el usuario no tiene iniciada la session lo redirije a Login */
/* Si el usuario no tiene un rol Admin, lo manda a la Home */

module.exports = (req, res, next) => {
    if(!req.session.user) return res.redirect("/users/login");
    if(req.session.user.category !== 1 ) return res.redirect("/");
    next();
}