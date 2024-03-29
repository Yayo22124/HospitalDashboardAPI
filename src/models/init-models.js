var DataTypes = require("sequelize").DataTypes;
var _tbb_pacientes = require("./tbb_pacientes");
var _tbb_personal_medico = require("./tbb_personal_medico");
var _tbb_personas = require("./tbb_personas");
var _tbc_areas_medicas = require("./tbc_areas_medicas");
var _tbc_departamentos = require("./tbc_departamentos");
var _tbi_bitacora = require("./tbi_bitacora");

function initModels(sequelize) {
  var tbb_pacientes = _tbb_pacientes(sequelize, DataTypes);
  var tbb_personal_medico = _tbb_personal_medico(sequelize, DataTypes);
  var tbb_personas = _tbb_personas(sequelize, DataTypes);
  var tbc_areas_medicas = _tbc_areas_medicas(sequelize, DataTypes);
  var tbc_departamentos = _tbc_departamentos(sequelize, DataTypes);
  var tbi_bitacora = _tbi_bitacora(sequelize, DataTypes);

  tbb_pacientes.belongsTo(tbb_personas, { as: "Persona", foreignKey: "Persona_ID"});
  tbb_personas.hasOne(tbb_pacientes, { as: "tbb_paciente", foreignKey: "Persona_ID"});
  tbb_personal_medico.belongsTo(tbb_personas, { as: "Persona", foreignKey: "Persona_ID"});
  tbb_personas.hasOne(tbb_personal_medico, { as: "tbb_personal_medico", foreignKey: "Persona_ID"});
  tbc_departamentos.belongsTo(tbc_areas_medicas, { as: "AreaMedica", foreignKey: "AreaMedica_ID"});
  tbc_areas_medicas.hasMany(tbc_departamentos, { as: "tbc_departamentos", foreignKey: "AreaMedica_ID"});
  tbb_personal_medico.belongsTo(tbc_departamentos, { as: "Departamento", foreignKey: "Departamento_ID"});
  tbc_departamentos.hasMany(tbb_personal_medico, { as: "tbb_personal_medicos", foreignKey: "Departamento_ID"});
  tbc_departamentos.belongsTo(tbc_departamentos, { as: "Departamento_Superior", foreignKey: "Departamento_Superior_ID"});
  tbc_departamentos.hasMany(tbc_departamentos, { as: "tbc_departamentos", foreignKey: "Departamento_Superior_ID"});

  return {
    tbb_pacientes,
    tbb_personal_medico,
    tbb_personas,
    tbc_areas_medicas,
    tbc_departamentos,
    tbi_bitacora,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
