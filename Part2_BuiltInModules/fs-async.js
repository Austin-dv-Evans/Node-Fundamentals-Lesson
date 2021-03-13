const { readFile, writeFile } = require("fs")

console.log("start")
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile("../content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      "../content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log("done with this task")
      }
    )
  })
})
console.log("starting next task")


/* 
the difference between sync and async
~/.../node-fundamentals/Part2_BuiltInModules // ♥ > node fs-sync.js
start
done with this task
starting the next one
~/.../node-fundamentals/Part2_BuiltInModules // ♥ > node fs-async.js
start
starting next task
done with this task
*/