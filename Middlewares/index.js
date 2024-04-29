const express = require('express')
const port = process.env.PORT || 3000

// Express application
const app = express()

// Middlewares
app.get('/' , (req, res, next) => {
  console.log('I am Middleware 1')
  next()
})

app.get('/' , (req, res, next) => {
  console.log('I am Middleware 2')
  next()
})

// Routes
app.get('/' , (req, res) => {
  console.log('I am Route')
  res.send('Some Bread.')
})

// server listening
app.listen(port, (err) => {
  err ? console.log('Error: ', err) : console.log(`Listening at port localhost:${port}`)
})