/* Requires */
const { Product, Banner, sequelize } = require('../database/models');

module.exports = {
  index: (req, res) => {
    const banner = Banner.findAll();
    
    const productosDestacados = Product.findAll({
       where: {
        price: { [Op.lte]: 50000 }
       }
    });

    const productosEnOferta = Product.findAll({
      where: {
        discount: { [Op.gte]: 20 }
      }
    }); 
    
    /* Banner.findAll()
    Product.findAll({
      include:[{association: 'images'}]
    },{
      where:{

      }
    })
    .then(products =>{
      console.log(products)
      return res.send(products)
    }) */
  }
}

