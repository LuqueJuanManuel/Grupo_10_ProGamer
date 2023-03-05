module.exports = (req, res, next) => {
    if(req.cookies.proGamer && !req.session.user) {
        req.session.user = req.cookies.proGamer;
        res.locals.user = req.session.user;
    }
    next();
}