let fs = require('fs')

fs.writeFileSync('readME.txt','HelloWorld\n') // To Create File Synchrounously
fs.appendFileSync('readME.txt','I am a Developer\n') // To Add More Text Synchrounously
fs.renameSync('readME.txt','read.txt') // To Rename Synchrounously
console.log(fs.readFileSync('read.txt')); // To Display File Synchrounously in a Buffer Format
console.log(fs.readFileSync('read.txt').toString()); // To Display File Synchrounously in a String Format


fs.writeFile('Info.txt' , 'I am Ahmed Ayaz' , (err) => {
    if(err){
        console.log(err);
    }
    else{
        const dayta = fs.readFileSync('Info.txt').toString()
        console.log("Dayta is : ", dayta)
        console.log("Successfully File Created");
        // console.log(fs.readFileSync('Info.txt'));
    }
}) // To Create File Asynchrounously

fs.readFile('Info.txt' , (err , data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data); // In Buffer Format
        console.log(data.toString());
        console.log("Successfully File Readed");
    }
})

