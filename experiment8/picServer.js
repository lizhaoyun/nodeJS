const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const quertString = require("querystring");

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url,true);
    var pathname = urlobj.pathname;
    switch(pathname){
        case "/":
            showIndex(res);
            break;
        case "/image.png":
            if(pathname.indexOf(".png")>=0){
                showPic(res);
            }
            break;
        case "/list":
            showList(res);
            break;
        case "/upload":
            if(req.method === "POST"){
                uploadFile(req,res);
            }
            break;
        case "/getlist":
                var files = fs.readdirSync(path.join(__dirname,"upload"));
                var str = JSON.stringify(files);
                res.end(str);
            break;
        default:
            if(pathname.indexOf("upload")>=0 && req.method=="GET"){
                var imgPath = path.join(__dirname,pathname);
                var imgContent = fs.readFileSync(imgPath);
                res.writeHead(200,{"content-type":"image/png"});
                res.end(imgContent);
            }
            break;
    }
}).listen(8081);

function showIndex(res){
    var filepath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(filepath);
    res.writeHead(200,{"content-type":"text/html"});
    res.write(fileContent);
    res.end();
}

function showPic(res){
    var imgPath = path.join(__dirname,"/image.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"content-type":"image/png"});
    res.write(imgContent);
    res.end();
}


function showList(res){
    var listpath = path.join(__dirname,"list.html");
    var listContent = fs.readFileSync(listpath);
    res.writeHead(200,{"content-type":"text/html"});
    res.write(listContent);
    res.end();
}
/**
 *  发起请求：
 *      地址栏中         get
 *      超链接           get
 *      提交表单         get/post请求
 *      ajax            可以是get，也可以是post
 *      <link href>     get
 *      <script src>    get
 *      <img src>       get
 * 
 *  get请求向服务端传递的参数都在url里呈现
 *   http://localhost:8081/detail?newId=1&newname=a
 *   var urlobj=url.parse(req.url,true)
 *   urlobj.query.newId
 * 
 *  post请求，数据存储在请求体里面，
 *      接收方式：req.on("data",(chunk)=>{})
 *               req.on("end",()=>{})
 */

 function uploadFile(req,res){
     var str = '';
     req.setEncoding("binary");
     req.on("data",(chunk)=>{
        str += chunk;
     })
     req.on("end",()=>{
        var arr = str.split("\r\n");
        var bufarr = arr.slice(4,arr.length-2);
        var imgdata = "";
        for(var i=0;i<bufarr.length;i++){
            imgdata+=bufarr[i]+"\r\n";
        }
        // bufarr.join("\r\n");
        var buf = Buffer.from(imgdata,"binary");
        var timer = (new Date()).getTime();
        fs.writeFileSync(path.join(__dirname+"/upload/"+timer+".png"),buf,{"encoding":"binary"});
        res.end("success");
     })
 }