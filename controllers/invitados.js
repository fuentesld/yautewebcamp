const Invitados = require('../models/invitado')

exports.getInvitadosPage = async (req,res)=>{
  try {
    
    const resInvitados = await Invitados.getAllInvitados()
    console.log(resInvitados.rows)
    const invitados = resInvitados.rows

    // console.log(invitados)

    res.render('invitados', {pageTitle: 'Invitados', invitados})
  } catch (error) {
    
  }

  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
}