const http = require("http");
const fs = require("fs");
const path = require("path");

var fname= process.argv[2];
var fp = path.join(__dirname,"/"+fname);
var fdefault = __filename;  // 或process.argv[1]

http.createServer((req,res)=>{
    switch(fname){
        case undefined:
            /**
             * fs.readFile() 异步方法，执行到该句不会等待文件读取完成，
             * 就直接执行后面的语句。
             * 回调函数是等到文件读取完成之后才执行
             * 内部定义了eventEmitter
             */
            fs.readFile(fdefault,(err,data)=>{
                if(err){
                    res.write(err);
                    res.end();
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/text;charset=utf-8"});
                    res.write(data.toString()); 
                    //直接读文件都默认buffer显示的
                    //响应图片时，返回原buffer数据
                    res.end();
                }                   
            });
            break;
        default:
            fs.exists(fp,(exists)=>{
                if(exists){
            //if(fs.existsSync(fp)){}
                    fs.readFile(fp,(err,data)=>{
                        if(err){
                            res.write(err);
                            res.end();
    
                        }
                        else{
                            res.write(data.toString());
                            res.end();
                        } 
                    })
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end("文件不存在");
                }
            })
                
    }
    
}).listen(8081);