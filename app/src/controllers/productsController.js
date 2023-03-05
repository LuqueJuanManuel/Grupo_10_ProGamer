/* Requires */
const { readJSON, writeJSON } = require('../dataBase/');

const products = readJSON('products.json');
const categories = readJSON('categories.json');
console.log(categories);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {

        res.render("products/products", {
            products,
            categories,
            toThousand,
        })
    },

    productDetail : (req, res) => {
        
        const product = products.find(product => product.id === +req.params.id);
        const productosEnOferta = products.filter(product => product.discount >= 20);
        
        return res.render("products/productDetail", {
            product,
            productosEnOferta,
            toThousand,
        })

    },

    productCart : (req, res) => {
        return res.render("products/productCart")
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
       })
    },
    categories: (req,res) => {
        
    }
}