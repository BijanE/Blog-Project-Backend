const { get_searchbar } = require('../controllers/searchbar.controller')
const router = require('express').Router()

router.get('/', get_searchbar)

module.exports = router
