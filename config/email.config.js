const nodemailer = require('nodemailer')

require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bijanetessam@gmail.com' || process.env.emailAdress,
    pass: '' || process.env.emailPassword
  }
})

module.exports = transporter
