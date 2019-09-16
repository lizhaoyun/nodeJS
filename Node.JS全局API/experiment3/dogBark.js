// const dog = require("./dog.js").Dog;
const dog = require("./dog.js");


// var dog1 =dog.createdog("tai",5);
// var dog2 =dog.createdog("zang",9);

var dog1 =new dog("tai",5);
var dog2 =new dog("zang",9);

function barkFun(){
    console.log(this.name+" barked!"+ this.energy);
}

dog1.on("bark",barkFun);

var timer=setInterval(() => {
        if(dog1.energy<1){
            timer.unref();
        }else{
            dog1.energy--;
            dog1.emit("bark");
        }
    }, 1000);


    
// dog2.on("bark",function(){
//     console.log(this.name+" barked!"+ this.energy);
// });
