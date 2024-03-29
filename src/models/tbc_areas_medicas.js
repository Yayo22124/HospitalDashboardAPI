const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbc_areas_medicas', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "DESCRIPCION: Atributo clave primaria autoincremental que identificara cada registro del AREA MEDICA.\\nNATURALEZA: Cuantitativo\\nTIPO: Numérico\\nDOMINIO: Número Enteros Positivos\\nCOMPOSICION: \nID =  1{0-9}*"
    },
    Nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "DESCRIPCION: Denominación del Area Medica a la que pertenece el Departamento \\nNATURALEZA: Cualitativo\\nTIPO: Alfanumerico\\nDOMINIO: Letras y Numeros \\nCOMPOSICION: 1{a-Z| |0-9}150\\n"
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "DESCRIPCION: Redaccion extensa del AREA MEDICA\nNATURALEZA: Cualitativo\nTIPO: Alfanumerico\nDOMINIO: Letras y Numeros \nCOMPOSICION:  0{a-Z| |0-9}*\n"
    },
    Estatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: "DESCRIPCION: Valor actual del estado del registro.\nNATURALEZA: Cuantitativo\nTIPO: Booleano\nDOMINIO: 0 para Inactivo, 1 para Activo\nCOMPOSICION:  [0|1]\n"
    },
    Fecha_Registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "DESCRIPCION: Fecha en formato  AAAA-MM-DD hh:mm:ss, en la que se registro el area medica\nNATURALEZA: Cualitativo\nTIPO: Alfanumerico\nDOMINIO: Letras y Numeros \nCOMPOSICION:  \nAAAA =  [1000|...|9999]   #Se restringiran con una restriccion del tipo CHECK, para permitir solo las fecha validas para el contexto del Hospital\nMM = [01|...|12]\nDD = [01|...|31]  #El SGBD valida la correspondencia entre MES y DIA para evita los errores de captura, y AÑO en caso de bisiestos.\nhh = [00|...|23]\nmm = [00|...|59]\nss =[00|...|59]\nFecha_Regustri =  AAAA+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss"
    },
    Fecha_Actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "DESCRIPCION: Fecha en formato  AAAA-MM-DD hh:mm:ss, en la que se realizaron los últimos cambios al area medica\nTIPO: Alfanumerico\nDOMINIO: Letras y Numeros \nCOMPOSICION:  \nAAAA =  [1000|...|9999]   #Se restringiran con una restriccion del tipo CHECK, para permitir solo las fecha validas para el contexto del Hospital\nMM = [01|...|12]\nDD = [01|...|31]  #El SGBD valida la correspondencia entre MES y DIA para evita los errores de captura, y AÑO en caso de bisiestos.\nhh = [00|...|23]\nmm = [00|...|59]\nss =[00|...|59]\nFecha_Regustri =  AAAA+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss"
    }
  }, {
    sequelize,
    tableName: 'tbc_areas_medicas',
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
