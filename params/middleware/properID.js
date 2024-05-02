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

const properID = (req, res, next) => {
  const id = parseInt(req.params.id)
  // console.log(id)
  // console.log(typeof id)

  // check if id is greater than mockData IDs or not
  let totalIDs = 0
  mockData.forEach((student) => totalIDs++)

  // check it is a number and above 1
  if(isNaN(id) || id < 1) {
    return res.status(400).json({"msg": "Invalid ID - ID must be a number, above zero"})
  }

  next()
}

module.exports = properID