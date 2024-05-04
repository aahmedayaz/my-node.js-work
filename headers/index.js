const express = require('express')
const user = require('./routes/user')

const app = express()

app.use(express.json())

// Routes
app.use('/api/user' , user)

try{
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
  })
} catch (err) {
  console.log("Error : ", err)
}