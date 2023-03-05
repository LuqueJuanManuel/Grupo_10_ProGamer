/* requires */
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const methodOverride = require('method-override');


/* requerir mudulo global de app session*/
const session = require("express-session");
/* instalar cookie-parser */
const cookieParser = require("cookie-parser");
/* requerir chequeo de cookies a nivel global de app */
const cookieCheck = require("./middlewares/cookieCheck");

/* Middlewares Global */
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
/* aplicar de forma global session con su prop secret */
app.use(session({
    secret: "proGamer",
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
/* aplicar cookie parser de manera global de app */
app.use(cookieCheck);




/* Template engine Config. */
app.set("view engine", "ejs");
app.set("views", "./src/views");

/* Routers */
const indexRouter = require("./routes");
const productsRouter = require("./routes/products");
const usersRouter = require("../src/routes/users");
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