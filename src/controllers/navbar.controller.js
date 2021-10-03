const {
  create_navbar_title,
  create_navbar_content,
  get_all_navbar_title,
  get_navbar_title_content,
  update_navbar_title,
  update_title_content,
  delete_navbar_title,
  delete_title_content
} = require('../models/navbar.model')

module.exports = {
  // For creating the navbar title
  create_navbar_title: (req, res) => {
    const body = req.body
    create_navbar_title(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot create a navbar title',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Navbar title is created successfuly',
          data: results
        })
      }
    })
  },

  // For creating the navbar content
  create_navbar_content: (req, res) => {
    const body = req.body
    create_navbar_content(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot create a navbar content',
          data: null
        })
      } else {
        return res.status(201).json({
          isAuth: true,
          massage: 'Başarıyla oluşturuldu',
          data: results
        })
      }
    })
  },

  // For get all of the navbar titles
  get_all_navbar_title: (req, res) => {
    get_all_navbar_title((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the navbar titles',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No navbar title founded',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Titles got successfuly',
          data: results
        })
      }
    })
  },

  // For get the navbar titles content by title content id
  get_navbar_title_content: (req, res) => {
    const body = req.body
    get_navbar_title_content(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the title content',
          data: null
        })
      } else if (results == null) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No title content found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Title content got successfuly by id',
          data: results
        })
      }
    })
  },

  // For updating the navbar titles
  update_navbar_title: (req, res) => {
    const body = req.body
    update_navbar_title(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot update navbar',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'The navbar is updated successfuly',
          data: results
        })
      }
    })
  },

  // For updating the navbar titles content in it
  update_title_content: (req, res) => {
    const body = req.body
    update_title_content(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot update title content',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'The title content is updated successfuly',
          data: results
        })
      }
    })
  },

  // For delete navbar titles
  delete_navbar_title: (req, res) => {
    const body = req.body
    delete_navbar_title(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot delete navbar and its contents',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'The navbar deleted successfuly',
          data: results
        })
      }
    })
  },

  // For delete navbar titles content in it
  delete_title_content: (req, res) => {
    const body = req.body
    delete_title_content(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot delete title content',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'The title content is deleted successfuly',
          data: results
        })
      }
    })
  }
}
