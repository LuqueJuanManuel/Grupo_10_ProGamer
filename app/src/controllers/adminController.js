const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator")

const { readJSON, writeJSON } = require('../dataBase/');

const products = readJSON('products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports ={
    adminHome: (req, res) => {
        res.render("admin/adminHome",{
			products

		})
    },
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

    destroy: (req,res) => {
        let productId = Number(req.params,id);
        
        let newArrayProducts = products.filter(product => product.id !== productId);
        writeJSON('products.json',newArrayProducts);
        
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
            console.log(errors)
            return res.render("admin/adminAdd", {
                products,
                errors : errors.mapped(),
                old : req.body,
            })
        };

        /* Fin del condicional */
    }
        
}
