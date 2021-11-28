const {
  create_contact,
  get_contact,
  delete_contact,
  sendEmail
} = require('../controllers/contact.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')

// For writing contact massages
router.post('/', create_contact)

// For view contact massages *Only Admin
router.get('/', checkToken, get_contact)

// For delete contact massages *Only Admin
router.delete('/', checkToken, delete_contact)

//For send a email
router.post('/sendemail', sendEmail)

module.exports = router
