const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../dataBase/products.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const writeJson = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products), {encoding:"utf8"})
}

module.exports ={
    create: (req, res) => {
        res.render('admin/adminAdd');
    },
    edit: (req, res) => {
		let productId = +req.params.id;
	    let productToEdit = products.find(product => product.id === productId);
		res.render("admin/adminEdit", {
			...productToEdit,
		})
	},
            update: (req,res)=>{
                let productId = +req.params.id;
                
                products.forEach(product => {
                    if(product.id === productId){
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.category = req.body.category;
                        product.description = req.body.description;
                        product.discount = req.body.discount;
                        product.image = req.file.filename.image;
        
                    }
                });
                writeJson(products);
                res.redirect("/products/")
            },
        };
        