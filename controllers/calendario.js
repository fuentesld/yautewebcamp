const Evento = require('../models/evento')
const moment = require('moment')
moment.locale('es')

exports.getCalendarioPage = async(req,res)=>{
  
  try {
    [rows, fieldData] = await Evento.getEventosParaCalendario()

    const eventosArray = rows.map((element) => {
      return {
        ...element, 
        fechaString: moment(element.fecha).add(4, 'years').format("dddd, Do MMMM YYYY"), 
        horaString: moment(element.hora,'HH:mm:ss').format('h:mm a')
      }
    });

    const eventos={}
    let fechaActual = ''

    eventosArray.forEach(evento => {
      if (fechaActual !== evento.fechaString){
        fechaActual = evento.fechaString
        eventos[`${fechaActual}`]=[]
      }
      eventos[`${fechaActual}`].push(evento)
    })
    
    // Object.entries(eventos).forEach(evento => {
    //   const [fecha, actividad] = evento
    //   console.log('******')
    //   actividad.forEach(element => {
    //     console.log(element.nombre)
    //   });
    // });

    // return  eventos
    res.render('calendario', {pageTitle: 'Calendario', eventos})
  } catch (error) {
    console.log(error)
  }
}