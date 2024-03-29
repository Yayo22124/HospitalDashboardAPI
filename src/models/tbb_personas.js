const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbb_personas', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Titulo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Primer_Apellido: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Segundo_Apellido: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(18),
      allowNull: true,
      unique: "CURP_UNIQUE"
    },
    Genero: {
      type: DataTypes.ENUM('M','F','N/B'),
      allowNull: false
    },
    Grupo_Sanguineo: {
      type: DataTypes.ENUM('A','B','AB','O'),
      allowNull: false
    },
    Tipo_Sanguineo: {
      type: DataTypes.ENUM('+','-'),
      allowNull: false
    },
    Fecha_Nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Fecha_Actualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbb_personas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "CURP_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CURP" },
        ]
      },
    ]
  });
};
