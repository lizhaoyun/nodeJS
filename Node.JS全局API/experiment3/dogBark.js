const dog = require("./dog.js").Dog;
const events = require("events");
const emitter = events.EventEmitter;

// var dog1 =dog.createdog("tai",5);
// var dog2 =dog.createdog("zang",9);

var dog1 =new dog("tai",5);
var dog2 =new dog("zang",9);


dog1.on("bark",function(){
    console.log(this.name+" barked!"+ this.energy);
});
dog2.on("bark",function(){
    console.log(this.name+" barked!"+ this.energy);
});
