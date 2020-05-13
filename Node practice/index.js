const counterObject = require("./myScript")
console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

// access the fs object
const fs = require('fs')
//reads the files in the directory
fs.readdir(process.cwd(),(err,filenames)=> {
    if(err){
        console.log(err)
    }
    console.log(filenames)
})