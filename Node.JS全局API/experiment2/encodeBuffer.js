
var username=process.argv[2];
var password = process.argv[3];

if(username==undefined && password == undefined){
    console.log("输入不能为空");
}
else{
    var str = "用户名："+username+" 密码:"+password;
    var bustr = Buffer.from(str,"utf-8");
    var base64str = bustr.toString("base64");
    console.log("用户名："+username+" 密码："+password);
    console.log("base64加密："+base64str);
}