const {
  create_blog,
  get_all_blog_main_menu,
  get_blog_by_catagory,
  get_blog_content_by_id,
  update_blog,
  delete_blog,
  get_by_pagenation
} = require('../controllers/blog.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')

// For create new blog *Only Admin
router.post('/', checkToken, create_blog)

// For main menu blog show
router.get('/main_menu', get_all_blog_main_menu)

// For main menu blog catagory show
router.get('/catagory', get_blog_by_catagory)

// For getting blog content
router.get('/content', get_blog_content_by_id)

// For updating blog *Only Admin
router.patch('/', checkToken, update_blog)

// For deleting a blog *Only Admin
router.delete('/', checkToken, delete_blog)

// For getting blogs by pagenation
router.get('/pagenation', get_by_pagenation)

module.exports = router
