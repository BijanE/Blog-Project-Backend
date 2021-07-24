const dbConn = require('../../config/db.config')

module.exports = {
  create_contact: (data, callback) => {
    dbConn.query(
      'INSERT INTO contact (contact_name, contact_surname, contact_email, contact_date, contact_content) VALUES (?,?,?,?,?)',
      [
        data.contact_name,
        data.contact_surname,
        data.contact_email,
        data.contact_date,
        data.contact_content
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },
  get_contact: (callback) => {
    dbConn.query('SELECT * FROM contact', [], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  },
  delete_contact: (data, callback) => {
    dbConn.query(
      'DELETE FROM contact WHERE contact_id=?',
      [data.contact_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  }
}
