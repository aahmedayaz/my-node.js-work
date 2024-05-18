const express = require('express')
const logging = require('../middlewares/logging')

const router = express.Router()

router.get('/' , logging ,(req, res) => {
  res.status(200).json({
    status: 'pass',
    message: 'Get all Students.'
  })
})

module.exports = router