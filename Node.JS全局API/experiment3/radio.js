const EventEmitter = require("events").EventEmitter;
const util=require("util");

function Radio(station){
    EventEmitter.call(this);
    setTimeout(()=>{
        this.emit("open",station);
    },0);
    setTimeout(()=>{
        this.emit('stop',station);
    },5000);
}
util.inherits(Radio,EventEmitter);

module.exports=Radio

