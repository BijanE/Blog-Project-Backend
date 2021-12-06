const nodemailer = require('nodemailer')

require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bijanetessam@gmail.com' || process.env.EMAILADRESS,
    pass: 'nmborjxvfcsvqneu' || process.env.EMAILPASSWORD
  }
})

module.exports = transporter
