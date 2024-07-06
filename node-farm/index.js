const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const pathname = req.url
  if(pathname === '/' || pathname === '/overview'){
    res.writeHead(200, 'OK', {
      'Content-Type' : 'text/html',
      'my-own-header' : 'fein-fein-fein'
    })
    res.end('This is Overview')
  }

  else if(pathname === '/product'){
    res.writeHead(200, 'OK', {
      'Content-Type' : 'text/html'
    })
    res.end('This is Product')    
  }

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
