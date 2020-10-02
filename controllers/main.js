exports.getMainPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('index', {pageTitle: 'YateWebCamp'})
}

exports.getConferenciasPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencias', {pageTitle: 'Conferencias'})
}