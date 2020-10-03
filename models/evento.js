
const db = require('../utils/database')

module.exports = class Evento {
  constructor(id, nombre, fecha, hora, clave, catEventoId, invitadoId){
    this.id = id,
    this.nombre = nombre,
    this.fecha = fecha,
    this.hora = hora,
    this.clave = clave,
    this.catEventoId = catEventoId,
    this.invitadoId = invitadoId
  }

  save() {

  }

  static getEventosParaCalendario(){
    const query = 'SELECT fecha, hora, eventos.nombre, cat_eventos.descripcion, icono, CONCAT(invitados.nombre , " " , invitados.apellido) AS invitado FROM yautewebcamp.eventos INNER JOIN cat_eventos ON catEventoId = cat_eventos.id INNER JOIN invitados ON invitadoId = invitados.id ORDER BY fecha, catEventoId, hora'
    try {
      return db.execute(query)
    } catch (error) {
      console.log(error)
    }
  }
  
  static getEventosPorCategoria(categoria, limite = 0){
    const query = 'SELECT fecha, hora, eventos.nombre, cat_eventos.descripcion, icono, CONCAT(invitados.nombre , " " , invitados.apellido) AS invitado FROM yautewebcamp.eventos INNER JOIN cat_eventos ON catEventoId = cat_eventos.id INNER JOIN invitados ON (invitadoId = invitados.id) WHERE cat_eventos.id = ? LIMIT ?'
    try {
      return db.execute(query,[categoria, limite])
    } catch (error) {
      console.log(error)
    }
  }
}