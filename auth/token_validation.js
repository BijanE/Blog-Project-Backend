const jwt = require('jsonwebtoken')

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get('authorization')
    if (token) {
      // Remove Bearer from the string
      token = token.slice(7)
      jwt.verify(
        token,
        process.env.JWT_KEY ||
          '5a656ce1f193e1aad3bbb98f5b39ce4bb2eacbab5eb6fcc04d52b42fbdc4802c9b19f4ccd8f4ecab797af3b8e9d9692e6aab83578618eefe8a9181a8dd00214b',
        (err, decoded) => {
          if (err) {
            return res.json({
              isAuth: false,
              message: 'Token is Invalid'
            })
          } else {
            req.decoded = decoded
            next()
          }
        }
      )
    } else {
      return res.json({
        isAuth: false,
        message: 'Access Denied! Unauthorized User'
      })
    }
  }
}
