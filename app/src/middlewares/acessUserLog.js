module.exports = (req, res, next) => {
    if(req.session.usuarioLogueado) {
        next();
    } else {
        res.redirect("/users/login")
    }
}