const db = require('../utils/database')

module.exports = class Invitado {
  constructor(id, nombre, apellido, descripcion, urlImagen) {
    this.invitado_id = id,
    this.nombre = nombre,
    this.apellido = apellido,
    this.descripcion = descripcion,
    this.url_imagen = urlImagen
  }

  save(){
    
  }

  static getAllInvitados() {
    try {
      return db.query('SELECT * FROM invitados')
    } catch (error) {
      console.log('ERROR en MODELO INVITADOS getAllInvitados')
      console.log(error)
    }

  }
}