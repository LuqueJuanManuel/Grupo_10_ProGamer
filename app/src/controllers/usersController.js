/* requerir validaciones de usuarios */
const { validationResult } = require("express-validator");
/* requerir database de usuarios */
const { users , writeJSON, readJSON } = require("../database/index");
/* requerimos bcrypt para hashear contraseñas */
const bcrypt = require("bcryptjs");

module.exports = {
    login : (req, res) => {
        return res.render("users/login",{session: req.session})
    },
    userHome: (req, res) => {
        return res.render("users/userHome",{session: req.session})
    },
    userEdit: (req, res) => {
        return res.render("users/userEdit",{session: req.session})
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
                avatar: user.avatar,
                city: user.city
            }
            /* tiempo de duracion - 1 hora */
            let times = 3600000;

            /* cookie para mantener la cuenta abierta */

            if (req.body.check){
                res.cookie(
                    'proGamer',
                    req.session.user,
                    {
                        expires: new Date(Date.now() + times),
                        httpOnly: true
                    }
                )
            }
            
            /* crea para poder acceder a la variable */
            res.locals.user = req.session.user;
            res.redirect('/');

        }else{
            
            return res.render('users/login',{
                errors: errors.mapped()
                
            })
        }

        },
        register : (req, res) => {
            res.render("users/register", {session: req.session})
            
        },
        processRegister:(req, res) =>{
            /* agregando errores de validaciones */
            let errors = validationResult(req);
            
            /* si no hay errores */
            if(errors.isEmpty()){
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