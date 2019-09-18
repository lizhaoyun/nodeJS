const Radio = require("./radio.js");
const station={
    hz:'106.7',
    name:'music radio'
};


var ra1 = new Radio(station);
ra1.emit("open");
ra1.on("open",(station)=>{
    console.log('"%s" FM %s opened', station.name, station.hz);
    console.log("lalala...");
})
ra1.on("stop",(station)=>{
    console.log('"%s" FM %s closed', station.name,station.hz);
});