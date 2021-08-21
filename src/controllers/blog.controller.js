const {
  create_blog,
  get_all_blog_main_menu,
  get_blog_by_catagory,
  get_blog_content_by_id,
  update_blog,
  delete_blog,
  get_by_pagenation
} = require('../models/blog.model')

module.exports = {
  // For creating a blog
  create_blog: (req, res) => {
    const body = req.body
    create_blog(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
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
          massage: 'Cannot get the blogs'
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'No blogs found'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
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
          massage: 'Cannot delete the blog'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          massage: 'Blog is deleted successfuly'
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
          massage: 'Cannot get the blog'
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'No blog found'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          data: results
        })
      }
    })
  },

  // For get the blogs that belongs to a catagory
  get_blog_by_catagory: (req, res) => {
    const body = req.body
    get_blog_by_catagory(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot get the blogs'
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'No blogs found'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          data: results
        })
      }
    })
  },

  // For updating a blog and its content
  update_blog: (req, res) => {
    const body = req.body
    update_blog(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot update the blog'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          message: 'blog is updated successfully'
        })
      }
    })
  },

  // For pagenationing the blogs
  get_by_pagenation: (req, res) => {
    const body = req.body
    get_by_pagenation(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot get the blogs'
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'No blogs found'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          data: results
        })
      }
    })
  }
}
