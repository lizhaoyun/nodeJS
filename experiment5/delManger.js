const fs =require("fs");
const path = require("path");
var fname = process.argv[2];

    var pname = path.join(__dirname,fname);
    if(fs.existsSync(pname)){
        var statobj = fs.statSync(pname);
        if(statobj.isFile){
            fs.unlinkSync(pname);
        }
        else if(statobj.isDirectory(pname)){
            deletefile(pname);
        }
    }
    else{
        console.log("not exists");
    }
    function deletefile(pathname){
        var filecontent = fs.readdirSync(pathname);
        for(var i=0;i<filecontent.length;i++){
            var p = path.join(pathname,filecontent[i]);
            var statobj = fs.statSync(p);
            if(filecontent[i].isFile()){
                fs.unlinkSync(p);
            }
            else if(statobj.isDirectory()){
                deletefile(p);
            }
        }
        fs.rmdirSync(pathname);
    }

