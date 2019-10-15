const http = require("http");
const queryString = require("querystring");
const fs = require("fs");
const path = require("path");
var server = new http.Server();
server.on("request",(req,res)=>{
    var jsonContent = fs.readFileSync(path.join(__dirname,"data.json"));
    var jsonObj = JSON.parse(jsonContent);
    var str = '';
    req.on("data",(chunk)=>{
        str+=chunk;
    })
    req.on("end",()=>{
        var datastr = queryString.parse(str);
        for(var i =0;i<jsonObj.length;i++){
            if(datastr.username === jsonObj[i].username&&datastr.pwd ===jsonObj[i].password){
                console.log("登录成功");
                break;
            } 
        }
        if(i>=jsonObj.length){
            console.log("登录失败");
        }
         
    })
})

server.listen(8081);
