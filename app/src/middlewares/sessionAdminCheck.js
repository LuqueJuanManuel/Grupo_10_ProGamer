/* Si el usuario no tiene iniciada la session lo redirije a Login */
/* Si el usuario no tiene un rol Admin, lo manda a la Home */

module.exports = (req, res, next) => {
    if(!req.session.user) return res.redirect("/users/login");
    const category = req.session.user.category ;
    if(category !== 1 && category !== 3 ) return res.redirect("/");
    next();
}