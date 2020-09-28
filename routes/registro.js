const express = require('express')
const router = express.Router()

const registro = require('../controllers/registro')

router.get('/', registro.getRegistroPage)

module.exports = router