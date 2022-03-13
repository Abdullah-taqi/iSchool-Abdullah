let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("ischoolEvent", function(){
    console.log("ischool Event Happened");
});

setTimeout(function(){
    myevent.emit("ischoolEvent");
}, 2000);
