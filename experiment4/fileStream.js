const fs =require("fs");
const path = require("path");

let filepath = path.join(__dirname,"/from.txt");
let wpath = path.join(__dirname,"/to.txt");
let readstream = fs.createReadStream(filepath);
let write = fs.createWriteStream(wpath);

readstream.pipe(write);