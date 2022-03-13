// console.log(process.argv[2]);
let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

process.nextTick(function(){
    myevent.emit("ischoolEvent");
});

myevent.on("ischoolEvent", function(){
    console.log("iSchool Event Happened");
});

console.log("hello from ischool");

for(let i = 0; i < 100; i++){
    console.log(i);
};

