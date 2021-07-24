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
          isAuth: false,
          massage: 'Connection Error',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
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
          isAuth: false,
          massage: 'Cannot get user info',
          error: err,
          data: null
        })
      } else if (!results) {
        return res.json({
          isAuth: false,
          massage: 'Cannot found any records',
          error: err,
          data: null
        })
      } else {
        return res.json({
          isAuth: true,
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
          isAuth: false,
          massage: 'Cannot update the user',
          error: err,
          data: null
        })
      } else {
        return res.json({
          isAuth: true,
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
          isAuth: false,
          isLoggedIn: false,
          massage: 'Some Error Happened!',
          error: err,
          data: null
        })
      } else if (!results) {
        return res.json({
          isAuth: false,
          isLoggedIn: false,
          data: 'Invalid email or password',
          error: err,
          data: null
        })
      }

      const result = compareSync(body.user_password, results.user_password)

      var today = new Date()
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      var dateTime = date + ' ' + time

      if (result) {
        results.user_password = undefined
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: '1h'
        })
        return res.json({
          isAuth: true,
          isLoggedIn: true,
          loginTime: dateTime,
          userEmail: results.user_email,
          userNameuserSurname: results.user_name + ' ' + results.user_surname,
          token: jsontoken
        })
      } else {
        return res.json({
          isAuth: false,
          isLoggedIn: false,
          data: 'Invalid email or password',
          error: err,
          data: null
        })
      }
    })
  }
}
