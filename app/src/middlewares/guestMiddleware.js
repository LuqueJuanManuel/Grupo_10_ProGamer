 /* middleware acceso  para usuarios  no logueados */
 module.exports = {
    guestMiddleware:
    (req,res,next)=>{
     if(req.session.usuarioLogueado == undefined ){
         next();
     }else{
        res.send("esta pagina es solo para usuarios")
     }
    }
} 