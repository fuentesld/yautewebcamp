const moment = require('moment')
moment.locale('es')

const CatEvento = require('../models/catEvento')
const Evento = require('../models/evento')
const Invitados = require('../models/invitado')

exports.getMainPage = async(req,res)=>{
  
  let eventosDeCategorias = []

  try {
    // Leemos invitados del evento
    const resInvitados = await Invitados.getAllInvitados()
    const invitados = resInvitados.rows

    // leemos las categorias de eventos
    const resCatEventos = await CatEvento.getAllCatEventos()
    const catEventos = resCatEventos.rows

    // leemos dos eventos por cada categoria
    for (const categoria of catEventos){
      // leo eventos de una categoria en paso1
      const resRows = await Evento.getEventosPorCategoria(categoria.catevento_id, 2)
      const paso1 = resRows.rows

      // añado fecha y hora formateada
      paso2 = paso1.map(element =>{
        const element2 = {...element, fechaString: moment(element.fecha).add(4, 'years').format("dddd, Do MMMM YYYY"), horaString: moment(element.hora,'HH:mm:ss').format('h:mm a') }
        return element2
      })
      // Anadimos eventos de la categoria a arreglo para depliegue
      eventosDeCategorias = [...eventosDeCategorias, ...paso2]
    }
    
    res.render('index', {pageTitle: 'YateWebCamp', invitados, catEventos, eventosDeCategorias})
    // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  } catch (error) {
    console.log(error)
  }
}

exports.getConferenciasPage = (req,res)=>{
  // res.sendFile(path.join(dirRoot, 'views', 'index.html'))
  res.render('conferencias', {pageTitle: 'Conferencias'})
}