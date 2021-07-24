const dbConn = require('../../config/db.config')

module.exports = {
  // CREATİNG A NEW USER
  create: (data, callback) => {
    dbConn.query(
      'INSERT INTO user (user_name, user_surname, user_email, user_password) VALUES (?,?,?,?)',
      [data.user_name, data.user_surname, data.user_email, data.user_password],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // GET USER INFO
  getusers: (callback) => {
    dbConn.query('SELECT user_name,user_surname FROM user', [], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  },

  // UPDATE USER INFO BY NAME
  updateUser: (data, callBack) => {
    dbConn.query(
      `UPDATE user set user_email=?, user_password=? WHERE user_name = ?`,
      [data.user_email, data.user_password, data.user_name],
      (error, results, fields) => {
        if (error) {
          callBack(error)
        }
        return callBack(null, results[0])
      }
    )
  },

  // Getting user by email *For login
  getUserByUserEmail: (email, callBack) => {
    dbConn.query(`SELECT * FROM user WHERE user_email = ?`, [email], (error, results, fields) => {
      if (error) {
        callBack(error)
      } else {
        return callBack(null, results[0])
      }
    })
  }
}
