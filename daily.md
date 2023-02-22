# Sprint 3 - Template Engines

## Antes de la fecha del inicio del Sprint:

- Ya teniamos realizada la tarea de impletar los Templates Engine:
     - Implementar el módulo EJS y renombrar todas las vistas actuales para que utilicen la extensión ejs.
     - Modificar los métodos de los controladores para que utilicen el método render().
     - Se implemento el Modelo Vista Controlador (MVC).

***************************************************************************************************

## Martes 31 de Enero.
- Nos reunimos para divirnos las tareas designadas en trello.

***************************************************************************************************

## Miercoles 1 de Febrero.

### Tomas Lopez Turconi.
- Se realizo la  tarea: "Formulario al que accede el usuario administrador para cargar nuevos productos".
     - Problemas o complicaciones: Teniamos algunas dudas con respecto al diseño del formulario para el ingreso de datos, asi que decidimos cambiar el diseño.

### Emanuel Gauna.
- Se creo la carpeta partials, con los siguientes archivos de vista: Head, Header, Footer, Scripts y Sales. Y se la asigno a cada vista correspondiente.
     - Problemas o complicaciones: al levantar el servidor nos dimos cuenta que se me mezclaron o pisaban los estilos, por lo cual tuvimos que modicar las clases en los archivos css.  

### Juan Luque.
- Se creo la division de carpetas en Views, se coloco en la carpeta products todas las vistas relacionadas con productos y en la carpeta Users los archivos coprrespondientes a lo relacionado con los usuarios.
     - Problemas o complicaciones: No se genero ningun problema. 


**************************************************************************************************************

## Jueves 2 de Febrero.
- Cada uno siguio trabajando en sus Tareas, consultando y mostrando avance logrado.
- No hicimos reunion por Zoom, pero mantuvimos la comunicación por whatsapp.

*************************************************************************************************************

## Viernes 3 de Febrero.

## Tomas Lopez Turconi.
- Finalise la vista de admin create y sus respectivas routes y controllers.
     - Problemas o complicaciones: Ningun problema grave.

## Emanuel Gauna.
- Modifique estilos en las vistas: Header y Footer.
     - Problemas o complicaciones: Ninguna. 

## Juan Luque.
- Estuve trabajando en vistas para implementar mas adelante en el proyecto, como vistas para las categorias y los productos.
     - Problemas o Complicaciones: Tuve algunos problemas a empezar implementar Bootstrap, ya que eran las primeras vistas en el proyecto que implementábamos este Framework. 

**************************************************************************************************************

## Sabado 4 de Febrero.

## Tomas Lopez Turconi.
- Finalise la vista de Admin Edit con respectivos Routers y Controllers.
     - Problemas o Complicaciones: Ninguna. 

**************************************************************************************************************

## Domingo 5 de Febrero.

- Reunion grupal para realizar la retrospectiva y revisar las tarjetas de trello para no pasar nada por alto.

*********************************************************************
# Sprint 4 - JSON + métodos HTTP

## 12 de febrero 

## Tomas Lopez Turconi.

- Cree la base de datos formato Json y la subi al repositor. No e tenido ningun problema

*********************************************************************

## 15 de febrero 

## Tomas Lopez Turconi.

- Hice arreglos en la BBDD en lagunos nombre y en los formularios del admin.
Tambien organize las imagenes y cree el index.js en dataBase, con writeJson y readJson.

## Juan Luque.

 - Se instalo method override y multer, y se dejo la configuracion de ambas librerias en el proyecto. 
      (Override en app.js y multer en middlewares, con el archivo upload exportadoby requerido en routes).
- Se logro mostrar las vistas de forma dinamica de products ( vista que lista todos los productos).

*********************************************************************

## 16 de febrero 

## Juan Luque.

- Se realiza la vista dinamica de la homepage.Se cambio la vista de productDetail, se aplico una vista con bootstrap y un carrusel para las vistas de las imagenes, se implemento un dropdown para la vista de los detalles del producto y un banner debajo para mostrar productos que estan en oferta.

*********************************************************************

## 17 de febrero

## Juan Luque.

- Se termina de implemenyar los estilos a la nueva vista de productsDetail para que coincida con los estilos de la pag. 

*********************************************************************

## 18 de febrero 

## Tomas Lopez Turconi.

- Trabaje en delete en adminController con su ruta.

## Emanuel Gauna

- Trabaje de formulario de edicion de la vista "adminEdit" .
- Le di valor a los selectores "value" de productos del form de edicion con  variables ejs,
- Modifique el product.json las llaves de screensize y grafic card.
- Agrege la variable toThousand al controller de edit.
- Cambie el metodo middleware de multer de "single" a "array" en la ruta controller.update


*********************************************************************

## 19 de febrero 

## Tomas Lopez Turconi.

- Agrego al repositor rama tomas el delete. y creo la vista adminHome con su ruta y le agrego los link de edit, delete y views.
Los agrego al repositorio rama tomas y en la rama tomas subo las modificaciones de una rama develop(rama encomun con mis compañeros),
esta de errores y los pude solucionar.

## Juan Luque.

- Se realizo la vista Search, la ruta y el controlador, se modifico el header y se agrego una etiqueta form, con el action a search.

## Emanuel Gauna

- Descaga y requemientode modulo express-validator,
  agregando carpeta validaciones y  archivo productsEditValidator.js


*********************************************************************

## 20 de febrero 

## Tomas Lopez Turconi.

- La actualiza las ramas y paso la info de la rama tomas a develop con merge, esta tira algunos problemas de merging,
y los arreglo , lo subo al repositor.

## Juan Luque.

- Se realizo la logica oara poder crear un producto. 
- Complicaciones: tuve problemas para redireccionar a las rutas. Tambien se me dificulto mucho la logica de poder subor michas imagenes y guardalo como array. 

## Emanuel Gauna

- Modificacion de la vista adminEdit y validacion en el adminController


*********************************************************************

## 21 de febrero 

## Tomas Lopez Turconi.

- Checkeando qe todo el funcionameinto, no me gusto como qedo mi trabajo de destroy, porque en la pagina tenia qe cargar devuelta la pagina para qe se vea el cambio despues de redirect,
y cambie el funcionamiento. Y corregi algunos problemas de los name de algunas vistas.

## Juan Luque.

- Se aplican los ultimos detalles de productDetail, la vista dinamica y los estilos. 
- Complicaciones: tuve dificultades a la hora de implementar algunas validaciones a la vista, como implementar el json de categorias para que sw muestren en la vist.