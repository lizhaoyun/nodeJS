const fs = require("fs");
const path = require("path");

console.log("请输入要创建的文件夹：");
process.stdin.on("data",(data)=>{
    var cmd = data.toString();
    var arr = cmd.split(" ");
    console.log(arr[1].trim());
    switch(arr[0]){
        case 'mkdir':
            var dirpath = path.join(__dirname,"/"+arr[1]);
            fs.mkdirSync(arr[1].slice(0,-2));   //可以使用相对路径
            break;
        case 'touch':
            var filepath = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filepath,"hello node");
            break;
        case 'delete':
            var filepath = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filepath);
            break;
        default:
            console.log("something erro");
            break;
    }
})