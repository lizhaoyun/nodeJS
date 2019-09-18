const http = require("http");
const fs=require("fs");
const path = require("path");
var fname= process.argv[2];


http.createServer((req,res)=>{
    switch(fname){
        case undefined:
            var fdefault = process.argv[1];
            fs.open(fdefault,'r',(err,fd)=>{
                if(err){
                    res.end(err);
                }
                else{
                    var fdelen = fs.statSync(fdefault).size;
                    var buff=Buffer.alloc(fdelen);
                    fs.read(fd,buff,0,fdelen,0,(err,bytesRead,buffer)=>{
                        //buffer和buff相同
                        if(err)
                            res.end(err);
                        else{
                            res.writeHead(200,{"Content-Type":"text/text;charset=utf-8"});                 
                            res.end(buffer.toString());
                        }
                    })
                    fs.close(fd,()=>{
                        if(err)
                            res.end(err);
                    });
                }
            })
            break;
        default:
                var fp = path.join(__dirname,"/"+fname);
                fs.exists(fp,(exists)=>{
                    if(exists){
                        var fplen = fs.statSync(fp).size;
                        var bufp = Buffer.alloc(fplen);
                        fs.open(fp,'r',(err,fd)=>{
                            if(err)
                                res.end(err);
                            else{
                                fs.read(fd,bufp,0,fplen,0,(err,bytesRead,buffer)=>{
                                    if(err)
                                        res.end(err);
                                    else{
                                        res.end(buffer.toString());
                                    }
                                })
                                fs.close(fd,()=>{
                                    if(err)
                                        res.end(err);
                                });
                            }
                        })
                    }
                    else{         
                        res.writeHead(200,{"Content-Type":"text/text;charset=utf-8"});                 
                        res.write("文件不存在");
                         res.end();
                    }
                })
            
            break;
    }
}).listen(8081);
