const { create_contact, get_contact, delete_contact } = require('../models/contact.model')

module.exports = {
  // For sending or creating contact with them
  create_contact: (req, res) => {
    const body = req.body
    create_contact(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot create a contact massage'
        })
      } else {
        return res.status(201).json({
          isAuth: true,
          data: results
        })
      }
    })
  },

  // For getting the contact massages that has been sended
  get_contact: (req, res) => {
    get_contact((err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot get the contact massages'
        })
      } else if (!results) {
        return res.status(400).json({
          isAuth: false,
          massage: 'No contact massages found'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          data: results
        })
      }
    })
  },

  // For deleting the contact massage with its id
  delete_contact: (req, res) => {
    const body = req.body
    delete_contact(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot delete a contact massage'
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          massage: 'Contact massage is deleted successfuly'
        })
      }
    })
  }
}
