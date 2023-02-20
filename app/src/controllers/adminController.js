const fs = require('fs');
const path = require('path');

const { readJSON, writeJSON } = require('../dataBase/');
/*  requiere express-validator*/
const { validationResult } = require("express-validator");

const products = readJSON('products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports ={
    create: (req, res) => {
        res.render('admin/adminAdd');
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
                            image: req.file ? req.file.filename : product.image,
                    };
                    if (req.file) {
                        fs.existsSync(`./public/images/products/${product.image}`) &&
                          fs.unlinkSync(`./public/images/products/${product.image}`);
                      }
                      return productModify;
            }
                return product;
            });

     writeJSON("products.json", productsModify);

      return res.redirect("/");
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
      });
    }
  },
}