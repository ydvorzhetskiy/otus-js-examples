// require('../modules')

const empty = require('./empty')

empty.test = 123

console.log(require('./empty').test)

console.log('finished')
