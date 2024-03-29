const pacientesController = require('../controllers/pacientes.controller')
const { Router } = require('express');
const router = Router();

router.get('/sp-insertar-pacientes', pacientesController.spInsertarPacientes);
router.delete('/sp-limpia-bd', pacientesController.spLimpiaBd);

module.exports = router;