exports.getInvitadosPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('invitados', {pageTitle: 'Invitados'})
}