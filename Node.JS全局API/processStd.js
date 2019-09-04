var i = 0;
var arr=["Name","Email","QQ","Mobile"];
var value=new Array(4);
var obj={
    Name:"",
    Email:"",
    QQ:"",
    Mobile:""
}
console.log(arr[i]+":");
process.stdin.on('data', function(data){
   value[i]=data.toString()
    i++;

    if(i==4){
        console.log(value[0],value[1],value[2],value[3]);
        process.exit();
    }
    
});
