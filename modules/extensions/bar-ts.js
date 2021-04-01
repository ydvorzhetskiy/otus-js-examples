// https://gist.github.com/jamestalmage/df922691475cff66c7e6

// append-bar.js
var oldHook = require.extensions['.js']
const tsc = require('typescript')

require.extensions['.ts'] = function (module, file) {
  var oldCompile = module._compile
  module._compile = function (code, file) {
    code = tsc.transpileModule(code, { compilerOptions: {} }).outputText + '; console.log("barhook:", bar)'
    module._compile = oldCompile
    module._compile(code, file)
  }
  oldHook(module, file)
}

require('./ts.ts')