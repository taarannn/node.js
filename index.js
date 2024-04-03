const http =require("http");
const fs = require("fs");
const myserver = http.createServer( (req , res)=> {
 const log ='${Date.now()}: ${req.url} New Req Received\n'
 fs.appendFile("log.text", log,(err , data)=>{
    switch(req.url){
        case"/":
        res.end("Homepage");
        break;
        case "/about":
        res.end("I am taran");
        break;
        default:
            res.end("404 NOt Found");
    }
 })

});
 
myserver.listen(3000,()=> console.log("server started"));