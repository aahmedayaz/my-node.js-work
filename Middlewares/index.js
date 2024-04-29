const express = require('express')
const port = process.env.PORT || 3000
const students = require('./routes/students')

// Express application
const app = express()

// Routes
app.use('/api/students' , students)

// server listening
app.listen(port, (err) => {
  err ? console.log('Error: ', err) : console.log(`Listening at port localhost:${port}`)
})