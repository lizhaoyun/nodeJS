const http = require("http");
const fs=require("fs");
const path = require("path");

var fname= process.argv[2];
var fp = path.join(__dirname,"/"+fname);
var fdefault = __filename;
var fplen = fs.statSync(fp).size;
var bufp = Buffer.alloc(fplen);


http.createServer((req,res)=>{
    switch(fname){
        case undefined:
            fs.open(fdefault,'r',(err,fd)=>{
                if(err){
                    res.end(err);
                }
                else{
                    var fdelen = fs.statSync(fdefault).size;
                    var buff=Buffer.alloc(fdelen);
                    fs.read(fd,buff,0,fdelen,0,(err,bytesRead,buffer)=>{
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
            break;
        default:
                fs.exists(fp,(exists)=>{
                    if(exists){
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
