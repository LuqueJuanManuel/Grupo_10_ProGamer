/* Requires */
const { readJSON, writeJSON } = require('../dataBase/');

const products = readJSON('products.json');



module.exports = {
    index: (req, res) => {
        res.render("products/products", {
            products,
        })
    },

    productDetail : (req, res) => {
        return res.render("products/productDetail")
    },

    productCart : (req, res) => {
        return res.render("products/productCart")
    },
}