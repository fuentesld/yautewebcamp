const express = require('express')
const router = express.Router()

const registroController = require('../controllers/registro')

router.get('/', registroController.getRegistroPage)

module.exports = router