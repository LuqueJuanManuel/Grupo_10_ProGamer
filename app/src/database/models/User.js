/* const { categories } = require("../../controllers/productsController"); */

module.exports = (sequelize, dataTypes) => {
  /*  users(
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
); */
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        city: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        postalCode: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        tel: {
            type: dataTypes.STRING(100),
            defaultValue: null
        },
        user_category: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)


    return User;
}