const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeJson = (productos) => {
	fs.writeFileSync(productsFilePath, JSON.stringify(products) , 'utf-8')
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports ={
    create: (req, res) => {
        res.render('admin/adminAdd');
    },
    edit: (req, res) => {
        res.render('admin/adminEdit');
    },
    edit: (req, res) => {
        let productToEdit = products.find(
          (product) => product.id == +req.params.id
        );
    
        res.render("admin/adminEdit.ejs", {
          productToEdit,
        });
      },
      // Update - Method to update
      update: (req, res) => {
        let productID = Number(req.params.id);
        products.forEach((product) => {
          if (product.id === productID) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.discount = req.body.discount;
            product.category = req.body.category;
          }
        });
        writeJSON(products);
        res.redirect("/products/");
      },
    
}