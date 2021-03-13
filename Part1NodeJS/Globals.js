// Part One Lesson 2

// Globals - No Window!! why? well there is no browser

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules(CommonJS)
// module     - info about current module (file)
// process    - info about environment where the program is being executed

console.log(__dirname)

setInterval(()=>{
  console.log('hello world');
}, 1000)

// when running file in command line you can omit the .js
// ex node Globals

// all Globals can be found here 
// https://nodejs.org/api/globals.html