const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbb_personal_medico', {
    Persona_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tbb_personas',
        key: 'ID'
      }
    },
    Departamento_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tbc_departamentos',
        key: 'ID'
      }
    },
    Especialidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.ENUM('Médico','Enfermero','Administrativo','Directivo','Apoyo','Residente','Interno'),
      allowNull: false
    },
    Cedula_Profesional: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: true,
      unique: "Cedula_Profesional_UNIQUE"
    },
    Estatus: {
      type: DataTypes.ENUM('Activo','Inactivo','Jubilado','Permiso'),
      allowNull: false,
      defaultValue: "Activo"
    },
    Fecha_Contratacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Fecha_Terminacion_Contrato: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbb_personal_medico',
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
        name: "Cedula_Profesional_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula_Profesional" },
        ]
      },
      {
        name: "fk_area_medica",
        using: "BTREE",
        fields: [
          { name: "Departamento_ID" },
        ]
      },
    ]
  });
};
