const {
  create_hizmet,
  get_all_hizmet_for_landing_page,
  get_hizmet_content_by_id,
  update_hizmet,
  delete_hizmet,
  get_hizmet_for_navbar
} = require('../controllers/hizmetler.controller.js')
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

// For create new hizmet *Only Admin
router.post('/', upload.single('hizmet_photo'), checkToken, create_hizmet)

// For main menu hizmet show
router.get('/main_menu', get_all_hizmet_for_landing_page)

// For getting hizmet content
router.get('/content', get_hizmet_content_by_id)

// For updating hizmet *Only Admin
router.patch('/', upload.single('hizmet_photo'), checkToken, update_hizmet)

// For deleting a hizmet *Only Admin
router.delete('/', checkToken, delete_hizmet)

// For getting hizmetler navbar
router.get('/navbar', get_hizmet_for_navbar)

module.exports = router
