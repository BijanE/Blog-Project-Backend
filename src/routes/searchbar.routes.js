const { get_searchbar } = require('../controllers/searchbar.controller')
const router = require('express').Router()

// For searchbar use *For commertial
router.get('/', get_searchbar)

module.exports = router
