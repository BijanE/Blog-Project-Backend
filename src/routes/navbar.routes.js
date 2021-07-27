const {
  create_navbar_content,
  create_navbar_title,
  get_all_navbar_title,
  get_navbar_title_content,
  update_navbar_title,
  update_title_content,
  delete_navbar_title,
  delete_title_content
} = require('../controllers/navbar.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')

// For creating navbar content and titles *Only admins
router.post('/navbarContent', checkToken, create_navbar_content)

// For creating navbar parts *Only admins
router.post('/navbarTitle', checkToken, create_navbar_title)

// For get all the navbar parts *For commertial
router.get('/navbarAll', get_all_navbar_title)

// For get navbar content and titles *For commertial
router.get('/navbarContent', get_navbar_title_content)

// For update the navbar parts *Only for admins
router.patch('/title', checkToken, update_navbar_title)

// For update the navbar titles and content in it *Only for admins
router.patch('/content', checkToken, update_title_content)

// For delete the navbar parts *Only for admins
router.delete('/title', checkToken, delete_navbar_title)

// For delete the navbar content and titles *Only for admins
router.delete('/content', checkToken, delete_title_content)

module.exports = router
