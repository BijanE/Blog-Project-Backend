const {
  create_sektor,
  get_all_sektor_for_landing_page,
  get_sektor_content_by_id,
  update_sektor,
  delete_sektor,
  get_sektor_for_navbar
} = require('../controllers/sektorler.controller.js')
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

// For create new sektor *Only Admin
router.post('/', upload.single('sektorler_photo'), checkToken, create_sektor)

// For main menu sektor show
router.get('/main_menu', get_all_sektor_for_landing_page)

// For getting sektor content
router.get('/content', get_sektor_content_by_id)

// For updating sektor *Only Admin
router.patch('/', upload.single('sektorler_photo'), checkToken, update_sektor)

// For deleting a sektor *Only Admin
router.delete('/', checkToken, delete_sektor)

// For getting sektorler navbar
router.get('/navbar', get_sektor_for_navbar)

module.exports = router
