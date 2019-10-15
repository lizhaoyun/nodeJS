/**
 * 1.创建server，读取index.html，响应到客户端显示。
 * 2.在页面中发起ajax请求获取数据
 *  服务端接收到ajax请求，去猫眼网上爬取页面内容
 *  使用cheerio解析得到需要的数据，存储到数组里面，响应到客户端
 * 
 * 3.ajax回调函数中，使用响应到的数据，拼接到页面上显示。
 */

const cheerio = require('cheerio');
const https = require("https");

https.get("https://maoyan.com/films",(res)=>{
    var result = '';
    res.on('data',(chunk)=>{
        result+=chunk;
    });

    res.on('end',()=>{
        console.log(result);
    })
})