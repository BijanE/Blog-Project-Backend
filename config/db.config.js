'user strict'

// Import mysql
const mysql = require('mysql')

// Import dotenv
require('dotenv').config()

//For mysql db connection
const dbConn = mysql.createPool({
  connectionLimit: 1000, // process.env.CONNECTIONLIMIT
  host: 'eu-cdbr-west-01.cleardb.com', // process.env.HOST
  user: 'b4b4fe96d14178', // process.env.USER
  password: '752f2119', // process.env.PASSWORD
  database: 'heroku_c4996405a9e1e26', // process.env.DB
  debug: false // false
})

module.exports = dbConn
