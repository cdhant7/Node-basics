const http = require('http')

http.createServer((req,res) =>{
    res.write("server is up and running")
    res.end()
}) .listen(3000)