
module.exports = (sequelize, dataTypes) => {

    let alias = 'User_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
    };

    let config = {
        tableName: 'user_categories',
        createdAt: "created_at",
        updatedAt: "updated_at",
    };
    const User_category = sequelize.define(alias, cols, config)

     User_category.associate = (models) => {
        User_category.hasMany(models.User, {
            as: "users",
            foreignKey: "user_category_id",
        })
    } 

    return User_category
}