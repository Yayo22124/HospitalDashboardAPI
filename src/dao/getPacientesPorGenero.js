const sequelize = require('../config/db'); // Importa la instancia de Sequelize
const DataTypes = require('sequelize').DataTypes;
const VistaPacientesPorGenero = require('../models/vw_pacientes_por_genero')(sequelize, DataTypes); // Llama a la función para obtener el modelo

async function getPacientesPorGenero() {
  try {
    const PacientesPorGenero = await VistaPacientesPorGenero.findAll();
    return PacientesPorGenero;
  } catch (error) {
    console.error('Error al obtener PacientesPorGenero desde la vista:', error);
    throw error;
  }
}

module.exports = { getPacientesPorGenero };
