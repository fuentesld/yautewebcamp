
const db = require('../utils/database')

module.exports = class Evento {
  constructor(id, nombre, fecha, hora, clave, catEventoId, invitadoId){
    this.evento_id = id,
    this.nombre = nombre,
    this.fecha = fecha,
    this.hora = hora,
    this.clave = clave,
    this.catEvento_id = catEventoId,
    this.invitado_id = invitadoId
  }

  save() {

  }

  static getEventosParaCalendario(){
    const query = 'SELECT fecha, hora, eventos.nombre, cat_eventos.descripcion, icono, invitados.nombre || \' \' || invitados.apellido AS invitado FROM eventos INNER JOIN cat_eventos ON cat_eventos.catevento_id = eventos.catevento_id INNER JOIN invitados ON (eventos.invitado_id = invitados.invitado_id) ORDER BY fecha, eventos.catevento_id, hora'
    try {
      return db.query(query)
    } catch (error) {
      console.log(error)
    }
  }
  
  static getEventosPorCategoria(categoria, limite = 0){
    const query = 'SELECT fecha, hora, eventos.nombre, cat_eventos.descripcion, icono, invitados.nombre || \' \' || invitados.apellido AS invitado FROM eventos INNER JOIN cat_eventos ON cat_eventos.catevento_id = eventos.catevento_id INNER JOIN invitados ON (eventos.invitado_id = invitados.invitado_id) WHERE eventos.catevento_id = $1 LIMIT $2'
    try {
      return db.query(query,[categoria, limite])
    } catch (error) {
      console.log(error)
    }
  }
}