const express = require('express')
const router = express.Router()

const path = require('path')
const dirRoot = require('../utils/path')

router.get('/', (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('registro', {pageTitle: 'Registro'})
})

module.exports = router