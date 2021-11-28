const {
  create_sektor,
  get_all_sektor_for_landing_page,
  get_sektor_content_by_id,
  update_sektor,
  delete_sektor,
  get_sektor_for_navbar
} = require('../models/sektorler.model')

module.exports = {
  // For creating a sektor
  create_sektor: (req, res) => {
    const body = req.body
    const images = req.file.path
    create_sektor(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot create a sektor'
        })
      } else {
        return res.status(201).json({
          isAuth: true,
          massage: 'sektor başarıyla oluşturuldu',
          data: results
        })
      }
    })
  },

  // For landing page showing the hizmetler
  get_all_sektor_for_landing_page: (req, res) => {
    get_all_sektor_for_landing_page((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the sektor',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No sektor found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Landing page sektor got successfuly',
          data: results
        })
      }
    })
  },

  // For deleting a sektor from database
  delete_sektor: (req, res) => {
    const body = req.body
    delete_sektor(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot delete the sektor',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'sektor is deleted successfuly',
          data: results
        })
      }
    })
  },

  // For get the content of the specific hizmet with hizmet id
  get_sektor_content_by_id: (req, res) => {
    const body = req.body
    get_sektor_content_by_id(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the sektor',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No sektor found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Successfuly operation compeleted',
          data: results
        })
      }
    })
  },

  // For updating a blog and its content
  update_sektor: (req, res) => {
    const body = req.body
    const images = req.file.path
    update_sektor(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot update the sektor',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          message: 'sektor is updated successfully',
          data: results
        })
      }
    })
  },

  // For getting navbar content of sektorler
  get_sektor_for_navbar: (req, res) => {
    get_sektor_for_navbar((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the hizmetler',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No hizmetler found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'navbar hizmetler got successfuly',
          data: results
        })
      }
    })
  }
}
