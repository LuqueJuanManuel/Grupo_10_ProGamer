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
            type: dataTypes.STRING(255),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER().UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        tableName: 'images',
        timestamps: false
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