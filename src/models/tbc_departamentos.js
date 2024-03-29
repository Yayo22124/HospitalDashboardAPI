const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbc_departamentos', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "DESCRIPCION: Atributo clave primaria autoincremental que identificara cada registro del DEPARTAMENTO\nNATURALEZA: Cuantitativo\nTIPO: Numérico\nDOMINIO: Número Enteros Positivos\nCOMPOSICION:  1{0-9}*\n"
    },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "DESCRIPCION: Denominación del DEPARTAMENTO (Unidad de Negocio)\nNATURALEZA: Cualitativo\nTIPO: Alfanumerico\nDOMINIO: Letras y Numeros \nCOMPOSICION: 1{a-Z| |0-9}100"
    },
    AreaMedica_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'tbc_areas_medicas',
        key: 'ID'
      }
    },
    Departamento_Superior_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'tbc_departamentos',
        key: 'ID'
      }
    },
    Responsable_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
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
    tableName: 'tbc_departamentos',
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
        name: "fk_area_medica_1",
        using: "BTREE",
        fields: [
          { name: "AreaMedica_ID" },
        ]
      },
      {
        name: "fk_departamento_1",
        using: "BTREE",
        fields: [
          { name: "Departamento_Superior_ID" },
        ]
      },
    ]
  });
};
