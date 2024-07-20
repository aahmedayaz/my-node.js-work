const http = require('http')
const url = require('url')
const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const JSONdata = JSON.parse(data)
const cardHTML = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const overviewHTML = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const productHTML = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')

const replaceTemplate = (HTMLinString, arrayFromJSON) => {
  let output = HTMLinString.replace(/{%product_name}/g, arrayFromJSON.productName)
  output = output.replace(/{%image}/g, arrayFromJSON.image)
  output = output.replace(/{%from}/g, arrayFromJSON.from)
  output = output.replace(/{%nutrients}/g, arrayFromJSON.nutrients)
  output = output.replace(/{%description}/g, arrayFromJSON.description)
  output = output.replace(/{%quantity}/g, arrayFromJSON.quantity)
  output = output.replace(/{%price}/g, arrayFromJSON.price)
  output = output.replace(/{%id}/g, arrayFromJSON.id)

  if(!arrayFromJSON.organic) {
    output = output.replace(/{%not-organic}/g, 'not-organic')
  }

  return output
}

const server = http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true)

  // Overview
  if(pathname === '/' || pathname === '/overview'){
    const productCards = JSONdata.map((obj) => replaceTemplate(cardHTML, obj)).join('')
    const output = overviewHTML.replace(/{%product_cards}/g, productCards)
    res.writeHead(200, 'OK', {
      'Content-Type' : 'text/html',
    })
    res.end(output)
  }

  // Product
  else if(pathname === '/product'){
    const product = JSONdata[query.id]
    console.log(query)
    const output = replaceTemplate(productHTML, product)
    res.writeHead(200, 'OK', {
      'Content-Type' : 'text/html'
    })
    res.end(output)    
  }
  
  // API
  else if(pathname === '/api'){
    res.writeHead(200, {
      'Content-Type' : 'application/json'
    })
    res.end(JSONdata)
  }

  // Not Found
  else {
    res.writeHead(404, 'Route does not exist', {
      'Content-Type' : 'text/html'
    })
    res.end('Page not Found')
  }

})

const port = process.env.PORT || 8000

server.listen(port, '127.0.0.1', () => {
  console.log(`Listening on http://127.0.0.1:${port}`)
})
