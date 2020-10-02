const Invitados = require('../models/invitado')

exports.getInvitadosPage = async (req,res)=>{
  try {
    const [invitados, fieldData] = await Invitados.getAllInvitados()
    res.render('invitados', {pageTitle: 'Invitados', invitados})
  } catch (error) {
    
  }

  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
}