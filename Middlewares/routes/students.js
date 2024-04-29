const express = require('express')
const logging = require('../middlewares/logging')

const router = express.Router()

router.get('/' , logging ,(req, res) => {
  res.send('Student Page')
})

module.exports = router