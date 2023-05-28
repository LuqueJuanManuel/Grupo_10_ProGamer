/* Requires */
/* const { readJSON, writeJSON } = require('../oldDatabase/');
const products = readJSON('products.json');*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const {Product, Banner, Sequelize} = require('../database/models');


module.exports = {
  index: (req, res) => {
    
    const productosDestacados = Product.findAll({
      where:{
        price:{[Sequelize.Op.lte]: 245000}
      },include:[{association: 'images'}]
    })

    const productosEnOferta = Product.findAll({
      where:{
        discount:{[Sequelize.Op.gte]: 10}
      },include:[{association: 'images'}]
    }  
)
    const banner = Banner.findAll()

    Promise.all([productosDestacados, productosEnOferta, banner])

    .then(([productosDestacados, productosEnOferta, banner]) =>{
      /* console.log(productosDestacados, productosEnOferta, banner) */
      /* res.send( productosDestacados) */
      res.render("index", {
        toThousand,
        productosDestacados, 
        productosEnOferta,
        banner,
        session: req.session,
        
      }) 
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
  },
  terms: (req,res) => {
   return  res.render("terms&Conditions")
  }
}

