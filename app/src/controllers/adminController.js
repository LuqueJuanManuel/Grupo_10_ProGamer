const { readJSON, writeJSON } = require("../dataBase");
const products = readJSON('products.json');

module.exports ={
    adminHome: (req, res) => {
        res.render("admin/adminHome",{
			products

		})
    },
    create: (req, res) => {
        res.render('admin/adminAdd');
    },
    edit: (req, res) => {
        res.render('admin/adminEdit');
    },



























    
    
    
    
    
    destroy: (req,res) => {
        let productId = Number(req.params,id);
        
        let newArrayProducts = products.filter(product => product.id !== productId);
        writeJSON('products.json',newArrayProducts);
        
    }
}