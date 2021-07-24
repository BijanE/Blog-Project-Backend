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

app.get('/api', (req, res) => {
  res.json({
    success: 1,
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

// using as middleware
app.use('/api/user', UserRouter)

app.use('/api/contact', ContactRouter)

app.use('/api/blog', BlogRouter)

app.use('/api/navbar', NavbarRouter)

// app.use('/api/navbar', NavbarRouter)

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
