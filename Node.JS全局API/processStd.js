var i = 1;
var arr=["Name","Email","QQ","Mobile"];
var obj={
    "Name":"",
    "Email":"",
    "QQ":"",
    "Mobile":""
}
console.log(arr[0]+":");
process.stdin.on('data', function(data){
    obj[arr[i-1]]=data.toString("utf8").trim();
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(arr[i++]+":");
    }
    
    
});
