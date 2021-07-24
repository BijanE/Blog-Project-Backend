const dbConn = require('../../config/db.config')

module.exports = {
  create_blog: (data, callback) => {
    dbConn.query(
      'INSERT INTO blog (blog_title, blog_slug, blog_summary, blog_catagory, blog_content) VALUES (?,?,?,?,?)',
      [data.blog_title, data.blog_slug, data.blog_summary, data.blog_catagory, data.blog_content],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        } else {
          return callback(null, results)
        }
      }
    )
  },
  get_all_blog_main_menu: (callback) => {
    dbConn.query(
      'SELECT blog_id, blog_title, blog_slug, blog_summary FROM blog ORDER BY blog_id DESC',
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
  get_blog_by_catagory: (data, callback) => {
    dbConn.query(
      'SELECT blog_id ,blog_title, blog_slug, blog_summary FROM blog WHERE blog_catagory=?',
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
  get_blog_content_by_id: (data, callback) => {
    dbConn.query(
      'SELECT blog_title, blog_slug, blog_catagory, blog_content FROM blog WHERE blog_id=?',
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
  update_blog: (data, callback) => {
    dbConn.query(
      'UPDATE blog set blog_title=?, blog_slug=?, blog_catagory=?, blog_summary=?,blog_content=? WHERE blog_id=?',
      [
        data.blog_title,
        data.blog_slug,
        data.blog_catagory,
        data.blog_summary,
        data.blog_content,
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
  delete_blog: (data, callback) => {
    dbConn.query('DELETE FROM blog WHERE blog_id=?', [data.blog_id], (error, results, fields) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null, results)
      }
    })
  },
  get_by_pagenation: (data, callback) => {
    const page_number = (data.page_number - 1) * 10
    dbConn.query(
      'SELECT blog_id, blog_title, blog_slug, blog_summary, blog_catagory FROM blog ORDER BY blog_id DESC LIMIT 10 OFFSET ' +
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
