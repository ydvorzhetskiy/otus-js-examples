process.on('uncaughtException', (error) => {
  console.log(error)
  
  setImmediate(() => {
    console.log('still working here')
  })
})

null.fs()