module.exports = (req, res, next) => {
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.category == admin) {
        next()
    } else {
        res.redirect("/");
    }
}