
//1- Crete a file that show hello world in teh console  

console.log("Hello world")

//2- Create a server 

const http = require ("http");

http.createServer( function (req,res){

res.writeHead(200,{'Content-type':'text/plain'})

res.end("<h1>Hello Node!!!!</h1>\n")
}).listen(3000)

console.log("the server have been launched on http://127.0.0.1:3000/")