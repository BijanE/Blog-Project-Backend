const dbConn = require('../../config/db.config')

module.exports = {
  // For creating navbar title
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

  // For creating a navbar content
  create_navbar_content: (data, callback) => {
    dbConn.query(
      'INSERT INTO title_content (title_content_title, title_content_slug, title_content_content, title_content_navbar_title) VALUES (?,?,?,?)',
      [
        data.title_content_title,
        data.title_content_slug,
        data.title_content_content,
        data.title_content_navbar_title
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // For getting all navbar titles * FOR LİSTİNG AND USE IN INSERT
  get_all_navbar_title: (callback) => {
    dbConn.query(
      'SELECT navbar_content_id, navbar_content_title, navbar_content_slug FROM navbar_content ORDER BY ASC',
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(results)
        }
      }
    )
  },

  // For getting navbar title content
  get_navbar_title_content: (data, callback) => {
    dbConn.query(
      'SELECT title_content_id, title_content_title, title_content_slug FROM title_content WHERE title_content_navbar_title=?',
      [data.navbar_content_title],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // For updating navbar title
  update_navbar_title: (data, callback) => {
    dbConn.query(
      'UPDATE title_content set title_content_navbar_title=? WHERE title_content_navbar_title=?',
      [data.navbar_content_title, data.old_navbar_content_title]
    )
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

  // For updating title content
  update_title_content: (data, callback) => {},

  // For deleting navbar title by navbar title
  delete_navbar_title: (data, callback) => {
    dbConn.query('DELETE FROM title_content WHERE title_content_navbar_title=?', [
      data.navbar_content_title
    ])
    dbConn.query(
      'DELETE FROM navbar_content WHERE navbar_content_title=?',
      [data.navbar_content_title],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // For deleting title content
  delete_title_content: (data, callback) => {}
}
