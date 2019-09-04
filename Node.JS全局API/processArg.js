let project = process.argv[2];
switch(project){
    case undefined:
        console.log("输入命令行参数有误！");
        break;
    case "-h":
        console.log("请输入算数运算式！");
        break;
    default:
        console.log("%s=%d",project,eval(project)); 
}