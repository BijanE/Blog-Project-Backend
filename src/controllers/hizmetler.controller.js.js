const {
  create_hizmet,
  get_all_hizmet_for_landing_page,
  get_hizmet_content_by_id,
  update_hizmet,
  delete_hizmet,
  get_hizmet_for_navbar
} = require('../models/hizmetler.model')

module.exports = {
  // For creating a hizmet
  create_hizmet: (req, res) => {
    const body = req.body
    const images = req.file.path
    create_hizmet(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot create a hizmet'
        })
      } else {
        return res.status(201).json({
          isAuth: true,
          massage: 'hizmet başarıyla oluşturuldu',
          data: results
        })
      }
    })
  },

  // For landing page showing the hizmetler
  get_all_hizmet_for_landing_page: (req, res) => {
    get_all_hizmet_for_landing_page((err, results) => {
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
          massage: 'Landing page hizmetler got successfuly',
          data: results
        })
      }
    })
  },

  // For deleting a hizmet from database
  delete_hizmet: (req, res) => {
    const body = req.body
    delete_hizmet(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot delete the hizmet',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'hizmet is deleted successfuly',
          data: results
        })
      }
    })
  },

  // For get the content of the specific hizmet with hizmet id
  get_hizmet_content_by_id: (req, res) => {
    const body = req.body
    get_hizmet_content_by_id(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the hizmet',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No hizmet found',
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
  update_hizmet: (req, res) => {
    const body = req.body
    const images = req.file.path
    update_hizmet(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot update the hizmet',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          message: 'hizmet is updated successfully',
          data: results
        })
      }
    })
  },

  // For getting navbar content of hizmetler
  get_hizmet_for_navbar: (req, res) => {
    get_hizmet_for_navbar((err, results) => {
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
