const emitir = require('../server');
const sequelize = require('../config/db')

exports.spInsertarPacientes = async (req, res) => {
    let { cantidad, genero, tipo } = req.body;

    if (!cantidad) {
        res.status(500).json({
            error: "La petición requiere de un body con al menos la propiedad de 'cantidad'."
        })
        return; // Terminar la ejecución de la función
    }

    if (!genero) {
        genero = "NULL";
    }
    if (!tipo) {
        tipo = "NULL";
    }
    const query = `CALL sp_insertar_pacientes(${cantidad}, ${genero}, ${tipo});`;

    try {
        sequelize.query(query, { type: sequelize.QueryTypes.CALL }).then(() => {
            emitir.emitirDatosActualizados();
        });
        res.status(200).json({
            msg: `Procedimiento ejecutado correctamente, ${cantidad} pacientes han sido registrados.`,
            query
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while calling stored procedure 1."
        });
    }
};

exports.spLimpiaBd = async (req, res) => {
    const query = `CALL sp_limpia_bd('${process.env.PROCESS_PASSWORD}');`;

    try {
        await sequelize.query(query, { type: sequelize.QueryTypes.CALL }).then(() => {
            emitir.emitirDatosActualizados();
        });
        res.status(200).json({
            msg: `Procedimiento ejecutado correctamente, base de datos limpia.`,
            query
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while calling stored procedure 1."
        });
    }
};
