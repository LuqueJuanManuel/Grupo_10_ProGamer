module.exports = (req, res, next) => {
    if(req.session.usuarioLogueado === undefined) {
        next()
    } else {
        res.send("Ya estas logueado")
    }
}