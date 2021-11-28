const {
  create_blog,
  get_all_blog_main_menu,
  get_blog_content_by_id,
  update_blog,
  delete_blog,
  get_blog_navbar
} = require('../models/blog.model')

module.exports = {
  // For creating a blog
  create_blog: (req, res) => {
    const body = req.body
    const images = req.file.path
    create_blog(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot create a blog'
        })
      } else {
        return res.status(201).json({
          isAuth: true,
          massage: 'Blog başarıyla oluşturuldu',
          data: results
        })
      }
    })
  },

  // For landing page showing the blogs
  get_all_blog_main_menu: (req, res) => {
    get_all_blog_main_menu((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the blogs',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No blogs found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Landing page blogs got successfuly',
          data: results
        })
      }
    })
  },

  //For getting blog info for navbar
  get_blog_navbar: (req, res) => {
    get_blog_navbar((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the blogs',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No blogs found',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'navbar blogs got successfuly',
          data: results
        })
      }
    })
  },

  // For deleting a blog from database
  delete_blog: (req, res) => {
    const body = req.body
    delete_blog(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot delete the blog',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'Blog is deleted successfuly',
          data: results
        })
      }
    })
  },

  // For get the content of the specific blog with blog id
  get_blog_content_by_id: (req, res) => {
    const body = req.body
    get_blog_content_by_id(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot get the blog',
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'No blog found',
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
  update_blog: (req, res) => {
    const body = req.body
    const images = req.file.path
    update_blog(body, images, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          error: err,
          massage: 'Cannot update the blog',
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          message: 'blog is updated successfully',
          data: results
        })
      }
    })
  }
}
