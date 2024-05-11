const express = require('express')
const {body, validationResult} = require('express-validator')

// Router
const router = express.Router()

router.get('/:id', (req, res) => {
  console.log(req.query.name)
  res.status(200).send(`Your Name Query is: ${req.query.name}`)
})

router.post('/' , [
  body('email').isEmail().withMessage('Invalid Email Address') ,
  body('password').isLength({min: 4}).withMessage('Password must be greater than 06 characters')
] ,(req, res) => {

  // Catching validationError
  const errors = validationResult(req)
  console.log(`Contains Error: ${!errors.isEmpty()}`)

  if(!errors.isEmpty()){
    return res.status(400).json({
      errorMsg : errors.array()
    })
  }


  const {email, password} = req.body
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
  res.json({
    email,
    password
  })
})

module.exports = router