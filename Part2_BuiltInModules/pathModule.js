// The Path Module

// const path = require('path')
// console.log(path);

// path.basename
// path.join
// path.resolve accepts a sequence of paths and resolves it to an absolute path


const path = require("path")

console.log(path.sep)

const filePath = path.join("../content/", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)