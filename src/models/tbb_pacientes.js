const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbb_pacientes', {
    Persona_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbb_personas',
        key: 'ID'
      }
    },
    NSS: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "NSS_UNIQUE"
    },
    Tipo_Seguro: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Fecha_UltimaCita: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Estatus_Medico: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "Normal"
    },
    Estatus_Vida: {
      type: DataTypes.ENUM('Vivo','Finado','Coma','Vegetativo'),
      allowNull: false,
      defaultValue: "Vivo"
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbb_pacientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Persona_ID" },
        ]
      },
      {
        name: "NSS_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NSS" },
        ]
      },
    ]
  });
};
