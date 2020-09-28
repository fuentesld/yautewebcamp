const express = require('express')
const router = express.Router()

const conferencias = require('../controllers/conferencia')

router.get('/', conferencias.getConferenciaPage)

module.exports = router