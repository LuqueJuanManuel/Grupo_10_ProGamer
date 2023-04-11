/* Requires */
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
  }
}

