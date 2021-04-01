module.exports = 123

async function load() {
  import('./default.mjs').then(a => {
    console.log(a.default)
  })
}

load()