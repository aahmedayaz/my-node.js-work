const fs = require('fs')

let newFile = fs.writeFileSync('example.txt', "I am Example File")
console.log(newFile)