// var r=process.argv[2];
function circleFun(r){
    var circumference =function(){
        console.log(2*Math.PI*r);
    }

    var area=function(){
        console.log(Math.PI*r*r);
    }

    return {circumference:circumference,area:area};
}


module.exports={
    circleFun:circleFun
}
