const dbConn = require('../../config/db.config')

module.exports = {
  get_searchbar: (data, callback) => {
    dbConn.query(
      'Select * from hizmetler where hizmet_title LIKE "%' +
        data.search +
        '%" union Select * from blog where blog_title LIKE "%' +
        data.search +
        '%" union Select * from sektorler where sektorler_title LIKE "%' +
        data.search +
        '%"',
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else if (results == null) {
          return callback(null, null)
        } else {
          return callback(null, results)
        }
      }
    )
  }
}
