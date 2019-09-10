const circle = require("./circleModule.js");
var r = process.argv[2];
var middata=circle.circleFun(r);
// circle.circleFun(r).area();
// circle.circleFun(r).circumference();
middata.area();
middata.circumference();