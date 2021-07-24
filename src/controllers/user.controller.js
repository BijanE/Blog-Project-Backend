const { create, getusers, updateUser, getUserByUserEmail } = require('../models/user.model')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

require('dotenv').config()

module.exports = {
  // Create user controller
  create_user: (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    body.user_password = hashSync(body.user_password, salt)
    create(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: 0,
          massage: 'Connection Error'
        })
      } else {
        return res.status(200).json({
          success: 1,
          data: results
        })
      }
    })
  },

  // Get info controller
  getusers: (req, res) => {
    getusers((err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot get user info'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'Cannot found any records'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },

  // Update controller
  updateUsers: (req, res) => {
    const body = req.body
    const salt = genSaltSync(10)
    body.user_password = hashSync(body.user_password, salt)
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot update the user'
        })
      } else {
        return res.json({
          success: 1,
          message: 'user updated successfully'
        })
      }
    })
  },

  // Login controller
  login: (req, res) => {
    const body = req.body
    getUserByUserEmail(body.user_email, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Some Error Happened!'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          data: 'Invalid email or password'
        })
      }

      const result = compareSync(body.user_password, results.user_password)

      if (result) {
        results.user_password = undefined
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: '1h'
        })
        return res.json({
          success: 1,
          message: 'login is successfully',
          token: jsontoken
        })
      } else {
        return res.json({
          success: 0,
          data: 'Invalid email or password'
        })
      }
    })
  }
}
