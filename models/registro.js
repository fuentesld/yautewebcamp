const db = require('../utils/database')

module.exports = class Registro {
  constructor(id, nombre, apellido, email, fecha, compra, totalPagado) {
    this.registro_id = id,
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email,
    this.fecha = fecha,
    this.compra = compra,
    this.total = totalPagado
  }

  save(){
    // const query = 'INSERT INTO registros (nombre, apellido, email, fecha, compra, total) VALUES ( ?, ?, ?, ?, ?, ?)'
    const query = 'INSERT INTO registros (nombre, apellido, email, fecha, compra, total) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *'

    return db.query( query, [this.nombre, this.apellido, this.email, this.fecha, this.compra, this.total])
    

  }

  static getRegistroById(id){
    const query = 'SELECT registro_id, nombre, apellido, email, fecha, compra, total FROM registros WHERE registro_id = $1'

    return db.query( query, [id,])
  }
}

