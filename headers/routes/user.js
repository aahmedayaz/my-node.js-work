const express = require('express')

const router = express.Router()

router.get('/' , (req, res) => {
  res.setHeader('Hello', 'Greetings')
  res.json({msg: 'This is GET request', headers: `${req.headers.name}`})
})

router.post('/' , (req, res) => {
  const {name} = req.body
  res.json({username: name})
})

module.exports = router