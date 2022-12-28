let http = require('http');
// let https = require('https')
// console.log(http);
// console.log(https);

let server = http.createServer((req , res) => {
    res.write('Hello Peter\n')
    res.end("Theek Hy  ?")
})

server.listen(80)

