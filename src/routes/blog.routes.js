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

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './photos')
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      'image/jpeg': '.jpeg',
      'image/jpg': '.jpg',
      'image/png': '.png',
      'image/gif': '.gif'
    }
    cb(null, file.fieldname + '-' + Date.now() + mimeExtension[file.mimetype])
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/gif'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      req.fileError = 'File format is not valid'
    }
  }
})

// For create new blog *Only Admin
router.post('/', upload.single('blog_photo'), checkToken, create_blog)

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
