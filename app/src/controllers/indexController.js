/* Requires */
/* const { readJSON, writeJSON } = require('../oldDatabase/');
const products = readJSON('products.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */
const {Product, Banner,sequelize} = require('../database/models');


module.exports = {
  index: (req, res) => {
    Banner.findAll()
    Product.findAll({
      include:[{association: 'images'}]
    },{
      where:{

      }
    })
    .then(products =>{
      console.log(products)
      return res.send(products)
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

