const express = require('express')
const cors = require('cors')

// Create express app
const app = express()

// Import dotenv
require('dotenv').config()

// Setup server port
const PORT = process.env.PORT || 8080

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

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

// Navbar Rout
const NavbarRouter = require('./src/routes/navbar.routes')

// Searchbar Rout
const SearchbarRouter = require('./src/routes/searchbar.routes')

// using as middleware

// User api
app.use('/api/user', UserRouter)

// Contact api
app.use('/api/contact', ContactRouter)

// Blog api
app.use('/api/blog', BlogRouter)

// Navbar and content in it api
app.use('/api/navbar', NavbarRouter)

// Searchbar api
app.use('/api/searchbar', SearchbarRouter)

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
