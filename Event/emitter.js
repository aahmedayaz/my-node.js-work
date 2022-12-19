// Importing from "registor.js" Module
let event = require('./registor')

// Triggering the "Deadline" event of "registor.js" Module in this Module
event.emit('Deadline' , 2 , 20 , 'December')