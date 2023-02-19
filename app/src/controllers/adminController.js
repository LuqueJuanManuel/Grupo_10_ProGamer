const { writeJSON } = require("../dataBase");


module.exports ={
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