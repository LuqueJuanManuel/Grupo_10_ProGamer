const fs = require('fs');
const path = require('path');

const { readJSON, writeJSON } = require('../dataBase/');
/*  requiere express-validator*/
const { validationResult } = require("express-validator");

const products = readJSON('products.json');
const arrayDeCategorias = readJSON('categories.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports ={
    adminHome: (req, res) => {
        res.render("admin/adminHome",{
			products

		})
    },
    create: (req, res) => {
        res.render('admin/adminAdd' , {
          products,
          arrayDeCategorias,
        });
    },
    edit: (req, res) => {
      
        let productToEdit = products.find(
          (product) => product.id == +req.params.id);
    
        res.render("admin/adminEdit", {
          ...productToEdit,
          toThousand
        });
      },
      // Update - Method to update

      update: (req, res) => {
        
          const errors = validationResult(req);

          if(req.fileValidatorError){
            errors.errors.push({
                value: "",
                msg: req.fileValidatorError,
                param: "image",
                location: "file",
            });
        }

        if(errors.isEmpty()){
            const { name, price, category,description, discount, brand, stock } = req.body;
            
            const productsModify =products.map((product) => { 
            if(product.id === +req.params.id){
            let productModify =  {
                        ...product,
                        name: name.trim(),
                        price: +price,
                        discount: +discount,
                        category,
                        brand,
                        stock: +stock,
                        description: description.trim(),
                        image: req.files ? req.files.map(image => image.filename) : ["default-image.png"],
                    };
                  /*   if (req.files) {
                        fs.existsSync(`./public/images/products/${product.image}`) &&
                          fs.unlinkSync(`./public/images/products/${product.image}`);
                      } */
                      return productModify;
            }
                return product;
            });

     writeJSON("products.json", productsModify);

      return res.redirect( 200, "/admin/home");
    } else {
        const products = readJSON("products.json");
        const product = products.find((product) => product.id === +req.params.id);
      if (req.file) {
        fs.existsSync(`./public/images/products/${req.file.filename}`) &&
          fs.unlinkSync(`./public/images/products/${req.file.filename}`);
      }

      return res.render("admin/adminEdit", {
        ...product,
        errors: errors.mapped(),
        old: req.body,
        toThousand
      });
    }
  },     
    
    destroy: (req,res) => {
        let productId = Number(req.params.id);
        
        products.forEach(product => {
          if(product.id === productId){
            let newArrayProducts = products.indexOf(product);
            products.splice(newArrayProducts, 1)
          }
        })
        writeJSON('products.json',products);
        res.redirect("/admin/home");
    },

    store: (req, res) => {

        const errors = validationResult(req);
        let lastId = products[products.length - 1].id;
       
        if(errors.isEmpty()) {


            let newProduct = {
                id : lastId + 1,
                name : req.body.name,
                brand : req.body.brand,
                category : req.body.category,
                lastname : req.body.lastname,
                price : req.body.price,
                discount : req.body.discount,
                stock: req.body.stock,
                description : req.body.description,
                cpu : req.body.cpu,
                graficCard : req.body.graficCard,
                so : req.body.so,
                ram : req.body.ram,
                capacity : req.body.capacity,
                puertos : req.body.puertos,
                hdmi : req.body.hdmi,
                ethernet : req.body.ethernet,
                usb : req.body.usb,
                wifi : req.body.wifi,
                webCam : req.body.webCam,
                bluetooth : req.body.bluetooth,
                screenSize : req.body.screenSize,
                display : req.body.display,
                resolution : req.body.resolution,
                Conection : req.body.Conection,
                weight : req.body.weight,
                high : req.body.high,
                width : req.body.width,
                depth : req.body.depth,
                image: req.files ? req.files.map(image => image.filename) : ["default-image.png"],
            };

            products.push(newProduct);

            writeJSON("products.json", products);

            res.redirect("/products")
        }
        else {
            return res.render("admin/adminAdd", {
                products,
                arrayDeCategorias,
                errors : errors.mapped(),
                old : req.body,
            })
        };

        /* Fin del condicional */
    }
        
}
