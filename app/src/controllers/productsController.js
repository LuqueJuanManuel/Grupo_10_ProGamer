module.exports = {
    index: (req, res) => {
        return res.render("products/products");
    },

    productDetail : (req, res) => {
        return res.render("products/productDetail")
    },

    productCart : (req, res) => {
        return res.render("products/productCart")
    },
}