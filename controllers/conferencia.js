exports.getConferenciaPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencia', {pageTitle: 'Conferencias'})
}