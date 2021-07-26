const jwt = require('jsonwebtoken')

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get('authorization')
    if (token) {
      // Remove Bearer from the string
      token = token.slice(7)
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            isAuth: false,
            message: 'Token is Invalid'
          })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      return res.json({
        isAuth: false,
        message: 'Access Denied! Unauthorized User'
      })
    }
  }
}
