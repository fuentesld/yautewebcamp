const express = require('express')
const router = express.Router()

const mainController = require('../controllers/main')
const calendarioController = require('../controllers/calendario')
const invitadosController = require('../controllers/invitados')
const registroController = require('../controllers/registro')

router.get('/', mainController.getMainPage)
router.get('/conferencias', mainController.getConferenciasPage)
router.get('/calendario', calendarioController.getCalendarioPage)
router.get('/invitados', invitadosController.getInvitadosPage)
router.get('/registro', registroController.getRegistroPage)
router.post('/validar_registro', registroController.validarRegistro)


module.exports = router