const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('VistaPacientesPorGenero', {
        // Definimos el nombre como clave primaria
        "genero": {
            type: DataTypes.STRING(1),
            allowNull: false,
            primaryKey: true // Marcamos el nombre como clave primaria
        },
        "TotalPacientes": {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'vw_pacientes_por_genero', // Nombre de la vista en la base de datos
        timestamps: false, // Si la vista no tiene columnas de fecha de creación o actualización
        // Otros opciones de configuración según tus necesidades
    });
};
