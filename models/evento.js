
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
    const query = 'SELECT fecha_evento, hora_evento, nombre_evento, descripcion_catevento, icono_catevento, CONCAT(nombre_invitado , " " , apellido_invitado) AS invitado FROM eventos INNER JOIN cat_eventos ON catevento_id = id_catevento INNER JOIN invitados ON (invitado_id = id_invitado) WHERE id_catevento = ? LIMIT ?'
    try {
      return db.execute(query,[categoria, limite])
    } catch (error) {
      console.log(error)
    }
  }
}