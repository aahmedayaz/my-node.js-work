const express = require('express')

// Router
const router = express.Router()

router.get('/:id', (req, res) => {
  console.log(req.query.name)
  res.status(200).send(`Your Name Query is: ${req.query.name}`)
})

module.exports = router