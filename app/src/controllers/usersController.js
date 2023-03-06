/* requerir validaciones de usuarios */
const { validationResult } = require("express-validator");
/* requerir database de usuarios */
const { users , writeJSON, readJSON } = require("../database");
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
            res.render("users/register", {session: req.session})
            
        },
        processRegister:(req, res) =>{
            /* agregando errores de validaciones */
            let errors = validationResult(req);
            /* si no hay errores */
            if(errors.isEmpty()) {
                let lastId = 0;
                /* si en la lista de usuarios el ultimo usuario es menor dele el valor de id que trae usuario */
                users.forEach(user => {
                 if(user.id > lastId) {
                     lastId = user.id;
                 }
                });
                    /* creando un nuevo usuario */
                let newUser = {
                    /* dale el id del ultimo usuario + 1 */
                 id: lastId + 1,
                 name: req.body.name,
                 lastname: req.body.lastname,
                 email: req.body.email,
                 pass: bcrypt.hashSync(req.body.pass, 10),
                 avatar: req.file ? req.file.filename : "default-image.png",
                 category: "USER",
                 address: "",
                 city: "" 
                };
         
                users.push(newUser);
         
                writeJSON("users.json", users);
         
                res.redirect("/users/login");
            } else {
                res.render("users/register", {
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            }  
        },
    
     
}