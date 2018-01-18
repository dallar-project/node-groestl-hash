var myModule

if (process.env.DEBUG) {
  myModule= require('./build/Debug/throestlhash.node')
} else {
  myModule= require('./build/Release/throestlhash.node')
}

module.exports = myModule