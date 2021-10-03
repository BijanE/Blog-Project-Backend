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
        return res.status(500).json({
          isAuth: false,
          massage: 'Connection Error Happened',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          massage: 'The user has been created successfuly',
          error: null,
          data: results
        })
      }
    })
  },

  // Get info controller
  getusers: (req, res) => {
    getusers((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot get user info',
          error: err,
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot found any records',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          massage: 'The users infos got successfuly',
          error: null,
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
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot update the user',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          message: 'user updated successfully',
          error: null,
          data: results
        })
      }
    })
  },

  // Login controller
  login: (req, res) => {
    const body = req.body
    getUserByUserEmail(body.user_email, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          isLoggedIn: false,
          massage: 'Some Error Happened!',
          error: err,
          data: null
        })
      } else if (!results) {
        return res.status(400).json({
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
        const jsontoken = sign(
          { result: results },
          process.env.JWT_KEY ||
            '5a656ce1f193e1aad3bbb98f5b39ce4bb2eacbab5eb6fcc04d52b42fbdc4802c9b19f4ccd8f4ecab797af3b8e9d9692e6aab83578618eefe8a9181a8dd00214b',
          {
            expiresIn: '1h'
          }
        )
        return res.status(200).json({
          isAuth: true,
          isLoggedIn: true,
          loginTime: dateTime,
          userEmail: results.user_email,
          userNameuserSurname: results.user_name + ' ' + results.user_surname,
          token: jsontoken
        })
      } else {
        return res.status(400).json({
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
