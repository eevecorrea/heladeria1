module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id:{
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: dataTypes.STRING
        },
        precio:{
            type: dataTypes.INTEGER
        },
        imagen:{
            type: dataTypes.STRING
        },
        categoria_id:{
            type: dataTypes.BIGINT(10),
        }
    };
    let config = {
        tableName : 'productos',
        timestamps : false,
    }

    const Producto = sequelize.define(alias, cols, config);

    return Producto;
};