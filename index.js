const http =require("http");
const fs = require("fs");
const url = require("url");
const { stripVTControlCharacters } = require("util");
const myserver = http.createServer( (req , res)=> {
 const log = '${Date.now()}: ${request.method} ${req.url} New Req Received\n';
 const myurl = url.parse(req.url , true);
 console.log(myurl);
 fs.appendFile("log.text", log,(err , data)=>{
    switch(myurl.pathname){
        case"/":
        if(req.method === 'GET')
        res.end("Homepage"); 
        break;
        case "/about":
            const username = myurl.query.myname;
        res.end('hii', username);
        break;

        case '/signup':
            if(req.method ==='GET')res.end("this is a sign up");
            else if (req.method === "POST"){
                //db query
                res.end("sucess");
            }
        default:
            res.end("404 NOt Found");
    }
 })

});
 
myserver.listen(3000,()=> console.log("server started"));