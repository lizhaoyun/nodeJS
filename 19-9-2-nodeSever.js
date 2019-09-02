const http = require("http");

var sever = new http.Server();

sever.on("request",function(req,res){
    res.end("so cute");
})

sever.listen(8082);