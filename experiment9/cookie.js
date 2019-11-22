const http=require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const querystring = require("querystring");

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url,true);
    var pathname = urlobj.pathname;
    switch(pathname){
        case "/":
            showHome(req,res);
            break;
        case "/login":
            loginIn(req,res);
            break;
        case "/login_bg.jpg":
            var filecontent=fs.readFileSync(path.join(__dirname,"login_bg.jpg"));
            res.writeHead(200,{"content-type":"img/jpg"});
            res.write(filecontent);
            res.end();
        // case "/home":
        //     showHome(req,res);
        //     break;

    }
}).listen(8081);
console.log("server is listening 8081");

function showLogin(res){
    var filepath = path.join(__dirname,"login.html");
    var filecontent = fs.readFileSync(filepath);
    res.writeHead(200,{"content-type":"text/html"});
    res.write(filecontent);
    res.end(); 
}

function loginIn(req,res){
    var formdata="";
    req.on("data",(chunk)=>{
        formdata += chunk;
    })

    req.on("end",()=>{
        console.log(formdata);
        var formobj = querystring.parse(formdata);
        if(formobj.username == "admin" && formobj.pwd == "admin"){
            res.setHeader("Set-Cookie","username=admin;max-age=30");
            res.end("login success");
        }
        else{
            showLogin(res);
        }
    })
}

function showHome(req,res){
    let cookie=req.headers["cookie"];
    if(cookie === undefined){
        showLogin(res);
    }
    else if(cookie.indexOf("username=")>=0){
        loginIn(req,res);
    }
    else{
        showLogin(res);
    }
}