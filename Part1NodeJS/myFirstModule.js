// shared
const john = 'john'
const jim = 'jim'
// local
const secret = 'Super secret'

// console.log(module);
module.exports = {john, jim}

const data = require('./ExportAsYouGo')
console.log(data);