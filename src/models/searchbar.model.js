const dbConn = require('../../config/db.config')

module.exports = {
  get_searchbar: (data, callback) => {
    dbConn.query(
      'SELECT * FROM title_content WHERE title_content_title LIKE "%' + data.search + '%"',
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
