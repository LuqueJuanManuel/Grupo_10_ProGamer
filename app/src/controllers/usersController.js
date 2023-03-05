const { validationResult } = require("express-validator")
/* requerimos bcrypt para hashear contraseñas */
const bcrypt = require("bcryptjs");

module.exports = {
    login : (req, res) => {
        return res.render("users/login")
    },
    processLogin: (req,res) =>{
        //errors es igual a la validacion de errores //
        let errors = validationResult(req);
        // si  form contiene errores //
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
            //sino contiene errores //
        },
        register : (req, res) => {
            res.render("users/register")
        },
        processRegister:(req, res) =>{
            
        },
    
     
}