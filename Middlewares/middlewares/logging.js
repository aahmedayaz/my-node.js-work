const logging = (req, res, next) => {
  console.log('Request at : ' , req.baseUrl+req.url)
  next()
}

module.exports = logging