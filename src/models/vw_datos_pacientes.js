const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('VistaDatosPacientes', {
        // Definimos el nombre como clave primaria
        "Nombre Completo": {
            type: DataTypes.STRING(80),
            allowNull: false,
            primaryKey: true // Marcamos el nombre como clave primaria
        },
        "Edad": {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        "Tipo de Sangre": {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        "NSS": {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {
        tableName: 'vw_datos_pacientes', // Nombre de la vista en la base de datos
        timestamps: false, // Si la vista no tiene columnas de fecha de creación o actualización
        // Otros opciones de configuración según tus necesidades
    });
};
// module.exports = function(sequelize, DataTypes) {
//     return sequelize.define('VistaDatosPacientes', {
//         // Definimos el nombre como clave primaria
//         "nombre_completo": {
//             type: DataTypes.STRING(80),
//             allowNull: false,
//             primaryKey: true // Marcamos el nombre como clave primaria
//         },
//         "edad": {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         "Genero": {
//             type: DataTypes.STRING(80),
//             allowNull: false
//         },
//         "Tipo_Sangre": {
//             type: DataTypes.STRING(5),
//             allowNull: true
//         },
//         "Estatus_Vida": {
//             type: DataTypes.STRING(20),
//             allowNull: false
//         },
//         "Estatus_Medico": {
//             type: DataTypes.STRING(20),
//             allowNull: false
//         },
//     }, {
//         tableName: 'vw_datos_pacientes', // Nombre de la vista en la base de datos
//         timestamps: false, // Si la vista no tiene columnas de fecha de creación o actualización
//         // Otros opciones de configuración según tus necesidades
//     });
// };
