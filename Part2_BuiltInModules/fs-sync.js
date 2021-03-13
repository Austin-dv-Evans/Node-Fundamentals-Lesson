// fs - file system module


// console.log(first, second);

// writeFileSync('../content/result-sync.txt',
//   `here is the result: ${first} ${second}`,
//   {flag: "a"}
// )

// thrid param is an options object, a flag lets us add what we write
// rather than overwrite it


const { readFileSync, writeFileSync } = require("fs")
console.log("start")
const first = readFileSync("../content/first.txt", "utf8")
const second = readFileSync("../content/second.txt", "utf8")

writeFileSync(
  "../content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
)
console.log("done with this task")
console.log("starting the next one")
