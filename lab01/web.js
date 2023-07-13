//declare http library
const http = require('http')
//declare host
const host = 'localhost'
//declare port of server
const port = 3000 //3000:default port
//declare server
const server = http.createServer((request, respond) =>{
    respond.write("<h1 style='color:Blue'>Hello World!</h1>")
    respond.write("<h3 style='font-style: italic; background-color:yellow; text-decoration: underline;'>We are from Greenwich Vietnam</h3>")
    respond.end
})
//let server listen port to run web
server.listen(port, () =>{
    console.log("Server is running at http://"+host+":"+port)
})