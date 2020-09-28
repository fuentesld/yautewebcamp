const express = require('express')
const router = express.Router()

const conferenciasController = require('../controllers/conferencia')

router.get('/', conferenciasController.getConferenciaPage)

module.exports = router