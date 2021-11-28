const dbConn = require('../../config/db.config')

module.exports = {
  // For creating a sektorler by admin
  create_sektor: (data, images, callback) => {
    dbConn.query(
      'INSERT INTO sektorler (sektorler_title, sektorler_slug, sektorler_summary, sektorler_content, sektorler_photo) VALUES (?,?,?,?,?)',
      [
        data.sektorler_title,
        data.sektorler_slug,
        data.sektorler_summary,
        data.sektorler_content,
        'https://web-project-july-2021.herokuapp.com/' + images
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

  // For getting sektorler infos for navbar order by id
  get_sektor_for_navbar: (callback) => {
    dbConn.query(
      'SELECT sektorler_id, sektorler_title, sektorler_slug FROM sektorler ORDER BY sektorler_id DESC',
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // For getting sektor infos for landing page order by id
  get_all_sektor_for_landing_page: (callback) => {
    dbConn.query(
      'SELECT sektorler_id, sektorler_title, sektorler_slug, sektorler_summary, sektorler_photo FROM sektorler ORDER BY sektorler_id DESC',
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },

  // For get sektor content by sektor id
  get_sektor_content_by_id: (data, callback) => {
    dbConn.query(
      'SELECT sektorler_title, sektorler_slug, sektorler_content, sektorler_photo FROM hizmetler WHERE sektorler_id=?',
      [data.sektorler_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          callback(null, results)
        }
      }
    )
  },

  // For updating a sektor with its sektor id
  update_sektor: (data, images, callback) => {
    dbConn.query(
      'UPDATE sektorler set sektorler_title=?, sektorler_slug=?, sektorler_summary=?,sektorler_content=?, sektorler_photo WHERE sektorler_id=?',
      [
        data.sektorler_title,
        data.sektorler_slug,
        data.sektorler_summary,
        data.sektorler_content,
        'https://web-project-july-2021.herokuapp.com/' + images,
        data.sektorler_id
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results[0])
        }
      }
    )
  },

  // For deleting a sektor with its sektor id
  delete_sektor: (data, callback) => {
    dbConn.query(
      'DELETE FROM sektorler WHERE sektorler_id=?',
      [data.sektorler_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  }
}
