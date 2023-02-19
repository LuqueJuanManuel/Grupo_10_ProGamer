/* Requires */
const { readJSON, writeJSON } = require('../dataBase/');

const products = readJSON('products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {

        res.render("products/products", {
            products,
            toThousand,
        })
    },

    productDetail : (req, res) => {
        return res.render("products/productDetail")
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
    }
}