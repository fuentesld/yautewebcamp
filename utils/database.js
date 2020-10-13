// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('yautewebcamp', 'root', 'Persi2520.',{
//   dialect: 'mysql',
//   host: 'localhost',
// })

// module.exports = sequelize

// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'yautewebcamp',
//   password: 'Persi2520.'
// })
const { Pool } = require('pg')
try {
  const pool = new Pool({
    host: 'localhost',
    user: 'yauteweb',
    database: 'yautewebcamp',
    password: 'Persi2520',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })
  
  module.exports = pool
  
} catch (error) {
  console.log(error)
}
