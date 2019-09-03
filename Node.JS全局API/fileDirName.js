const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req,res){
    var filepath = path.join(__dirname,"/views/view.html");
    var filecontent = fs.readFileSync(filepath);
    filecontent = filecontent.toString("utf8");
    console.log(filepath);

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(filecontent);
    res.end();

})

server.listen(8080);
console.log("server is listening 8080");