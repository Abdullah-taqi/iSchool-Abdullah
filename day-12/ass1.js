// Ques - create an event that gets called once every 2 seconds for 5 times

let EventEmitter = require("events").EventEmitter;
let myevent = new EventEmitter();
myevent.on("ischoolEvent", function(){
    console.log("ischool Event Happened");
});
// repeats after 2 seconds
let x = 0;
let taskgiven = setInterval(function(){
    myevent.emit("ischoolEvent");     // stops after 5 times
    if (++x === 5) {
        console.log("ischoolEvent stopped");
        clearInterval(taskgiven);
    }
}, 2000);


