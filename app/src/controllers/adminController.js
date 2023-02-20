const fs = require('fs');
const path = require('path');

const { readJSON, writeJSON } = require('../dataBase/');

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
          productToEdit,
          toThousand
        });
      },
      // Update - Method to update
      update: (req, res) => {
        let productID = +req.params.id;
        /* const images = req.files.map(file => file.filename); */

        products.forEach((product) => {
          if (product.id === productID) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.category = req.body.category;
            product.image = req.file ? req.file.filename : "default-image.png";
        };
          
        });
        writeJSON("products.json", products);
        res.redirect(200, "/");
      },
}
