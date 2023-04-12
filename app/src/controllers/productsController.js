/* Requires */
/* const { readJSON, writeJSON } = require('../dataBase/');
const products = readJSON('products.json');
const categories = readJSON('categories.json');*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
const {Product, Product_category, Banner} = require ('../database/models');

module.exports = {
    index: (req, res) => {
        const products =Product.findAll({
            include:[{ association: 'images'}]
        })
        const categories = Product_category.findAll()
        const banner = Banner.findAll()
        Promise.all([products, categories, banner])
        .then(([products, categories, banner])=>{
            /* console.log(products)
            res.send(products) */
            res.render("products/products", {
                products,
                categories,
                session: req.session,
                toThousand,
            }) 
        })
        /* res.render("products/products", {
            products,
            categories,
            session: req.session,
            toThousand,
        }) */
    },

    productDetail : (req, res) => {
        
        const product = products.find(product => product.id === +req.params.id);
        const productosEnOferta = products.filter(product => product.discount >= 20);
        
        return res.render("products/productDetail", {
            product,
            productosEnOferta,
            session: req.session,
            toThousand,
        })

    },

    productCart : (req, res) => {
        return res.render("products/productCart",{session: req.session})
    },

    search: (req, res) => {
        const { keywords } = req.query;
        let results = [];

        products.forEach(product => {
			if(product.name.toLowerCase().includes(keywords.toLowerCase())) {
				results.push(product)
			}
		});

       res.render("products/search", {
        keywords,
        toThousand,
        results,
        products,
        session: req.session,
       })
    },
    categories: (req,res) => {
        
    }
}