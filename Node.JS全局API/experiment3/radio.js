const EventEmitter = require("events").EventEmitter;

function Radio(name,hz){
    EventEmitter.call(this);
    this.name=name;
    this.hz = hz;
}
Radio.prototype.__proto__ = EventEmitter.prototype;
Radio.prototype.play= function(){
    console.log("打开radio");
    setTimeout(() => {
        console.log("lalala");
        this.emit("close");
    }, 2000);
    
}
Radio.prototype.stop= function(){
    // this.emit("close");
    console.log("关闭radio");
    
}

module.exports={
    radio:Radio
}
