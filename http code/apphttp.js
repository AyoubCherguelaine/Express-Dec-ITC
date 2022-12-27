const http = require("http")
const fs = require("fs")

const GetHtmlFile = (res,path)=>{
    fs.readFile(path,(err,data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        return res.end();
    })
}

http.createServer((req,res)=>{

  if(req.url=="/"){
    GetHtmlFile(res,"./index.html")
  }else{
    if(req.url=="/home"){
        GetHtmlFile(res,"./home.html")
    }else{
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end("no route")
    }
  }
    
} ).listen(8080)