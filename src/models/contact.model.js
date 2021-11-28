const dbConn = require('../../config/db.config')
const transporter = require('../../config/email.config')

require('dotenv').config()

module.exports = {
  // for config the email
  sendEmail: (data, callback) => {
    const options = {
      from: 'bijanetessam@gmail.com' || process.env.emailAdress,
      to: 'bijanetessam@gmail.com' || process.env.emailAdress,
      subject: data.subject,
      text: data.text
    }

    transporter.sendMail(options, (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  },

  // For create a contact massage
  create_contact: (data, callback) => {
    dbConn.query(
      'INSERT INTO contact (contact_name, contact_surname, contact_email, contact_date, contact_content, contact_company) VALUES (?,?,?,?,?,?',
      [
        data.contact_name,
        data.contact_surname,
        data.contact_email,
        data.contact_date,
        data.contact_content,
        data.contact_company
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

  // For get all the contact massages
  get_contact: (callback) => {
    dbConn.query('SELECT * FROM contact ORDER BY ASC', [], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  },

  // For delete the contact massage with contact id
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
