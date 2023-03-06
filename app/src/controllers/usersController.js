const { validationResult } = require("express-validator")
const {users} = require ('../dataBase');
/* requerimos bcrypt para hashear contraseñas */
const bcrypt = require("bcryptjs");

module.exports = {
    login : (req, res) => {
        return res.render("users/login",{session: req.session})
    },
    userHome: (req, res) => {
        return res.render("users/userHome")
    },
    userEdit: (req, res) => {
        return res.render("users/userEdit")
    },
    processLogin: (req,res) =>{
        //errors es igual a la validacion de errores //
        let errors = validationResult(req);
        
        console.log(errors)
        if (errors.isEmpty()){
            /* usuario logeado */
            let user = users.find(user => user.email === req.body.email);
            req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                category: user.category,
                address: user.address,
                avatar: user.avatar
            }
            /* crea para poder acceder a la variable */
            res.locals.user = req.session.user;
            res.redirect('/');

        }else{
            
            return res.render('users/login',{
                errors: errors.mapped()
                
            })
        }
        /* // si  form contiene errores //
        if(errors.isEmpty()){
            let usersJSON = fs.readFileSync("users.json", {encoding: "utf-8"});
            let users;
            if(usersJSON == ""){
                users = [];
            }else{
                users = JSON.parse(usersJSON);
            }
            // si lo encuentra al usuario //
            for (let i = 0;  i < users.length; i++) {
                if(users[i].email == req.body.email){
                   // si la contraseña lo verifica //
                    if(bcrypt.compareSync(req.body.password, users[i].password ))
                    usuarioLoguearse = users[i];
                                }
                            }
                        }
            if(usuarioLoguearse == undefined){
                return res.render("users/login", {errors:[
                    {msg: "credenciales invalidas"}
                ]});
            }

            req.session.usuarioLoguedo = usuarioLoguearse;
            res.render("success")
            //sino contiene errores // */
        },
        register : (req, res) => {
            res.render("users/register")
        },
        processRegister:(req, res) =>{
            
        },
    
     
}