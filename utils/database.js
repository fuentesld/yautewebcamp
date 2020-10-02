// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('yautewebcamp', 'root', 'Persi2520.',{
//   dialect: 'mysql',
//   host: 'localhost',
// })

// module.exports = sequelize

const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'yautewebcamp',
  password: 'Persi2520.'
})

module.exports = pool.promise()