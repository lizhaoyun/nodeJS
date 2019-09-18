const fs = require("fs");


process.stdin.on("data",(data)=>{
    console.log("请输入要创建的文件夹：");
    var opreation = process.argv[2];
    var fname = process.argv[3];
    fs.mkdir(__dirname,()=>{
        
    });
})