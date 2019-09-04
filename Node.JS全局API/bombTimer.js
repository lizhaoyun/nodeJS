function Bomb(){
    this.message = "bomb!!"; 
}
Bomb.prototype.explode=function(){
    console.log(this.message);
}

var timer = new Bomb();
setTimeout(function(){
    timer.explode();
},2000);