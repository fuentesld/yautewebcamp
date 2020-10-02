const Invitados = require('../models/invitado')

exports.getMainPage = async(req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  try {
    const [invitados, fieldData] = await Invitados.getAllInvitados()
    // res.render('invitados', {pageTitle: 'Invitados', invitados})
    res.render('index', {pageTitle: 'YateWebCamp', invitados})
  } catch (error) {
    
  }
}

exports.getConferenciasPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencias', {pageTitle: 'Conferencias'})
}