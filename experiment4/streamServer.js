const http = require("http");
const fs= require("fs");
const path = require("path");


http.createServer((req,res)=>{
    let filep = path.join(__dirname,"/data.txt");
    let read = fs.createReadStream(filep);

    read.pipe(res);
}).listen(8081);