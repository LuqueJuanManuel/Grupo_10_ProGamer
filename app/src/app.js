/* requires */
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const methodOverride = require('method-override');

/* Middlewares Global */
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride(_method));


/* Template engine Config. */
app.set("view engine", "ejs");
app.set("views", "./src/views");

/* Routers */
const indexRouter = require("./routes");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

/* Routes Middlewares */

/* Index - HomePage */
app.use("/", indexRouter);

/* Todos los productos */;
app.use("/products", productsRouter);

/* Detalle de producto */
app.use("/productDetail", productsRouter);

/* Carrito de compras */
app.use("/productCart", productsRouter);

/* Formulario de Registro */
app.use("/users", usersRouter);

/* Login */
/* app.use("/", usersRouter) */

/* admin */
app.use('/admin', adminRouter);

/* error 404 */
app.use((req,res,next)=>{
    res.status(404).render("not-found")
})



app.listen( PORT, ()=>console.log(`server listen in port ${PORT}\n http://localhost:${PORT}` ));