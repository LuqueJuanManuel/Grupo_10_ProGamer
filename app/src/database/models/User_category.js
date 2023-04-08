module.exports = (sequelize, dataTypes) => {
    let alias = "User_Category";
    let cols = {
       id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
       },
       rol: {
        type: dataTypes.STRING(10),
        allowNull: false
       }
    }

    let config = {
        tableName: "User_Category",
        timestamps: false
    }

    const User_Category = sequelize.define(alias, cols, config);

    /* FALTA AGREGAR LAS RELACIONES CON USER */
    /* FALTA HACER EL USER_CATEGORY.ASSOCIATE */



    return Product;
}