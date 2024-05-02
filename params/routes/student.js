const express = require('express')
const properID = require('../middleware/properID')

// Router
const router = express.Router()

// Mock Data
const mockData = [
  {
    "id": 1,
    "email": "adamreed@gmail.com"
  },
  {
    "id": 2,
    "email": "s_henderson@live.com"
  },
  {
    "id": 3,
    "email": "b_k_torres@outlook.com"
  },
  {
    "id": 4,
    "email": "andrew_green@gmail.com"
  },
  {
    "id": 5,
    "email": "anna_nelson@aol.com"
  },
  {
    "id": 6,
    "email": "mary_clark@aol.com"
  },
  {
    "id": 7,
    "email": "ava.michelle.cox@live.com"
  },
  {
    "id": 8,
    "email": "nicholas.ray.wood@hotmail.com"
  },
  {
    "id": 9,
    "email": "i_r_kelly@hotmail.com"
  },
  {
    "id": 10,
    "email": "amelia.r.rodriguez30@ymail.com"
  }
]

router.get('/' , (req, res) => {
  res.status(200).send(mockData)
})

router.get('/:id', properID, (req, res) => {
  const student = mockData.find((student) => student.id == req.params.id)
  res.status(200).send(student)
})

module.exports = router