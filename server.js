const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Create express app
const app = express()

app.use('/photos', express.static('photos'))

// use cookie parser
app.use(cookieParser())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// Import dotenv
require('dotenv').config()

// Setup server port
const PORT = process.env.PORT || 8080

const corsOptions = {
  //To allow requests from client
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1',
    'https://dd-frontend-five.vercel.app',
    'https://web-project-july-2021.herokuapp.com'
  ],
  credentials: true,
  withCredentials: true,
  exposedHeaders: ['set-cookie']
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  )
  next()
})

// Cors options
app.use(cors(corsOptions))

// define a root route
app.get('/', (req, res) => {
  res.send('This Backend Is Working...')
})

// define a api route
app.get('/api', (req, res) => {
  res.json({
    isAuth: true,
    massage: 'this app is working...'
  })
})

// Require routes

// Only User Rout
const UserRouter = require('./src/routes/user.routes')

// Contact Rout
const ContactRouter = require('./src/routes/contact.routes')

// Blog Rout
const BlogRouter = require('./src/routes/blog.routes')

// Searchbar Rout
const SearchbarRouter = require('./src/routes/searchbar.routes')

// Hizmetler Router
const Hizmetler = require('./src/routes/hizmetler.routes')

// Servisler Router
const Sektorler = require('./src/routes/sektorler.routes')

// using as middleware

// User api
app.use('/api/user', UserRouter)

// Contact api
app.use('/api/contact', ContactRouter)

// Blog api
app.use('/api/blog', BlogRouter)

// Searchbar api
app.use('/api/searchbar', SearchbarRouter)

app.use('/api/hizmetler', Hizmetler)

app.use('/api/sektorler', Sektorler)

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
