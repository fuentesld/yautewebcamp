const db = require('../utils/database')

module.exports = class catEvento {
  constructor(id, descripcion, icono) { 
    this.id = id,
    this.descripcion = descripcion,
    this.icono = icono
  }

  save() {
    
  }

  static getAllCatEventos(){
    try {
      return db.execute('SELECT * FROM cat_eventos order BY id_catevento')
    } catch (error) {
      console.log('ERROR en MODELO INVITADOS')
      console.log(error)
    }
  }
}