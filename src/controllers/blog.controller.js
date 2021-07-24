const {
  create_blog,
  get_all_blog_main_menu,
  get_blog_by_catagory,
  get_blog_content_by_id,
  update_blog,
  delete_blog,
  get_by_pagenation
} = require('../models/blog.model')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { updateUser } = require('../models/user.model')

module.exports = {
  create_blog: (req, res) => {
    const body = req.body
    create_blog(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot create a blog'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  get_all_blog_main_menu: (req, res) => {
    get_all_blog_main_menu((err, results) => {
      if (err) {
        return res.json({
          success: 0,
          massage: 'Cannot get blogs'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'No blog found'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  delete_blog: (req, res) => {
    const body = req.body
    delete_blog(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot delete a blog'
        })
      } else {
        return res.json({
          success: 1,
          massage: 'Blog deleted successfuly'
        })
      }
    })
  },
  get_blog_content_by_id: (req, res) => {
    const body = req.body
    get_blog_content_by_id(body, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          massage: 'Cannot get blog'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'No blog found'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  get_blog_by_catagory: (req, res) => {
    const body = req.body
    get_blog_by_catagory(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot get blogs'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'No blog found'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  update_blog: (req, res) => {
    const body = req.body
    update_blog(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot update the blog'
        })
      } else {
        return res.json({
          success: 1,
          message: 'blog updated successfully'
        })
      }
    })
  },
  get_by_pagenation: (req, res) => {
    const body = req.body
    get_by_pagenation(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot get blogs'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'No blog found'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  }
}
