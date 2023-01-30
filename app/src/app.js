const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

/* Archivos Estaticos */
app.use(express.static("public"));

/* Template engine Config. */
app.set("view engine", "ejs");
app.set("views", "./src/views")

/* Routers */
const indexRouter = require("./routes");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

/* Routes Middlewares */

/* Index - HomePage */
app.use("/", indexRouter);

/* Detalle de producto */
app.use("/productDetail", productsRouter);

/* Carrito de compras */
app.use("/productCart", productsRouter);

/* Formulario de Registro */
app.use("/register", usersRouter);

/* Login */
app.use("/login", usersRouter)



app.listen( PORT, ()=>console.log(`server listen in port ${PORT}\n http://localhost:${PORT}` ));