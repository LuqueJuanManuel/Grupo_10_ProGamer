/* Requires */
const { Image, Product_category, Product, User_category, User, Sequelize } = require('../database/models');
const { Op } = Sequelize;

module.exports = {
  index: (req, res) => {
    Product.findAll({
      include: [{association: 'product_category'}, {association: 'images'}]
  })
  .then(products => {
    res.render('index.ejs', { products})
  })
    const productosEnOferta = products.filter(product => product.discount >= 20);
    const productosDestacados = products.filter(product => product.price <= 50000);
    

    res.render("index", {
      products, 
      productosEnOferta,
      productosDestacados,
      session: req.session,
      toThousand,
    })
  }
}

