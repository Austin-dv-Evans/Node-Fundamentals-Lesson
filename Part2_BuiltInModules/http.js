// http module
// allows us to set up our own server

const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end("Welcome to our home page")
  }
  if(req.url === '/about'){
    res.end("Welcome to our about page")
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>Cant find that page</p>
    <a href="/">Back Home</a>
  `)
})

server.listen(5000)