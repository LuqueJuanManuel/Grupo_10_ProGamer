const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;


app.use(express.static("public"));


/* home */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"))
});
/* detalle de producto */
app.get("/producDetail", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
});
/* carrito de compras */
app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/productCart.html"))
});
/* formulario de registro*/
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
/* login */
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
});


app.listen( PORT, ()=>console.log(`server listen in port ${PORT}\n http://localhost:${PORT}` ));