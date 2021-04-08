var fs = require('fs')
console.log("BEFORE: ", process.memoryUsage())

var inp = fs.createReadStream('/')
var outp = fs.createWriteStream('/var/tmp/joe.txt')

outp.on('finish', function () {
  console.log("AFTER: ", process.memoryUsage())
})

inp.pipe(outp)