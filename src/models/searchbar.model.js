const dbConn = require('../../config/db.config')

module.exports = {
  get_searchbar: (data, callback) => {
    dbConn.query(
      'Select blog_id,blog_title,blog_slug from blog where blog_title LIKE "%' +
        data.search +
        '%" union select hizmet_id, hizmet_title,hizmet_slug from hizmetler WHERE hizmet_title LIKE "%' +
        data.search +
        '%" union select sektorler_id, sektorler_title,sektorler_slug from sektorler WHERE sektorler_title LIKE "%' +
        data.search +
        '%";',
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
