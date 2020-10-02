
module.exports = class Invitado {
  constructor(id, nombre, apellido, descripcion, urlImagen) {
    this.id = id,
    this.nombre = nombre,
    this.apellido = apellido,
    this.descripcion = descripcion,
    this.urlImagen = urlImagen
  }

  save(){
    
  }

  static getAllInvitados() {

  }
}