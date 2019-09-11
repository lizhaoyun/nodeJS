const circle = require("./circleModule.js");    //得到的是module.exports的内容，即为对象
var r = process.argv[2];
var middata=circle.circleFun(r);
// circle.circleFun(r).area();
// circle.circleFun(r).circumference();
console.log("圆的面积："+middata.area());
console.log("圆的周长："+middata.circumference());


/**
 * 1. 原生模块，随node环境安装就存在的
 * 2.自定义模块，自己编写的程序
 * 3.第三方模块，在命令行中进行安装的模块，从npm服务器上下载到本地的
 * 直接通过require引用，如require("date-now");
 */