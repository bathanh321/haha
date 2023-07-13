//declare http library
const http = require('http')
//declare host
const host = 'localhost'
//declare port of server
const port = 3000 //3000:default port
//declare server
const server = http.createServer((request, respond) =>{
    respond.write("<h1>Hello World!</h1>")
    respond.end
})
//let server listen port to run web
server.listen(port)