module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Banner';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };

    let config = {
        tableName: 'banners',
        timestamps: false
    };
    
    const Banner = sequelize.define(alias, cols, config);

    

    return Banner;
}