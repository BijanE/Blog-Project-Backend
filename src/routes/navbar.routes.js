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

router.post('/navbarContent', checkToken, create_navbar_content)

router.post('/navbarTitle', checkToken, create_navbar_title)

router.get('/navbarAll', get_all_navbar_title)

router.get('/navbarContent', get_navbar_title_content)

router.patch('/title', checkToken, update_navbar_title)

router.patch('/content', checkToken, update_title_content)

router.delete('/title', checkToken, delete_navbar_title)

router.delete('/content', checkToken, delete_title_content)

module.exports = router
