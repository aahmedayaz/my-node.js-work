const http = require('http')
const fs = require('fs')

// Create Server
const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico') return res.end()
    fs.appendFile('logbook.txt', `Request From ${req.url} at ${new Date()} \n`, (err, data) => {
        res.end(`Request From ${req.url} at ${new Date()}`)
    })
})

server.listen(80, (err) => {
    if(!err){
       console.log(`Listening at http://localhost:80`) 
    }
    else{
        console.log(err)
    }
})