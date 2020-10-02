// const Sequelize = require('sequelize')
// const sequelize = require('../utils/database')

// const CatEvento = sequelize.define('cat_eventos', 
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     descripcion:{
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     icono:{
//       type:Sequelize.STRING,
//       allowNull: false,
//     }
//   },
//   {tableName: 'cat_eventos'}
// )

// module.exports = CatEvento

module.exports = class catEvento {
  constructor(id, descripcion, icono) { 
    this.id = id,
    this.descripcion = descripcion,
    this.icono = icono
  }

  save() {
    
  }
}