const nano = require('nanoid')

let id1 = nano.nanoid()
let id2 = nano.nanoid()

// we can give out result like this file is runned
module.exports = [id1, id2]
// u can export here like id1 or {id1, id2}, its up to u