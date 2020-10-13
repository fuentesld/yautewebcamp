const Invitados = require('../models/invitado')

exports.getInvitadosPage = async (req,res)=>{
  try {
    
    const resInvitados = await Invitados.getAllInvitados()
    const invitados = resInvitados.rows

    res.render('invitados', {pageTitle: 'Invitados', invitados})
  } catch (error) {
    
  }

  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
}