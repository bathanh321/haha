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
    respond.write("<h1 style='font-style: italic;'>Trung dep trai</h1>")
    respond.write("Nam Ga")
    respond.write("<img src='https://gamek.mediacdn.vn/133514250583805952/2020/5/1/photo-1-1588349860019691674711.jpg'></img>")
    respond.write('<br>')
    respond.write('<iframe width="1000" height="720" src="https://www.youtube.com/embed/fIXFyUPsVhc" title="BẠN CÓ ĐANG SỬ DỤNG SAI CLARA? | HONKAI STAR RAIL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    respond.end()
})
//let server listen port to run web
server.listen(port, () =>{
    console.log("Server is running at http://"+host+":"+port)
})