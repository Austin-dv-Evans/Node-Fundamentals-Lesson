// Part 1 lesson 3

// Modules

// dummy app
const names = require('./myFirstModule')
console.log(names);
console.log(names.john);
const sayHi = require('./utilities')
sayHi('Austin')
sayHi(names.john)
sayHi(names.jim)
// node Modules => Hello there Austin Hello there John

// CommonJS, every file is a module (by default)!!!
// Modules - Encapsulated Code (only share minimum(what we wnat to share))


// there are also built in moudles and external modules
// with modules that we make they are always './nameOfFile'

// when you import a module you invoke the code you are importing