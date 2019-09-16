const stream = require("stream");
const util = require("util");

function MyReadable(){
}
MyReadable = stream.Readable;

var my = new MyReadable();
// my.push("abcdefghijklmnopqrstuvwxyz");
 
for(var i=0;i<26;i++){
    my.push(String.fromCharCode(97+i));
}
my.push(null);
my.pipe(process.stdout);