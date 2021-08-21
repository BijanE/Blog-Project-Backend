const { create_user, getusers, updateUsers, login } = require('../controllers/user.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')

// For creating the Admin *Only Admin
router.post('/', checkToken, create_user)

// For get Admin name and surname *Only Admin
router.get('/', checkToken, getusers)

// For update admins email or password *Only Admin
router.patch('/', checkToken, updateUsers)

// For Login *Only admins but no token needed
router.get('/login', login)

module.exports = router
