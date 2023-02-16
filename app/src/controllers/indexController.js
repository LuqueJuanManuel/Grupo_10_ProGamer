/* Requires */
const { readJSON, writeJSON } = require('../dataBase/');

const products = readJSON('products.json');

module.exports = {
  index: (req, res) => {
    res.render("index", {
      products, 
    })
  }
}

