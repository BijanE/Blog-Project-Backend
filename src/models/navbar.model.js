const dbConn = require('../../config/db.config')

module.exports = {
  create_navbar_title: (data, callback) => {
    dbConn.query(
      'INSERT INTO navbar_content (navbar_content_title, navbar_content_slug) VALUES (?,?)',
      [data.navbar_content_title, data.navbar_content_slug],
      (erorr, results, fields) => {
        if (erorr) {
          return callback(erorr)
        } else {
          return callback(null, results)
        }
      }
    )
  },
  update_navbar_title: (data, callback) => {
    dbConn.query(
      'UPDATE navbar_content set navbar_content_title=? , navbar_content_slug=? WEHERE navbar_content_id=?',
      [data.navbar_content_title, data.navbar_content_slug, data.navbar_content_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results[0])
        }
      }
    )
  },
  delete_navbar_title: (data, callback) => {
    dbConn.query(
      'DELETE FROM navbar_content WHERE navbar_content_id=?',
      [data.navbar_content_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },
  get_all_navbar_title: (callback) => {
    dbConn.query('SELECT * FROM navbar_content', [], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(results)
      }
    })
  },
  get_navbar_title_by_id: (data, callback) => {
    dbConn.query(
      'SELECT * FROM navbar_content WHERE navbar_content_id=?',
      [data.navbar_content_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },
  get_navbar_title_content: (data, callback) => {
    dbConn.query('SELECT title_content_title, title_content_slug FROM title_content WHERE ')
  }
}
