// Assignment # 02

// "Events" module offers the "EventEmitter" class, which is used to Handle Events //

// Initializing "EventEmitter" class
let EventEmitter = require('events')
let event = new EventEmitter();

// Registoring "Deadline" Event in this Module
event.on('Deadline' , (assignmentNo , date , month) => {
    console.log(`Deadline of Assignment No.${assignmentNo} is ${date}, ${month}`);
})

// Exporting it 
module.exports = event;



