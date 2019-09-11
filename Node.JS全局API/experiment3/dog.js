const events = require("events");
const emitter = events.EventEmitter;

function Dog(name,energy){
    emitter.call(this);
    this.name = name;
    this.energy = energy;
    var timer=setInterval(() => {
        if(this.energy<1){
            timer.unref();
        }else{
            this.energy--;
            this.emit("bark");
        }
        // this.emit("bark");
    }, 1000);
}
Dog.prototype.__proto__ = emitter.prototype;

function createdog(name,energy){
    return  new Dog(name,energy);
}

module.exports={
    // createdog:createdog
    Dog:Dog
}





