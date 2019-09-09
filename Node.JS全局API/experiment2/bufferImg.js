const http = require("http");

http.createServer(function(req,res){
    var htmlcontent = "<!DOCTYPE html><head></head>"+
                    "<body><img src='data:image/png;base64,Uri'/></body></html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlcontent);
    res.end();
}).listen(8081);