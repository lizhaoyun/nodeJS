const http = require("http");
const querystring = require("querystring");

var username = process.argv[2];
var password = process.argv[3];
var obj = {username:username,pwd:password};
var str = querystring.stringify(obj);
var option={
    host:'localhost',
    port:8081,
    path:"/",
    method:"post"
}

var req = http.request(option,(res)=>{
})
req.write(str);
req.end();