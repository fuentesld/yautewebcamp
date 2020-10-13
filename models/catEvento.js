const db = require('../utils/database')

module.exports = class catEvento {
  constructor(id, descripcion, icono) { 
    this.catevento_id = id,
    this.descripcion = descripcion,
    this.icono = icono
  }

  save() {
    
  }

  static getAllCatEventos(){
    try {
      return db.query('SELECT * FROM cat_eventos ORDER BY catevento_id')
    } catch (error) {
      console.log('ERROR en MODELO CatEventos')
      console.log(error)
    }
  }
}