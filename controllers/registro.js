exports.getRegistroPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('registro', {pageTitle: 'Reservaciones'})
}
exports.validarRegistro = (req,res,next)=>{
  console.log('registrando')
  console.log(req.body)
  datosRegistro = req.body
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('validarRegistro', {pageTitle:'Validar Registro', datosRegistro})
}

