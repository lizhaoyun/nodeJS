const http = require("http");
const https = require('https');
const fs = require('fs');
const path = require("path");
const url = require("url");
const cheerio = require("cheerio");


http.createServer((req,res)=>{
    var urlobj =url.parse(req.url,true); 
    var pathname = urlobj.pathname;
    switch(pathname){
        case '/':
            showIndex(res);
            break;
        case '/getmovie':
            showMovie(res);
            break;
    }
}).listen(8081);

function showIndex(res){
    var indexpath = path.join(__dirname,'/index.html');
    var file  = fs.readFileSync(indexpath);
    res.writeHead(200,{"content-type":"text/html;charset='utf8'"});
    res.write(file);
    res.end();
}

function showMovie(res){
    https.get("https://maoyan.com/films",(resone)=>{
        var result = '';
        resone.on('data',(chunk)=>{
            result += chunk;
        })
        resone.on('end',()=>{
            const $ = cheerio.load(result);
            $(".movie-item-title a").each(function(){
                
            })
        })
    })
    res.end();
}
