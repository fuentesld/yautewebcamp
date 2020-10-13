const db = require('../utils/database')

module.exports = class Registro {
  constructor(id, nombre, apellido, email, fecha, compra, totalPagado) {
    this.id_registrado = id,
    this.nombre_registrado = nombre,
    this.apellido_registrado = apellido,
    this.email_registrado = email,
    this.fecha_registrado = fecha,
    this.compra_registrado = compra,
    this.totalpagado_registrado = totalPagado
  }

  save(){
    const query = 'INSERT INTO registrados (id_registrado, nombre_registrado, apellido_registrado, email_registrado, fecha_registrado, compra_registrado, totalpagado_registrado) VALUES (?, ?, ?, ?, ?, ?, ?)'

    return db.execute( query, [this.id_registrado, this.nombre_registrado, this.apellido_registrado, this.email_registrado, this.fecha_registrado, this.compra_registrado, this.totalpagado_registrado,])
  }

  static getRegistroById(id){
    const query = 'SELECT id_registrado, nombre_registrado, apellido_registrado, email_registrado, fecha_registrado, compra_registrado, totalpagado_registrado FROM registrados WHERE id_registrado = ?'

    return db.execute( query, [id,])
  }
}

