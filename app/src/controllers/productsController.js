module.exports = {
    productDetail : (req, res) => {
        return res.render("products/productDetail")
    },

    productCart : (req, res) => {
        return res.render("products/productCart")
    },
}