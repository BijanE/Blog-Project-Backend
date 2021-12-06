const dbConn = require('../../config/db.config')

module.exports = {
  // For creating a blog by admin
  create_blog: (data, images, callback) => {
    dbConn.query(
      'INSERT INTO blog (blog_title, blog_slug, blog_summary, blog_catagory, blog_content, blog_photo) VALUES (?,?,?,?,?,?)',
      [
        data.blog_title,
        data.blog_slug,
        data.blog_summary,
        data.blog_catagory,
        data.blog_content,
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

  // For getting blog infos for landing page order by id
  get_all_blog_main_menu: (callback) => {
    dbConn.query(
      'SELECT blog_id, blog_title, blog_slug, blog_summary, blog_photo FROM blog ORDER BY blog_id DESC',
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

  // For getting blogs for navbar order by id
  get_blog_navbar: (callback) => {
    dbConn.query(
      'SELECT blog_id, blog_title, blog_slug FROM blog ORDER BY blog_id DESC limit 5',
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

  // For get blogs content by blog id
  get_blog_content_by_id: (data, callback) => {
    dbConn.query(
      'SELECT blog_title, blog_slug, blog_catagory, blog_content, blog_photo FROM blog WHERE blog_id=?',
      [data.blog_id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          callback(null, results)
        }
      }
    )
  },

  // For updating a blog with its blog id
  update_blog: (data, images, callback) => {
    dbConn.query(
      'UPDATE blog set blog_title=?, blog_slug=?, blog_catagory=?, blog_summary=?,blog_content=?, blog_photo WHERE blog_id=?',
      [
        data.blog_title,
        data.blog_slug,
        data.blog_catagory,
        data.blog_summary,
        data.blog_content,
        'https://web-project-july-2021.herokuapp.com/' + images,
        data.blog_id
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

  // For deleting a blog with its blog id
  delete_blog: (data, callback) => {
    dbConn.query('DELETE FROM blog WHERE blog_id=?', [data.blog_id], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  }
}
