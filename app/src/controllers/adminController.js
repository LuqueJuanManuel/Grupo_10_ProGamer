const fs = require('fs');
const path = require('path');

//const { readJSON, writeJSON } = require('../oldDataBase/');
/*  requiere express-validator*/
const { validationResult } = require("express-validator");


//const products = readJSON('products.json');
//const arrayDeCategorias = readJSON('categories.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Product, Product_category, Image, Banner } = require('../database/models');
const { log } = require('console');

module.exports = {
  adminHome: (req, res) => {
    Product.findAll()
      .then(products => {
        return res.render("admin/adminHome", {
          products,
          session: req.session,

        })
      })
      .catch(error => console.log(error))/* ok */
  },
  create: (req, res) => {
    const products = Product.findAll()
    const arrayDeCategorias = Product_category.findAll()
    Promise.all([products, arrayDeCategorias])
      .then(([products, arrayDeCategorias]) => {
        res.render('admin/adminAdd', {
          products,
          arrayDeCategorias,
          session: req.session,
        });
      })
      .catch(error => console.log(error))/* ok */

  },
  store: (req, res) => {
    const errors = validationResult(req);
    /*  let lastId = products[products.length - 1].id; */

    if (errors.isEmpty()) {

      let newProduct = {
        /* id : lastId + 1, */
        name: req.body.name,
        brand: req.body.brand,
        /* category : req.body.category, */
        lastname: req.body.lastname,
        price: req.body.price,
        discount: req.body.discount,
        stock: req.body.stock,
        description: req.body.description,
        cpu: req.body.cpu,
        graficCard: req.body.graficCard,
        so: req.body.so,
        ram: req.body.ram,
        capacity: req.body.capacity,
        puertos: req.body.puertos,
        hdmi: req.body.hdmi,
        ethernet: req.body.ethernet,
        usb: req.body.usb,
        wifi: req.body.wifi,
        webCam: req.body.webCam,
        bluetooth: req.body.bluetooth,
        screenSize: req.body.screenSize,
        display: req.body.display,
        resolution: req.body.resolution,
        Conection: req.body.Conection,
        weight: req.body.weight,
        high: req.body.high,
        width: req.body.width,
        depth: req.body.depth,
        product_category_id: req.body.category,
        /* image: req.files ? req.files.map(image => image.filename) : ["default-image.png"],  */
      };
      Product.create(newProduct)
        .then(product => {
          /* return  res.send(req.body.categoria) */
          if (req.files.length === 0) {
            Image.create({
              name: "default-image.png",
              products_id: product.id,
            }).then(() => {
              return res.redirect("/admin/home")
            });
          } else {
            const files = req.files.map(file => {
              return {
                name: file.filename,
                products_id: product.id
              }
            });
            Image.bulkCreate(files).then(() => {
              return res.redirect("/admin/home")
            });
          }
        })
        .catch(error => console.log(error))
    } else {
      const productId = req.body.id;

      const newProducts = Product.findAll();
      const arrayDeCategorias = Product_category.findAll();
      Promise.all([newProducts, arrayDeCategorias])
        .then(([product, arrayDeCategorias]) => {
          return res.render("admin/adminAdd", {
            product,
            arrayDeCategorias,
            errors: errors.mapped(),
            session: req.session,
            old: req.body,
          })
        })
        .catch(error => console.log(error))
    }

    /*      products.push(newProduct);

         writeJSON("products.json", products);

          */


    /* Fin del condicional */
  },
  edit: (req, res) => {

    const productId = +req.params.id;
    const PRODUCT_TO_EDIT = Product.findByPk(productId);
    const CATEGORIES = Product_category.findAll();

   Promise.all([PRODUCT_TO_EDIT, CATEGORIES])
      .then(([product, arrayDeCategorias]) => {
        return res.render("admin/adminEdit", {
          product,
          arrayDeCategorias,
          session: req.session,
          toThousand
        });
      })


  },
  // Update - Method to update
  update: (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {


      const productID = +req.params.id;

      let product = Product.update(
        {
          name: req.body.name,
          brand: req.body.brand,
          lastname: req.body.lastname,
          price: req.body.price,
          discount: req.body.discount,
          stock: req.body.stock,
          description: req.body.description,
          cpu: req.body.cpu,
          graficCard: req.body.graficCard,
          so: req.body.so,
          ram: req.body.ram,
          capacity: req.body.capacity,
          puertos: req.body.puertos,
          hdmi: req.body.hdmi,
          ethernet: req.body.ethernet,
          usb: req.body.usb,
          wifi: req.body.wifi,
          webCam: req.body.webCam,
          bluetooth: req.body.bluetooth,
          screenSize: req.body.screenSize,
          display: req.body.display,
          resolution: req.body.resolution,
          conection: req.body.conection,
          high: req.body.high,
          weight: req.body.weight,
          width: req.body.width,
          depth: req.body.depth,
          product_category_id: req.body.category,
        },
        {
          where: { id: productID }
        }).then(() => {
          return res.redirect("/admin/home")
        })
        .catch(error => console.log(error))
    } else {
      const productId = req.params.id;

      const PRODUCT_TO_EDIT = Product.findByPk(productId);
      const CATEGORIES = Product_category.findAll()


      Promise.all([PRODUCT_TO_EDIT, CATEGORIES])
        .then(([product, arrayDeCategorias]) => {
          return res.render("admin/adminEdit", {
            product,
            arrayDeCategorias,
            session: req.session,
            errors: errors.mapped(),
            toThousand
          });
        })
        .catch(error => console.log(error))
      /* if (req.file) {
      return res.render("admin/adminEdit", {
        product,
        
      }
    )} */
    }
  },
  /* let productModify =  {
                 ...product,
                 name: name.trim(),
                 price: +price,
                 discount: +discount,
                 category,
                 brand,
                 stock: +stock,
                 description: description.trim(),
                 lastname,
                 cpu,
                 graficCard,
                 so,
                 ram,
                 capacity,
                 puertos,
                 hdmi,
                 ethernet,
                 usb,
                 wifi,
                 webCam,
                 bluetooth,
                 screenSize,
                 display,
                 resolution,
                 conection,
                 high,
                 weight,
                 width,
                 depth,
                 product_category_id,
                 image: req.files ? req.files.map(image => image.filename) : ["default-image.png"],
             }; */
  /*   if (req.files) {
        fs.existsSync(`./public/images/products/${product.image}`) &&
          fs.unlinkSync(`./public/images/products/${product.image}`);
      } */






  destroy: (req, res) => {
    let productId = Number(req.params.id);

    Image.destroy({
      where: {
        products_id: productId
      }
    })
    
    Product.destroy({
      where: {
        id: productId
      }
    })
      .then(() => {
        res.redirect("/admin/home");
      })

    /* products.forEach(product => {
      if(product.id === productId){
        let newArrayProducts = products.indexOf(product);
        products.splice(newArrayProducts, 1)
      }
    }) */

  },



}
