require('dotenv').config()
const express = require('express')
const student = require('./routes/student.js') 

// Express App
const app = express()

// Routes
app.use('/api/students', student)

try {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
} catch (error) {
  console.error('Error starting server:', error)
  process.exit(1); // Exit with an error code
}