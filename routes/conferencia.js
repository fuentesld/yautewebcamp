const express = require('express')
const router = express.Router()

const path = require('path')
const dirRoot = require('../utils/path')

router.get('/', (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencia', {pageTitle: 'Conferencias'})
})

module.exports = router