
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
    const query = 'SELECT fecha_evento, hora_evento, nombre_evento, descripcion_catevento, icono_catevento, CONCAT(nombre_invitado , " " , apellido_invitado) AS invitado FROM eventos INNER JOIN cat_eventos ON catevento_id = id_catevento INNER JOIN invitados ON invitado_id = id_invitado ORDER BY fecha_evento, catevento_id, hora_evento'
    try {
      return db.execute(query)
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