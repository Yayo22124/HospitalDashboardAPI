const sequelize = require('../config/db'); // Importa la instancia de Sequelize
const DataTypes = require('sequelize').DataTypes;
const Vista = require('../models/vw_datos_pacientes')(sequelize, DataTypes); // Llama a la función para obtener el modelo

async function obtenerDatosDesdeVista() {
  try {
    const datos = await Vista.findAll();
    return datos;
  } catch (error) {
    console.error('Error al obtener datos desde la vista:', error);
    throw error;
  }
}

module.exports = { obtenerDatosDesdeVista };
