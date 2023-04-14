/* Requires */
/* const { readJSON, writeJSON } = require('../dataBase/');
const products = readJSON('products.json');
const categories = readJSON('categories.json');*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
const {Product, Product_category, Banner, Sequelize} = require ('../database/models');
const {Op} = Sequelize;
module.exports = {
    index: (req, res) => {
        const products =Product.findAll({
            where:{
                price:{[Sequelize.Op.lte]: 5000000}
            },include:[{association: 'images'}]
        })
        const categories = Product_category.findAll()
        const banner = Banner.findAll()
        Promise.all([products, categories, banner])
        .then(([products, categories, banner])=>{
            /* console.log(products)*/
            /* return res.send(products)  */
            res.render("products/products", {
                products,
                categories,
                banner,
                session: req.session,
                toThousand,
            }) 
        })
        .catch(error => console.log(error))
        /* res.render("products/products", {
            products,
            categories,
            session: req.session,
            toThousand,
        }) */
    },

    productDetail : (req, res) => {
        
        /* const product = products.find(product => product.id === +req.params.id);
        const productosEnOferta = products.filter(product => product.discount >= 20); */
        const productId = Number(req.params.id);
        const productosEnOferta = Product.findAll({
            where:{
                discount:{[Sequelize.Op.gte]: 20}
            },include:[{association: 'images'}]
        })
        const product = Product.findByPk(productId,{
            include: [{association: 'images'}]
        })
        
        const category = Product_category.findByPk(productId)
        Promise.all([product, productosEnOferta, category])
        .then(([product, productosEnOferta, category])=>{
            /* return res.send(product) */
            return res.render("products/productDetail", {
                product,
                productosEnOferta,
                category,
                session: req.session,
                toThousand,
            })
        })
        .catch(error => console.log(error))

    },

    productCart : (req, res) => {
        return res.render("products/productCart",{session: req.session})
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
        session: req.session,
       })
    },
    categories: (req,res) => {
        
    }
}