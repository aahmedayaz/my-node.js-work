const express = require('express')
const port = process.env.PORT || 3000
const students = require('./routes/students')

// Express application
const app = express()


// Routes
app.use('/api/students' , students)

// 404 Error
app.all("*", (req, res, next) => {
  const err = new Error(`No such route like ${req.originalUrl} exists.`)
  err.status = `Failed to access this route.`
  err.statusCode = 404
  next(err)
})

// Error Handling Middleware
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500
  error.status = error.status || 'Failed.'
  error.message = error.message || `Error`

  res.status(error.statusCode).json({
    status: error.status, 
    message: error.message
  })
})

// server listening
app.listen(port, (err) => {
  err ? console.log('Error: ', err) : console.log(`Listening at port localhost:${port}`)
})