import('./empty.js').then(({ a }) => {
  console.log(a)
})

export const b = 'b'
import * as a from './a.mjs'
console.log('b:', a)