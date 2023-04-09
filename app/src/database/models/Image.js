module.exports = (sequelize, dataTypes) => {
    
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
    
    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models) => {
        Product.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
    } 

    return Image
}