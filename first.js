const http = require("http")

http.createServer((req,res)=>{
    res.write( "india")
    res.end()
}).listen(8080,()=>{
    console.log("server created Successfully")
})