const http = require("http");
const fs = require("fs");
const path = require("path");

var fname= process.argv[2];
var fp = path.join(__dirname,"/"+fname);
var fdefault = __filename;

http.createServer((req,res)=>{
    switch(fname){
        case undefined:
            var fdcontent=fs.createReadStream(fdefault);
            fdcontent.pipe(res);    //包含write和read等
            break;
        default:
            fs.exists(fp,(exists)=>{
                if(exists){
                    var fpc=fs.createReadStream(fp);
                    fpc.pipe(res);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/text;charset=utf-8"});
                    res.write("文件不存在");
                    res.end();
                }
            })
                
    }
     
}).listen(8081);