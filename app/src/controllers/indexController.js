/* Requires */
/* const { readJSON, writeJSON } = require('../dataBase/'); */
/* const products = readJSON('products.json'); */
/* const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */
const {User, sequelize} = require('../database/models');


module.exports = {
  index: (req, res) => {
    User.findAll()
      .then(user => {
        res.send(user)
      })
    /* const productosEnOferta = products.filter(product => product.discount >= 20);
    const productosDestacados = products.filter(product => product.price <= 50000);
    

    res.render("index", {
      products, 
      productosEnOferta,
      productosDestacados,
      session: req.session,
      toThousand,
    }) */
  }
}

