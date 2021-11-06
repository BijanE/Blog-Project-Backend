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

  // For get blog that belongs to a catagory by catagory *Language
  get_blog_by_catagory: (data, callback) => {
    dbConn.query(
      'SELECT blog_id ,blog_title, blog_slug, blog_summary, blog_photo FROM blog WHERE blog_catagory=?',
      [data.blog_catagory],
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
  },

  // For getting blog infos with pagenation for landing page
  get_by_pagenation: (data, callback) => {
    const page_number = (data.page_number - 1) * 10
    dbConn.query(
      'SELECT blog_id, blog_title, blog_slug, blog_summary, blog_catagory, blog_photo FROM blog ORDER BY blog_id DESC LIMIT 10 OFFSET ' +
        page_number,
      [],
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
