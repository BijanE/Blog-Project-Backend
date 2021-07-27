const { get_searchbar } = require('../models/searchbar.model')

module.exports = {
  get_searchbar: (req, res) => {
    const body = req.body
    get_searchbar(body, (err, results) => {
      if (err) {
        return res.json({
          isAuth: false,
          massage: 'Cannot get the searchbar content'
        })
      } else if (results == null) {
        return res.json({
          isAuth: false,
          massage: 'Cannot found any searchbar content'
        })
      } else {
        return res.json({
          isAuth: true,
          data: results
        })
      }
    })
  }
}
