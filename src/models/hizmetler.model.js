const dbConn = require('../../config/db.config')

module.exports = {
  // For creating a hizmet by admin
  create_hizmet: (data, images, callback) => {
    dbConn.query(
      'INSERT INTO hizmetler (hizmet_title, hizmet_slug, hizmet_summary, hizmet_content, hizmet_photo) VALUES (?,?,?,?,?)',
      [
        data.hizmet_title,
        data.hizmet_slug,
        data.hizmet_summary,
        data.hizmet_content,
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

  // For getting hizmet infos for navbar order by id
  get_hizmet_for_navbar: (callback) => {
    dbConn.query(
      'SELECT hizmet_id, hizmet_title, hizmet_slug FROM hizmetler ORDER BY hizmet_id DESC limit 5',
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

  // For getting hizmet infos for landing page order by id
  get_all_hizmet_for_landing_page: (callback) => {
    dbConn.query(
      'SELECT hizmet_id, hizmet_title, hizmet_slug, hizmet_summary, hizmet_photo FROM hizmetler ORDER BY hizmet_id DESC',
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

  // For get hizmetler content by hizmet id
  get_hizmet_content_by_id: (data, callback) => {
    dbConn.query(
      'SELECT hizmet_title, hizmet_slug, hizmet_content, hizmet_photo FROM hizmetler WHERE hizmet_id=?',
      [data.hizmet_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          callback(null, results)
        }
      }
    )
  },

  // For updating a hizmet with its hizmet id
  update_hizmet: (data, images, callback) => {
    dbConn.query(
      'UPDATE hizmet set hizmet_title=?, hizmet_slug=?, hizmet_summary=?,hizmet_content=?, hizmet_photo=? WHERE hizmet_id=?',
      [
        data.hizmet_title,
        data.hizmet_slug,
        data.hizmet_summary,
        data.hizmet_content,
        'https://web-project-july-2021.herokuapp.com/' + images,
        data.hizmet_id
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

  // For deleting a hizmet with its hizmet id
  delete_hizmet: (data, callback) => {
    dbConn.query(
      'DELETE FROM hizmetler WHERE hizmet_id=?',
      [data.hizmet_id],
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
