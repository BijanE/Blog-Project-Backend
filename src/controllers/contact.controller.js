const { create_contact, get_contact, delete_contact } = require('../models/contact.model')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
  create_contact: (req, res) => {
    const body = req.body
    create_contact(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot create a contact'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  get_contact: (req, res) => {
    get_contact((err, results) => {
      if (err) {
        return res.json({
          success: 0,
          massage: 'Cannot get contacts'
        })
      } else if (!results) {
        return res.json({
          success: 0,
          massage: 'No contact found'
        })
      } else {
        return res.json({
          success: 1,
          data: results
        })
      }
    })
  },
  delete_contact: (req, res) => {
    const body = req.body
    delete_contact(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.json({
          success: 0,
          massage: 'Cannot delete a contact'
        })
      } else {
        return res.json({
          success: 1,
          massage: 'Contact deleted successfuly'
        })
      }
    })
  }
}
