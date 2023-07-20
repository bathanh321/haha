const http = require('http')
const fs = require('fs')
const host = 'localhost'
const port = 3000
const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    switch(req.url){
        case '/':
            fs.readFile("index.html", (err, data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break;
        case '/hanoi':
            fs.readFile("hanoi.html", (err, data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break;
            case '/danang':
            fs.readFile("hanoi.html", (err, data)=>{
                if(err){
                    console.error(err)
                }
                else{
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break;
        default:
            res.write("<h1>404 - Not found</h1>")
            res.end()
            break;
    }
})
server.listen(port, ()=>{
    console.log("Server is running at http://" +host+ ":"+port)
})