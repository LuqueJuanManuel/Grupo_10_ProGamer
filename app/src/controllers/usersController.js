/* requerir validaciones de usuarios */
const { validationResult } = require("express-validator");
/* requerir database de usuarios */
/*  const { users , writeJSON, readJSON } = require("../oldDatabase/index");  */
/* requerimos bcrypt para hashear contraseñas */
const bcrypt = require("bcryptjs");
const { Image , Sequelize , User , User_category } = require('../database/models');


module.exports = {
    login : (req, res) => {
        return res.render("users/login",{session: req.session})
    },
    userHome: (req, res) => {
        let userSessionID = req.session.user.id;
        
        User.findByPk(userSessionID, {
            include:[{association: "user_categories"}]
        })
        .then(user =>{
            return res.render("users/userHome",{
                user ,
                session: req.session})
        })
        .catch(error => console.log(error))
        
    },
    userEdit: (req, res) => {
        let userSessionID = req.session.user.id;
        /* let userSession = users.find(user => user.id === userSessionID); */
        User.findByPk(userSessionID)
        .then(user => {
            return res.render("users/userEdit",{
                user: user,
                session:req.session
            })
        })
        .catch(error => console-log(error));

        
    },
    userEditUpdate: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let userId = req.session.user.id;
            

            const {name, lastname, address, city, postalCode, tel} = req.body

            
            User.update({
            name : name,
            lastname : lastname,
            address : address,
            city : city,
            postalCode : postalCode,
            tel : tel,
            avatar : req.file ? req.file.filename : avatar,
            },
            {
               where: {id: userId} 
            })
            .then(user =>{
                req.session.user = user;
            return res.redirect('/users/userHome');
            })
            .catch(error => console.log(error))  
        }else{
            let userSessionID = req.session.user.id;
            /* let userSession = users.find(user => user.id === userSessionID); */
            User.findByPk(userSessionID)
            .then(user =>{
                return res.render("users/userEdit",{
                    user,
                    session:req.session,
                    errors: errors.mapped()
                })
            })

            
        }
        

    },
    processLogin: (req,res) =>{
        //errors es igual a la validacion de errores //
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            /* usuario logeado */
            User.findOne({
                where:{
                    email:req.body.email,
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    category: user.category,
                    address: user.address,
                    avatar: user.avatar,
                    city: user.city,
                    postalCode:user.postalCode,
                    tel: user.tel
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

            })
            .catch(error => console.log(error))
        }else{
            
            return res.render('users/login',{
                errors: errors.mapped(),
                session: req.session
                
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
              
                    /* creando un nuevo usuario */
                let newUser = {
                    /* dale el id del ultimo usuario + 1 */
                 name: req.body.name,
                 lastname: req.body.lastname,
                 email: req.body.email,
                 pass: bcrypt.hashSync(req.body.pass, 10),
                 avatar: req.file ? req.file.filename : "default-image.png",
                 address: "",
                 city: "" ,
                 postalCode:"",
                 tel:"", 
                 user_category: 0
                  
                };
         
                User.create(newUser /* {
                    include:[{association: "user_categories"}]
                } */)
                .then(() =>{
                    return res.redirect("/users/login");
                })
                .catch(error => console.log(error))
            
            } else {
                res.render("users/register", {
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            }  
        },
        logOut: (req, res) => {
            req.session.destroy();
            if (req.cookies.proGamer) {
                res.cookie("proGamer", "", {maxAge: -1})
            }
            res.redirect("/");
            
        },
    
     
}