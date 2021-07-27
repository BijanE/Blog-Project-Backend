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
        return res.json({
          isAuth: false,
          massage: 'Cannot create a navbar title'
        })
      } else {
        return res.json({
          isAuth: true,
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
        return res.json({
          isAuth: false,
          massage: 'Cannot create a navbar content'
        })
      } else {
        return res.json({
          isAuth: true,
          data: results
        })
      }
    })
  },

  // For get all of the navbar titles
  get_all_navbar_title: (req, res) => {
    get_all_navbar_title((err, results) => {
      if (err) {
        return res.json({
          isAuth: false,
          massage: 'Cannot get the navbar titles'
        })
      } else if (!results) {
        return res.json({
          isAuth: false,
          massage: 'No navbar title founded'
        })
      } else {
        return res.json({
          isAuth: true,
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
        return res.json({
          isAuth: false,
          massage: 'Cannot get the title content'
        })
      } else if (results == null) {
        return res.json({
          isAuth: false,
          massage: 'No title content found'
        })
      } else {
        return res.json({
          isAuth: true,
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
        return res.json({
          isAuth: false,
          massage: 'Cannot update navbar'
        })
      } else {
        return res.json({
          isAuth: true,
          massage: 'The navbar is updated successfuly'
        })
      }
    })
  },

  // For updating the navbar titles content in it
  update_title_content: (req, res) => {
    const body = req.body
    update_title_content(body, (err, results) => {
      if (err) {
        return res.json({
          isAuth: false,
          massage: 'Cannot update title content'
        })
      } else {
        return res.json({
          isAuth: true,
          massage: 'The title content is updated successfuly'
        })
      }
    })
  },

  // For delete navbar titles
  delete_navbar_title: (req, res) => {
    const body = req.body
    delete_navbar_title(body, (err, results) => {
      if (err) {
        return res.json({
          isAuth: false,
          massage: 'Cannot delete navbar and its contents'
        })
      } else {
        return res.json({
          isAuth: true,
          massage: 'The navbar deleted successfuly'
        })
      }
    })
  },

  // For delete navbar titles content in it
  delete_title_content: (req, res) => {
    const body = req.body
    delete_title_content(body, (err, results) => {
      if (err) {
        return res.json({
          isAuth: false,
          massage: 'Cannot delete title content'
        })
      } else {
        return res.json({
          isAuth: true,
          massage: 'The title content is deleted successfuly'
        })
      }
    })
  }
}
