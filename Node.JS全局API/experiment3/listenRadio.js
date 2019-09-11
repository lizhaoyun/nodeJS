const radio = require("./radio.js").radio;
const events= require("events");
const EventEmitter = events.EventEmitter;
var name = process.argv[2];
var hz = process.argv[3];

var ra1 = new radio(name,hz);
ra1.emit("open");
ra1.on("open",function(){
    ra1.play();
})
ra1.emit("close");
ra1.on("close",function(){
     ra1.stop();
});