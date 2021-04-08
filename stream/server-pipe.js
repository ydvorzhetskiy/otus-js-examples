const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  fs.createReadStream('./example.html')
    .pipe(response)
})
.listen(8080)