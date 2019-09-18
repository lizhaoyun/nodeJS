const events = require("events");
const emitter = events.EventEmitter;

function Dog(name,energy){
    emitter.call(this);     //改变this指向为dog的this指向，执行emitter       new实例化过程中执行的方法
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
Dog.prototype.__proto__ = emitter.prototype;        //避免覆盖dog的prototype上的方法

// function createdog(name,energy){
//     return  new Dog(name,energy);
// }

module.exports={
    // createdog:createdog
    Dog:Dog
}

// module.exports=Dog;





