const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbi_bitacora', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nombre_Tabla: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Operacion: {
      type: DataTypes.ENUM('Insert','Update','Delete'),
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Fecha_Hora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tbi_bitacora',
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
    ]
  });
};
