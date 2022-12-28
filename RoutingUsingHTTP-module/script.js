let http = require('http')

let server = http.createServer((req , res) => {
    if(req.url == '/'){
        res.write('This is HOME')
        res.end();
    }
    else if(req.url == '/dashboard'){
        res.write('This is DASHBOARD')
        res.end();
    }
    else if(req.url == '/registration'){
        res.write('This is REGISTRATION')
        res.end();
    }
})

server.listen(80 , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server Running Successfully");
    }
})