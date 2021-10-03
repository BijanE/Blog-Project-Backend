const { get_searchbar } = require('../models/searchbar.model')

module.exports = {
  // For use the search bar * For commertial
  get_searchbar: (req, res) => {
    const body = req.body
    get_searchbar(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot get the searchbar content',
          error: err,
          data: null
        })
      } else if (results == null) {
        return res.status(400).json({
          isAuth: false,
          massage: 'Cannot found any searchbar content',
          error: err,
          data: null
        })
      } else {
        return res.status(200).json({
          isAuth: true,
          error: null,
          massage: 'The searchbar is working',
          data: results
        })
      }
    })
  }
}
