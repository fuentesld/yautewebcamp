const moment = require('moment')
moment.locale('es')

const CatEvento = require('../models/catEvento')
const Evento = require('../models/Evento')
const Invitados = require('../models/invitado')

exports.getMainPage = async(req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  let eventosDeCategorias = []
  try {
    // Leemos invitados del evento
    const resInvitados = await Invitados.getAllInvitados()
    const invitados = resInvitados.rows
    console.log(invitados)

    // leemos las categorias de eventos
    const resCatEventos = await CatEvento.getAllCatEventos()
    const catEventos = resCatEventos.rows
    // console.log(catEventos)
    // leemos dos eventos por cada categoria
    // for (const categoria of catEventos){
      
    //   const [rows] = await Evento.getEventosPorCategoria(categoria.id_catevento, 2)
    //   // añadimos campos fechaString y horaString a las categorias
    //   eventosDeCategorias =  [
    //     ...eventosDeCategorias, 
    //     ...rows.map(
    //       element => ({ 
    //         ...element, 
    //         fechaString: moment(element.fecha_evento).add(4, 'years').format("dddd, Do MMMM YYYY"), 
    //         horaString: moment(element.hora_evento,'HH:mm:ss').format('h:mm a')
    //       })
    //     )
    //   ]
    // }

    res.render('index', {pageTitle: 'YateWebCamp', invitados, catEventos, eventosDeCategorias})
  } catch (error) {
    
  }
}

exports.getConferenciasPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencias', {pageTitle: 'Conferencias'})
}