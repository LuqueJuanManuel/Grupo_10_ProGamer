module.exports = (sequelize, dataTypes) => {
    /* images(
 id INT unsigned NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 products_id int unsigned NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (products_id) references products(id)
 ); */
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255).UNSIGNED,
            allowNull: false
        },
        products_id: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };

    let config = {
        tableName: 'images',
        createdAt: "created_at",
        updatedAt: "updated_at",
    };
    const Image = sequelize.define(alias, cols, config)

    Image.associate = (models) => {
        Product.belongsToMany(models.Product, {
            as: "products",
            foreignKey: "products_id",
        })
    } 

    return Image
}