const circle = require("./circleModule.js");
var r = process.argv[2];
circle.circleFun(r).area();
circle.circleFun(r).circumference();