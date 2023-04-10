DROP DATABASE IF EXISTS pcGamer_db;
CREATE DATABASE pcGamer_db;

USE pcGamer_db;

-- Usuario

DROP TABLE IF EXISTS user_categories;
CREATE TABLE user_categories(
id INT unsigned NOT NULL AUTO_INCREMENT,
rol  varchar(10) NOT NULL,
PRIMARY KEY (id)
);
/* insert into user_categories(id, rol)
values (default, 'USER'),(default, 'admin'),(default, 'Sadmin');*/
/*select * from  user_categories;*/

DROP TABLE IF EXISTS users;
CREATE TABLE users(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
lastname varchar(100) NOT NULL,
email varchar(100) NOT NULL,
pass varchar(150) NOT NULL,
avatar varchar(100) NOT NULL,
address varchar(100) DEFAULT NULL,
city varchar(100) DEFAULT NULL,
postalCode varchar(100) DEFAULT NULL,
tel varchar(100) DEFAULT NULL,
user_category_id INT unsigned NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_category_id) references user_categories(id)
);
/*insert into users(id, name, lastname, email, pass, avatar, address, city, postalCode, tel, user_category_id)
values (default, 'usuario', 'admin', 'usuario@admin.com', '$2a$10$Dw1y158zAoHbLdb7g2p74uhM8BEw4XEZ6awGj20Kpa326SP4pRw/6', 'default-image.png', null, null, null, null, 2),
(default, 'usuario', 'log', 'usuario@log.com', '$2a$10$/.wYt7d7aQslTDM1J0MvMeAOWsFnBA8OP7n.QKOACwxRr3BfbnhWK', 'default-image.png', null, null, null, null, 1);

select * from  users;

select  users.id,name, lastname, email, pass, avatar, address, city, postalCode, tel, user_categories.rol
from users inner join user_categories
on users.user_category_id = user_categories.id;*/


-- Banner

DROP TABLE IF EXISTS banners;
CREATE TABLE banners(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY (id)
);
/*insert into banners(id, name)
values(default, 'b-01.jpg'),(default, 'b-02.jpg'),(default, 'b-03.png'),(default, 'b-04.jpg'),(default, 'b-ofert.jpg');
select * from banners;*/

-- Product

DROP TABLE IF EXISTS product_category;
 CREATE TABLE product_category(
 id INT unsigned NOT NULL AUTO_INCREMENT,
 name varchar(100) NOT NULL,
 code varchar(100) NOT NULL,
 PRIMARY KEY (id)
 );
 /*insert into product_category(id, name, code)
 values (default, 'Notebooks', 'notebooks'),
 (default, 'Computadores', 'pc'),
 (default, 'Componentes de PC', 'Components'),
 (default, 'Monitores', 'monitors'),
 (default, 'Consolas', 'console');
 select * from product_category;*/
 
 
 DROP TABLE IF EXISTS products;
CREATE TABLE products(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
brand varchar(100) NOT NULL,
lastname varchar(100) NOT NULL,
price DECIMAL(11,2) unsigned NOT NULL,
discount INT unsigned DEFAULT NULL,
stock TINYINT(200) unsigned NOT NULL,
description TEXT DEFAULT NULL,
cpu varchar(100) DEFAULT NULL,
graficCard varchar(100) DEFAULT NULL,
so varchar(100) DEFAULT NULL,
ram varchar(100) DEFAULT NULL,
capacity varchar(100) DEFAULT NULL,
puertos varchar(100) DEFAULT NULL,
hdmi varchar(100) DEFAULT NULL,
ethernet varchar(100) DEFAULT NULL,
usb varchar(100) DEFAULT NULL,
wifi varchar(100) DEFAULT NULL,
webCam varchar(100) DEFAULT NULL,
bluetooth varchar(100) DEFAULT NULL,
screenSize varchar(100) DEFAULT NULL,
display varchar(100) DEFAULT NULL,
resolution varchar(100) DEFAULT NULL,
conection varchar(100) DEFAULT NULL,
high varchar(100) DEFAULT NULL,
weight varchar(100) DEFAULT NULL,
width varchar(100) DEFAULT NULL,
depth varchar(100) DEFAULT NULL,
product_category_id INT unsigned NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (product_category_id) references product_category(id)
);
/*insert into products(id, name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category_id)
values (default, 'Asus Vivobook X1502', 'Asus', 'Notebook', 244000, 25, 2, 'Procesador:Intel Core i5 4.40 Ghz, Memoria: 8 GB soldados + 8 GB SO-DIMM, Pantalla: Full HD y antireflejante, Sistema de audio: SonicMaster, Puertos: 3 USB 3.2 tipo C y A y otro USB 2.0 Tipo A',
'Intel Core i5 de 12va Generación', 'Intel® Iris® Xe Graphics', 'Windows', '16 GB DDR4', 'Disco SSD 480GB M.2 Nvme PCIE', '4-USB y 1-HDMI', '1 X HDMI Versión 1.4', 'No', 'si', 'si', 'si', 'si',
null, 'TN', '1920 x 1080 px', null, '23,25 mm', '1,7 kg', '35,97 mm', '1,99 mm', 1);
select * from products;
select  products.id, products.name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category.name as category
from products inner join product_category
on products.product_category_id = product_category.id;*/
/*select  products.id, products.name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category.name as category, images.name as imagenes
from products inner join product_category
on products.product_category_id = product_category.id
inner join images on images.products_id = products.id;*/

DROP TABLE IF EXISTS images;
CREATE TABLE images(
 id INT unsigned NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 products_id int unsigned NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (products_id) references products(id)
 );
 /*insert into images(id, name, products_id)
 values (default, 'asus-vivobook-x1502_1.jpeg',1),(default, 'asus-vivobook-x1502_2.jpeg',1),(default, 'asus-vivobook-x1502_3.jpeg',1);
 select * from images;*/
