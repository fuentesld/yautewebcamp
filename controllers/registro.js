exports.getRegistroPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('registro', {pageTitle: 'Reservaciones'})
}

