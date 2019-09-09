function Bomb(){
    this.message = "bomb!!"; 
}
Bomb.prototype.explode=function(){
    console.log(this);
    console.log(this.message);
}

var timer = new Bomb();
setTimeout(function(){
    timer.explode();    //timer本身调用方法并执行。
},2000);

// setTimeout(timer.explode.bind(timer),1000);
// setTimeout(timer.explode,1000);      //undefined       timer.explode代替了function(){}的位置，此时的this指向应为function的this

/**
 * setTimeout()，回调函数必须是一个函数
 */
