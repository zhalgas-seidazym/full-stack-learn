// to initialize our project we need to write 
// npm init and after this we will create our package.json

// to download libs we need to write 
// npm i name

// to add scripts go to package.json and write scripts

// always delete lib package when uploading to git
// and when need u can write npm i to download all dependencies


// to connect our lib we need to write require lib
const lib = require('nanoid')
console.log('ID: ' + lib.nanoid())

// we can also connect lib to one file and export the ans to another

// we need to write require file with ./
// when we are importing object we need to write as in export file
let [id3, id2] = require('./id.js')
console.log('ID1: ' + id3 + '\nID2: ' + id2)





